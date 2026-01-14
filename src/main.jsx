import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//strick mode is a wrapper component that'll check for potential problems in the app
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
