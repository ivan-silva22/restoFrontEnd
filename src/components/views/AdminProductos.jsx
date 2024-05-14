import { Container, Table } from "react-bootstrap";
import ItemProducto from "./Producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultaListaProductos } from "../helpers/helpers";
import Swal from "sweetalert2";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire({
          title: "Error",
          text: "No se puede acceder a los pedidos, intente nuevamente más tarde",
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
          <h2 className="display-6">Productos disponibles</h2>
          <hr />
        </section>
        <section>
          <div className="my-3">
            <Link
              className="btn bg-btn"
              to={"/administrador/administradorusuarios"}
            >
              Usuarios
            </Link>
            <Link
              className="btn bg-btn mx-3"
              to={"/administrador/administradorpedidos"}
            >
              Pedidos
            </Link>
            <Link className="btn bg-btn" to={"/administrador/crearproducto"}>
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
              {productos.map((producto, indice) => (
                <ItemProducto
                  key={producto.id}
                  producto={producto}
                  indice={indice}
                  setProductos={setProductos}
                ></ItemProducto>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminProductos;
