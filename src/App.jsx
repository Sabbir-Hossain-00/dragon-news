
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { HomeLayout } from './homeLayout/HomeLayout'
import { Home } from './pages/Home/Home'
import { CategoryNews } from './homeLayout/CategoryNews'
import { AuthLayout } from './AuthLayout/AuthLayout'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { AuthProvider } from './components/Context/AuthContext'
import { SingleNews } from './pages/SingleNews/SingleNews'
import { NewsLayout } from './NewsLayout/NewsLayout'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { Error } from './pages/Error/Error'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      errorElement:<Error/>,
      element: <HomeLayout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/category/:id",
          loader: ()=> fetch("/news.json"),
          element: <CategoryNews/>
          
        }
      ]
    },
    {
      path:"/auth",
      element: <AuthLayout/>,
      children:[
        {
          path:"/auth/login",
          element: <Login/>
        },
        {
          path : "/auth/register",
          element : <Register/>
        }
      ]
    },
    {
      path: "/news",
      element: <NewsLayout/>,
      children:[
        {
          path: "/news/:id",
          loader: ()=> fetch("/news.json"),
          element: <PrivateRoute><SingleNews/></PrivateRoute>
        }
      ]
    }
   
  ])



  return (
    <>
      <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
 