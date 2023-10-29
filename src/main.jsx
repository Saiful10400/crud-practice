 import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import User from './User'
import Edit from './Edit'
import Axios from './axios'

const router= createBrowserRouter([{
  path:"/",
  element:<Home></Home>
},
{
  path:"/axios",
  element:<Axios></Axios>
}
,{
  path:"/users",
  element:<Users></Users>,
  loader:()=>fetch("https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app")
},
{
  path:"/single-user/:id",
  element:<User></User>,
  loader:({params})=>fetch(`https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app/user/${params.id}`)
},
{
  path:"/edit/:id",
  element:<Edit></Edit>,
  loader:({params})=>fetch(`https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app/user/${params.id}`)
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}>

  </RouterProvider>
  
)
