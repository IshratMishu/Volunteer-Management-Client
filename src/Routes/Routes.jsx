import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Demo from "../Pages/Demo/Demo";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layout/Root";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/demo",
                element: <Demo></Demo>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ],
    },
]);
