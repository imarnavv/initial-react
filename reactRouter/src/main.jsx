import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'

const router = createBrowserRouter([
  {
  path:'/',
  element: <Layout/>,
  children: [
    {
      path: '',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
