import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg"
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
            <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={'nav-item nav-link'} to='/'>Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/administradorproductos'>Administrador</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/pedidos'>Pedidos</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/registro'>Registro</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/login'>Iniciar sesión</NavLink>
            <NavLink end className={'nav-item nav-link'} to='/acercade'>Acerca de</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
