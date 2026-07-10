# 白底 → 透明背景
# 從四角 flood-fill 找出「連通到邊緣的近白色區域」設為透明，
# 物件內部的白色高光不會被誤刪。
#
# 用法：python3 scripts/remove-background.py [資料夾，預設 public/illustrations/words]

import sys
from pathlib import Path

import numpy as np
from PIL import Image
from collections import deque

THRESHOLD = 238   # RGB 三通道都 >= 此值視為背景白
FEATHER = 2       # 邊緣羽化 pixel 數


def remove_bg(path: Path) -> bool:
    img = Image.open(path).convert('RGBA')
    arr = np.array(img)
    h, w = arr.shape[:2]

    near_white = (arr[:, :, :3] >= THRESHOLD).all(axis=2)

    # BFS flood-fill：只從邊緣出發，物件內部白色不會被選到
    bg = np.zeros((h, w), dtype=bool)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if near_white[y, x] and not bg[y, x]:
                bg[y, x] = True
                q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if near_white[y, x] and not bg[y, x]:
                bg[y, x] = True
                q.append((y, x))

    while q:
        y, x = q.popleft()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and near_white[ny, nx] and not bg[ny, nx]:
                bg[ny, nx] = True
                q.append((ny, nx))

    if not bg.any():
        return False

    # 羽化：背景邊緣往內做 alpha 漸變，避免鋸齒白邊
    alpha = np.where(bg, 0, 255).astype(np.float32)
    for _ in range(FEATHER):
        pad = np.pad(alpha, 1, mode='edge')
        alpha = (pad[:-2, 1:-1] + pad[2:, 1:-1] + pad[1:-1, :-2] + pad[1:-1, 2:] + alpha * 4) / 8

    arr[:, :, 3] = alpha.astype(np.uint8)
    Image.fromarray(arr).save(path)
    return True


def main():
    folder = Path(sys.argv[1] if len(sys.argv) > 1 else 'public/illustrations/words')
    done = skipped = 0
    for p in sorted(folder.glob('*.png')):
        img = Image.open(p)
        # 已經有透明背景的跳過
        if img.mode == 'RGBA' and np.array(img)[:, :, 3].min() == 0:
            skipped += 1
            continue
        if remove_bg(p):
            done += 1
            print(f'{p.name} ✓')
        else:
            print(f'{p.name} — 找不到白色背景，略過')
    print(f'\n完成：{done} 張去背、{skipped} 張已是透明')


if __name__ == '__main__':
    main()
