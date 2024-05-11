import { Container, Table } from "react-bootstrap";
import ItemUsuarios from "./Usuario/ItemUsuarios";

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
            <button className="btn bg-btn">Usuarios</button>
            <button className="btn bg-btn mx-3">Pedidos</button>
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
