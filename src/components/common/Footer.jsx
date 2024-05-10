import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark p-3">
      <Container>
        <div className="contenedor-footer">
          <div>
            <NavLink href="#">
              <img className="logo" src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#features">Acerca de</Nav.Link>
                  <Nav.Link href="#pricing">Ubicación</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
      </Container>
      <hr className="linea-footer"/>
      <div className="text-white text-center">
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
