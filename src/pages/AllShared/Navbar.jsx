import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from './../../Providers/AuthProvider';
import { NavLink } from "react-router-dom";

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
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
              <NavLink className="nav-link" to={'/biodatas'}>Biodatas</NavLink>
              <NavLink className="nav-link" to={'/about-us'}>About Us</NavLink>
              <NavLink className="nav-link" to={'/contact'}>Contact Us</NavLink>
              {!user &&<NavLink className="nav-link" to={'/register'}>Register</NavLink>}
              {!user &&<NavLink className="nav-link" to={'/login'}>Login</NavLink>}
              {user && userRole !== 'admin' && <NavLink className="nav-link" to={'/dashboard'}>Dashboard</NavLink>}
              {user && userRole === 'admin' && <NavLink className="nav-link" to={'/admin'}>Dashboard</NavLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
