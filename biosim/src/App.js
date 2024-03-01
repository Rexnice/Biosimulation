import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import  Container  from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Articles from './pages/Articles/Articles';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Navbar expand='lg' className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack" viewBox="0 0 16 16">
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
              </svg>
              <span className='mx-2 text-light 1h-1 fw-semibold'>
                Computational
                <br></br>
                and Biosimulation
                <br></br>
                Research Group
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>

            </Nav>
          </Navbar.collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}

export default App;
