import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    }
])


export default router;