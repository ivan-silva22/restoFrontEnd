import { Container, Table } from "react-bootstrap";
import ItemProducto from "./Producto/ItemProducto";
import { Link } from "react-router-dom";

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
            <Link className="btn bg-btn" to={'/administrador/administradorusuarios'}>
                Usuarios
            </Link>
            <Link className="btn bg-btn mx-3" to={'/administrador/administradorpedidos'}>
                Pedidos
            </Link>
            <Link
              className="btn bg-btn"
              to={'/administrador/crearproducto'}
            >
              Agregar
            </Link>
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
