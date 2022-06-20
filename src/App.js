import './App.css';
import Nav from './Components/Nav/Navbar'
import { Routes, Route } from "react-router-dom";
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound404'

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </>

  );
}

export default App;
