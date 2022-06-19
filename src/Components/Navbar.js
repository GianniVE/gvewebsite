import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropDown from 'react-bootstrap/NavDropdown'

function Navbar() {
  return (
    <>
      {console.log(window.location.href)}
      <div className='brand'>
        <img src={process.env.PUBLIC_URL + '/gve.png'} alt='logo' width="619px" height="186px" />
      </div>
      <NavBar bg='dark' variant='dark'
        sticky='top' expand='sm' collapseOnSelect className='justify-content-center'>{/* bg kan verwijzing naar cssklasse zijn ook. kleur navbar. Sticky= vast aan bovenkant bij scroll? */}
        <NavBar.Toggle />

        <NavBar.Collapse className="justify-content-center ">
          <Nav>

            {window.location.href.includes("/Home") ? null :
              <Nav.Link href="Home">Home</Nav.Link>
            }

            <Nav.Link href="About">About me</Nav.Link>
            <Nav.Link href="Education">Education</Nav.Link>

            <NavDropDown title="Projects">
              <NavDropDown.Item href="Proj1">Proj1</NavDropDown.Item>
              <NavDropDown.Item href="Proj2">Proj2</NavDropDown.Item>
              <NavDropDown.Item href="Proj3">Proj3</NavDropDown.Item>
            </NavDropDown>

          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </>
  );
}

export default Navbar;
