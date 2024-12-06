import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import "../App.css";

const MyNavbar = () => {
  const location = useLocation();
  return (
    <header>
      <Row>
        <Col xs={12}>
          <Navbar bg="light" expand="lg" className="custom-navbar">
            <Container>
              <Navbar.Brand className="text-primary">METEO.IT</Navbar.Brand>

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  <NavLink
                    to="/"
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    About
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Services
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Contact
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </header>
  );
};

export default MyNavbar;
