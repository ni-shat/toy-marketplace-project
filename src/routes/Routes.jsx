import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/mainLayout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AuthLayout from "../layout/authLayout/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddAToy from "../pages/add-a-toy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/my-toys/MyToys";
import AllToys from "../pages/all-toys/AllToys";
import ViewDetails from "../pages/shared/view-details/ViewDetails";
import Blogs from "../pages/blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: 'all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/all-toys')
      },
      {
        path: 'view-details',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> 
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ]
  },
  {
    path: 'auth-layout',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'my-toys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      }
    ]
  },
  {
    path: 'add-a-toy',
    element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;