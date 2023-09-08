import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";
import Layout from "../component/Layout/Layout";
import Tasks from "../component/Tasks/Tasks";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/tasks",
        element: <Layout></Layout>,
        children: [
            {
                path: "/tasks",
                element: <Tasks></Tasks>

            },
            {
                path: '/tasks/profile',
                element: <Profile></Profile>
            }
        ]
    }
])


export default router;