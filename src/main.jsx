import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AppointmentProvider from './Provider/AppointmentProvider .jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppointmentProvider>
  <RouterProvider router={router} />
  </AppointmentProvider>
  </StrictMode>,
)
