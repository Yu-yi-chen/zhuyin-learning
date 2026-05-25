import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode intentionally omitted — HanziWriter is incompatible with
// Strict Mode's double-effect invocation (clears SVG before re-mount).
createRoot(document.getElementById('root')).render(<App />)
