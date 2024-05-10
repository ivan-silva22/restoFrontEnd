import { Container, Table } from "react-bootstrap";
import ItemProducto from "./Producto/ItemProducto";

const AdminProductos = () => {
  return (
    <main className="main my-4">
      <Container className="my-5">
        <section>
          <h2 className="display-6">Productos disponibles</h2>
          <hr />
        </section>
        <section>
          <div className="my-3">
            <button className="btn bg-btn">
                Usuarios
            </button>
            <button className="btn bg-btn mx-3">
                Pedidos
            </button>
            <button
              className="btn bg-btn"
            >
              Agregar
            </button>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>URL de imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemProducto></ItemProducto>
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminProductos;
