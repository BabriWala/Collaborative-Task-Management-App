import { useContext } from "react"
import { AuthContext } from "./AuthContext/AuthContext"
import Login from "./component/Login/Login";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";


function App() {
  
  // console.log(handleGoogleLogin)

  

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
