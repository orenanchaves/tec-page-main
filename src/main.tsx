import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/main.css'
import '../src/fonts/OkineSans-bold.otf'
import '../src/fonts/OkineSans-regular.otf'
import '../src/fonts/OkineSans-light.otf'
import '../src/fonts/OkineSans-medium.otf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
