import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import path from 'path'
import { Home } from 'lucide-react'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from './dashbpard'
import Rhome from './rhome'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
     {
      element:<App/>,
      children:[
        
        {
          path:'/dashboard',
          element:<Dashboard/>
        }
      ]
     },
     {
      path:'/',
      element:<Rhome/>
      
    },
     {
      path:'/auth/sign-in',
      element:<SignInPage/>
     }
    ]
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
