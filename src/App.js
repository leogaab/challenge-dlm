import { useState } from 'react';
import Card from './Cards/Card';
import LogIn from './Login/Login';
import Menu from './Menu/Menu';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <>
      {!isLoggedIn ? (<LogIn onClick={()=> setIsLoggedIn(true)} />)
      : (
        <>
          <Menu isLoggedIn={isLoggedIn} onClick={()=> {setIsLoggedIn(!isLoggedIn)}} />
          <Card />
        </>
      )
      }
    </>
  );
}

export default App;