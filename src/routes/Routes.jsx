import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/mainLayout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


export default router;