import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from './stores/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster richColors />
    </Provider>
  </React.StrictMode>,
)
