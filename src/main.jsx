import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Routerlayout 
import Routerlayout from './layout'
// import pages 
import Home from "./pages/home"
import Login from './pages/login'
import Register from './pages/register'
// import redux 
import { Provider } from 'react-redux'
import { store } from "./Redux/store/"
import Frontend from './pages/frontend'
import Admin from './AdminPage/admin/admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routerlayout />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: "/_admin_panel_",
        element: <Admin />
      },
      {
        path: "/frontend",
        element: <Frontend />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
