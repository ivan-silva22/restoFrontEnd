import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = ({ usuarioLogueado, setUsuarioLogueado, setCarrito }) => {
  const navegacion = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "Sesión cerrada!",
      text: "Has cerrado sesión con éxito. ¡Hasta pronto!",
      icon: "success",
      confirmButtonColor: "#bc8c4c",
    });
    setUsuarioLogueado({});
    setCarrito([]);
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("carrito");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={"nav-item nav-link"} to="/">
              Inicio
            </NavLink>
            <NavLink end className={"nav-item nav-link"} to="/pedidos">
              Pedidos
            </NavLink>
            <NavLink end className={"nav-item nav-link"} to="/acercade">
              Acerca de
            </NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
                {usuarioLogueado.rol === "administrador" ? (
                  <>
                    <NavLink
                      end
                      className={"nav-item nav-link"}
                      to="/administrador"
                    >
                      Administrador
                    </NavLink>
                    <div>
                      <button className={"nav-item nav-link"} onClick={logout}>
                        Cerrar sesión
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <button className={"nav-item nav-link"} onClick={logout}>
                        Cerrar sesión
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <NavLink end className={"nav-item nav-link"} to="/registro">
                  Registro
                </NavLink>
                <NavLink end className={"nav-item nav-link"} to="/login">
                  Iniciar sesión
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
