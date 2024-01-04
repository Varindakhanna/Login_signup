
import './App.css';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
      

      </Router>
    </>
  );
}

export default App;
