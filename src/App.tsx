import Home from "./Components/Home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products/Products";
import Layout from "./Components/Layout/Layout";
import './styles/global.scss'
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import Product from "./Components/product/product";



function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/Products/:id",
          element: <Product />,
        },
      ]
    },
    {
      path: "*",
      element: <div className="error404" >
        <img src="/public/Error.svg" alt="error" />
      </div>,
    }

  ]);

  return <>

    <RouterProvider router={router} />

  </>
}

export default App
