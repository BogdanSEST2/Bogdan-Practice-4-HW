import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import myFirstReduxStorage from './store/index.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myFirstReduxStorage}>
      <App />
    </Provider>
  </StrictMode>,
)
