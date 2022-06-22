import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropDown from 'react-bootstrap/NavDropdown'
import React from 'react'
import { useNavigate } from 'react-router-dom'; // import useNavigate()

function Navbar() {
  const navigate = useNavigate(); // make const

  return (
      <NavBar collapseOnSelect expand="lg" className='bg' variant="dark">
        <Nav.Link onClick={() => navigate('/Home')}><img src={process.env.PUBLIC_URL + '/gve.png'} alt="logo" className='logo'/></Nav.Link>
        <NavBar.Toggle aria-controls="navbarScroll" />
        <NavBar.Collapse className="justify-content-end spacing">
          
          <Nav>

            {window.location.href === "https://www.gianniversees.be/#/Home" ||
              window.location.href === "http://www.gianniversees.be/#/Home" ||

              window.location.href === "https://www.gianniversees.be/" ||
              window.location.href === "http://www.gianniversees.be/" ||

              window.location.href === "http://localhost:3000/#/Home" ||
              window.location.href === "http://localhost:3000/"
              ? null :
              <Nav.Link onClick={() => navigate('/Home')}>Home</Nav.Link>
            }

            <Nav.Link onClick={() => navigate('/About')}>About me</Nav.Link>
            <Nav.Link onClick={() => navigate('/Services')}>Services</Nav.Link>
            <Nav.Link onClick={() => navigate('/Contact')}>Contact</Nav.Link>

            <NavDropDown title="Projects">
              <NavDropDown.Item onClick={() => navigate('/ZZZ')}>Overview</NavDropDown.Item>
              <NavDropDown.Divider />
              <NavDropDown.Item onClick={() => navigate('/ZZZ')}>Proj1</NavDropDown.Item>
              <NavDropDown.Item onClick={() => navigate('/ZZZ')}>Proj2</NavDropDown.Item>
              <NavDropDown.Item onClick={() => navigate('/ZZZ')}>Proj3</NavDropDown.Item>
            </NavDropDown>

          </Nav>
        </NavBar.Collapse>
      </NavBar>
  );
}

export default Navbar;
