import Home from "./Components/Home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Components/Products/Products";
import Layout from "./Components/Layout/Layout";
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import Product from "./Components/product/product";
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.scss'



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
