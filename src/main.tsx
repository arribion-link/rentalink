import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
// import './css/dashboard-css/style.css'
import App from './App.tsx'
import Dashbord from './Dashbord.tsx'
import PageNotFound from './PageNotFound.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    {
      path: "/Dashbord", element: <Dashbord />,
      errorElement: <PageNotFound/>
    },
    {path:"*", element: <PageNotFound />},
  ]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
