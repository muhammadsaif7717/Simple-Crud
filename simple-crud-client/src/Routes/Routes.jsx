
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Users from "../Components/Users/Users";
import Update from "../Components/Update/Update";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/users",
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5005/users'),
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5005/users/${params.id}`),
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>,
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;