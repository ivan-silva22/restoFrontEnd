import { Container, Table } from "react-bootstrap";
import ItemPedidos from "./Pedidos/ItemPedidos";

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
            <button className="btn bg-btn">Productos</button>
            <button className="btn bg-btn mx-3">Usuarios</button>
            <button className="btn bg-btn">Pedidos</button>
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
