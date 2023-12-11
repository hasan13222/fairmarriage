import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from './../../Providers/AuthProvider';

const NavbarComp = () => {
  const {user, userRole} = useContext(AuthContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="justify-content-between">
          <Navbar.Brand href="/">
            <img id="logo" src="/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/biodatas">Biodatas</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              {!user &&<Nav.Link href="/register">Register</Nav.Link>}
              {!user &&<Nav.Link href="/login">Login</Nav.Link>}
              {user && userRole !== 'admin' && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
              {user && userRole === 'admin' && <Nav.Link href="/admin">Dashboard</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
