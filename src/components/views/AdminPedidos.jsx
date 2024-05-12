import { Container, Table } from "react-bootstrap";
import ItemPedidos from "./Pedidos/ItemPedidos";
import { Link } from "react-router-dom";

const AdminPedidos = () => {
  return (
    <main className="main my-4">
      <Container className="my-5">
        <section>
          <h2 className="display-6">Pedidos solicitados</h2>
          <hr />
        </section>
        <section>
          <div className="my-3">
            <Link className="btn bg-btn" to={"/administradorproductos"}>
              Productos
            </Link>
            <Link className="btn bg-btn mx-3" to={"/administradorusuarios"}>
              Usuarios
            </Link>
            <Link className="btn bg-btn" to={"/administradorpedidos"}>
              Pedidos
            </Link>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemPedidos></ItemPedidos>
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminPedidos;
