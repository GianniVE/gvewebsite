import './App.css';
import Nav from './Components/Nav/Navbar'
import { Routes, Route } from "react-router-dom";
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
    
    <div className="App">
    <Nav />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
    </>
      
  );
}

export default App;
