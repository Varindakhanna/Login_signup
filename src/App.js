import "./App.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";



  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token); // Set isLoggedIn to true if token is present
    }, []);
    
  return (
    <>
      <Router>
        <Navbar />
        <Routes>           
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
