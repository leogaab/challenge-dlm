import { useState } from 'react';
import Card from './Cards/Card';
import LogIn from './Login/Login';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Search from './Search/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from './ErrorPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    {!isLoggedIn ? (<LogIn onClick={()=> setIsLoggedIn(true)} />) :
    (<Router>
      <Menu isLoggedIn={isLoggedIn} onClick={()=> {setIsLoggedIn(!isLoggedIn)}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>)}
    </>
        
  );
}

export default App;