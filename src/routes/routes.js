import { Navigate } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import AboutUs from "../components/Company/AboutUs/AboutUs";
import Library from "../components/Company/Library/Library";
import Register from "../components/Users/Register/Register";
import Login from "../components/Users/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../components/Users/Users";

const routes = (isLoggedIn) =>{
  return [{
    path : '',
    element: isLoggedIn == "true" ? <MainLayout />  : <Navigate to="/login"/>,
    children:[
        { path: "/", element: <Navigate to="/dashboard" /> },
        { path: "/dashboard", element:<Dashboard /> },
        { path: "/users", element:<Users /> },
        { path: "/prooducts", element:<Products /> },
        { path: "/Cart", element: <Cart /> },
        { path: "/company", 
          children:[
            { path:"about-us", element: <AboutUs /> },
            { path:"library", element:<Library />}
          ]
        }
    ],
  },{
    path:"/",
    element: isLoggedIn == "false" ? <AuthLayout /> : <Navigate to="/dashboard" />,
    children:[
            { path: "/login", element: <Login />},
            { path: "register", element: <Register />},
            { path: "/", element: <Navigate  to="/login" />}
    ]
  }]
}

export default routes;