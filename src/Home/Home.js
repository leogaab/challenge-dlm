import { useState } from "react"
import LogIn from "../Login/Login"

const Home = (isUserLogged) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLogged)
  return (
    <>
     {
      !isLoggedIn ? 
        (<LogIn onClick={()=> setIsLoggedIn(true)} />) : 
        (<>Devuelvo el home</>)
     }
    </>
  )
}

export default Home