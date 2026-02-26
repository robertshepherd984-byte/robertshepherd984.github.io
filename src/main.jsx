import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force dark mode on the html element immediately
document.documentElement.classList.add('dark');
document.documentElement.style.backgroundColor = '#111827';
document.body.style.backgroundColor = '#111827';
document.body.style.color = '#f3f4f6';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)