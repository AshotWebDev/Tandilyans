import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeWrapper from './leyout/HomeWrapper'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import AdminLoginPage from './pages/AdminLoginPage/AdminLoginPage'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import { useAppSelector } from './hooks'
import { isAuth } from './features/admins/adminsSelectors'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {
  const isAuthState = useAppSelector(isAuth)
  const isAuthStorage = sessionStorage.getItem('isAuth')

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='contact' element={<ContactUsPage />} />
          <Route path='/order-product/:id' element={<OrderPage />} /> {/* Corrected route */}
        </Route>

        <Route path='/admin/login' element={<AdminLoginPage />} />
        {isAuthStorage && <Route path='/admin/dashboard' element={<AdminDashboard />} />} {/* Conditional dashboard route */}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
