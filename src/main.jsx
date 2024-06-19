import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobleContext from './components/Context/GlobleContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobleContext>

    <App />
    </GlobleContext>
  </React.StrictMode>,
)
