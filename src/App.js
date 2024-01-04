
import './App.css';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup  />} />
       
      </Routes>
      

      </Router>
    </>
  );
}

export default App;
