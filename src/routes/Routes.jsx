import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/mainLayout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AuthLayout from "../layout/authLayout/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddAToy from "../pages/add-a-toy/AddAToy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/toys')
      }
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
      }
    ]
  },
  {
    path: 'add-a-toy',
    element: <AddAToy></AddAToy>
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;