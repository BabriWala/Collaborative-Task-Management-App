import { useContext } from "react"
import { AuthContext } from "./AuthContext/AuthContext"
import Login from "./component/Login";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";


function App() {
  const {handleGoogleLogin, handleSignOut} = useContext(AuthContext);
  // console.log(handleGoogleLogin)

  const googleLogin = () =>{
    handleGoogleLogin().then(result => {
      console.log(result)
    })
  }

  const signOut = () =>{
    handleSignOut().then(()=>{
      console.log("Sign Out Successful")
    })
  }

  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
