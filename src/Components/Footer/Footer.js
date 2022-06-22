import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Footer.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function Footer() {
  return (
    <div className='footer'>
            <MDBFooter className='bg-dark text-center text-white sticky-bottom'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <a className='btn btn-outline-light btn-floating m-1' target='blank' href='https://www.facebook.com/gianni.versees.9/' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' target='blank' href='https://www.instagram.com/gianni_versees/' role='button'>
              <MDBIcon fab icon='instagram' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' target='blank' href='https://www.linkedin.com/in/gianni-vers%C3%A9es-9a49391a7/' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </a>

            <a className='btn btn-outline-light btn-floating m-1' target='blank' href='https://github.com/GianniVE' role='button'>
              <MDBIcon fab icon='github' />
            </a>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {(new Date().getFullYear())}  - GVE
        </div>
      </MDBFooter>
    </div>


  );
}

export default Footer;