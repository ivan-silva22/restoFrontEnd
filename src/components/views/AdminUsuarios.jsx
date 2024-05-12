import { Container, Table } from "react-bootstrap";
import ItemUsuarios from "./Usuario/ItemUsuarios";
import { Link } from "react-router-dom";

const AdminUsuarios = () => {
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
            <Link className="btn bg-btn mx-3" to={"/administrador/administradorusuarios"}>
              Usuarios
            </Link>
            <Link className="btn bg-btn" to={"/administrador/administradorpedidos"}>
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
              <ItemUsuarios></ItemUsuarios>
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminUsuarios;
