# 插圖優化：1024px PNG → 512px WebP (q92)
#
# 用法：python3 scripts/optimize-illustrations.py
#   - 原始 PNG 移到 assets-src/illustrations/（留底，不部署）
#   - 512px WebP 輸出回 public/illustrations/（覆蓋原路徑檔名，副檔名改 .webp）
#   - 已是 .webp 或原檔已備份的自動跳過
#
# 之後需把程式碼中的 illustration 路徑 .png → .webp

import os
import shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / 'public' / 'illustrations'
BACKUP_DIR = ROOT / 'assets-src' / 'illustrations'
SIZE = 512
QUALITY = 92

done = skipped = 0
saved_before = saved_after = 0

for png in sorted(SRC_DIR.rglob('*.png')):
    rel = png.relative_to(SRC_DIR)          # e.g. duplex/ㄅㄚ.png
    webp = png.with_suffix('.webp')
    backup = BACKUP_DIR / rel

    if webp.exists():
        skipped += 1
        continue

    backup.parent.mkdir(parents=True, exist_ok=True)

    img = Image.open(png).convert('RGBA')
    small = img.resize((SIZE, SIZE), Image.LANCZOS)
    small.save(webp, 'WEBP', quality=QUALITY, method=6)

    saved_before += png.stat().st_size
    saved_after += webp.stat().st_size

    # 原 PNG 移到備份，public 只留 webp
    shutil.move(str(png), str(backup))
    done += 1
    print(f'{rel}  →  .webp ({webp.stat().st_size // 1024}KB)')

mb = lambda b: b / 1024 / 1024
print(f'\n完成：{done} 張轉換、{skipped} 張已存在')
if done:
    print(f'原始 {mb(saved_before):.1f}MB → WebP {mb(saved_after):.1f}MB'
          f'（{saved_after / saved_before * 100:.1f}%）')
    print(f'原始 PNG 已備份到 {BACKUP_DIR}')
