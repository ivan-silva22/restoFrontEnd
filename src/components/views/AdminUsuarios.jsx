import { Container, Table } from "react-bootstrap";
import ItemUsuarios from "./Usuario/ItemUsuarios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaListaUsuarios } from "../helpers/helpers";
import Swal from "sweetalert2";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultaListaUsuarios().then((respuesta) => {
      if (respuesta) {
        setUsuarios(respuesta);
      } else {
        Swal.fire({
          title: "Error",
          text: "No se puede acceder a los usuarios, intente nuevamente más tarde.",
          icon: "error",
          confirmButtonColor: "#bc8c4c",
        });
      }
    });
  }, []);

  return (
    <main className="main my-4">
      <Container className="my-5">
        <section>
          <h2 className="display-6">Usuarios disponibles</h2>
          <hr />
        </section>
        <section>
          <div className="my-3">
            <Link className="btn bg-btn" to={"/administrador"}>
              Productos
            </Link>
            <Link
              className="btn bg-btn mx-3"
              to={"/administrador/administradorusuarios"}
            >
              Usuarios
            </Link>
            <Link
              className="btn bg-btn"
              to={"/administrador/administradorpedidos"}
            >
              Pedidos
            </Link>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((itemUsuario, indice) => (
                <ItemUsuarios key={itemUsuario.id} itemUsuario={itemUsuario} indice={indice}></ItemUsuarios>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminUsuarios;
