import { useContext } from "react"
import { AuthContext } from "./AuthContext/AuthContext"


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
      <button onClick={googleLogin}>Google</button>
      <button onClick={signOut}>Sign Out</button>
      {/* <button>Google</button> */}
    </>
  )
}

export default App
