import { Container, Table } from "react-bootstrap";
import ItemPedidos from "./Pedidos/ItemPedidos";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { consultaListaPedidos } from "../helpers/helpers";

const AdminPedidos = ({pedidos, setPedidos}) => {

  useEffect(() => {
    consultaListaPedidos().then((respuesta) => {
      if (respuesta) {
        setPedidos(respuesta);
      } else {
        console.log("mesaje");
      }
    });
  }, []);

  return (
    <main className="main my-4">
      <Container className="my-5">
        <section>
          <h2 className="display-6">Pedidos solicitados</h2>
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
                <th>Cliente</th>
                <th>Producto</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido, indice) => (
                <ItemPedidos pedido={pedido} key={pedido.id} indice={indice} setPedidos={setPedidos} ></ItemPedidos>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default AdminPedidos;
