import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './pages/_layouts/AppLayout'
import CartPage from './pages/Cart'
import HomePage from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/cart', element: <CartPage /> },
    ],
  },
])
