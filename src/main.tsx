import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './app/store.ts'
import { ThemProvider } from './context/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ThemProvider>
          <App />
          </ThemProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
