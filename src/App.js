import React from 'react'
import {Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import SignIn from './components/SignIn'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import CreateRecipe from './components/CreateRecipe'
import NavBar from './components/NavBar'
import SavedRecipes from './components/SavedRecipes'
import Login from './components/Login'
import Main from './components/Main'
import Footer from './components/Footer'

const Home = () => {
  
  return (
      <div>
          <NavBar />
            <Outlet />
          {/* <Footer /> */}
      </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:"/",
        element:<Main />
      },
      {
        path: "/auth/signin",
        element: <SignIn />
      },
      {
        path: "/auth/login",
        element: <Login />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/create-a-recipe",
        element:<CreateRecipe />
      },
      {
        path:"/saved-recipes",
        element:<SavedRecipes />
      }
    ],
  },
]);




const App = () => {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App;