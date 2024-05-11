import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark p-3">
      <Container>
        <div className="contenedor-footer">
          <div>
            <NavLink to='/'>
              <img className="logo" src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Nav className="ms-auto">
                  <NavLink end className={'nav-item nav-link'} to='/'>Inicio</NavLink>
                  <NavLink end className={'nav-item nav-link'} to='/acercade'>Acerca de</NavLink>
                  <NavLink end className={'nav-item nav-link'} to='*'>Ubicación</NavLink>
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
