import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';

function Navigationbar() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Andy's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='icons' style={{justifyContent:'end'}}>
            <Nav style={{gap:'0.5rem', alignItems:'center'}}>
                <img src={github} alt="github"></img>
                <img src={linkedin} alt="linkedin"></img>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navigationbar