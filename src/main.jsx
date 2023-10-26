import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import store from './app/store.js'
import './index.css'
import ChakraUI from './components/chakra.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraUI>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraUI>
  </React.StrictMode>
)
