import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/essentials', element:<App/>, errorElement:"error"}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
