import { useState } from "react";
import { consultaBorrarPedido, consultaEditarEstadoPedido, consultaListaPedidos } from "../../helpers/helpers";
import Swal from "sweetalert2";

const ItemPedidos = ({ pedido, indice, setPedidos }) => {
  const [estado, setEstado] = useState(pedido.estado);

  const cambiarEstado = () => {
    const nuevoEstado = estado === "Pendiente" ? "Entregado" : "Pendiente";
    consultaEditarEstadoPedido({ estado: nuevoEstado }, pedido._id).then(() => {
      setEstado(nuevoEstado);
    });
  };

  const borrarPedido = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este pedido.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bc8c4c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarPedido(pedido._id)
          .then(() => {
            Swal.fire(
              "Pedido Eliminado.",
              "El pedido fue eliminado correctamente.",
              "success",
            );
            consultaListaPedidos().then((respuesta) => setPedidos(respuesta));
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "No se pudo eliminar el pedido. Inténtalo mas tarde.",
              "error"
            );
  
          });
      }
    });
  };

  return (
    <tr>
      <td>{indice + 1}</td>
      <td>{pedido.nombreUsuario}</td>
      <td>
        <ul>
          {pedido.productos.map((producto, indice) => (
            <li key={indice + 1}>
              {producto.nombreProducto} x {producto.cantidad}
            </li>
          ))}
        </ul>
      </td>
      <td>{estado}</td>
      <td className="text-center">
        {estado !== "Entregado" && (
          <>
            <button className="btn btn-warning" onClick={cambiarEstado}>
              {estado === "Pendiente" ? "Confirmar" : "Cancelar"}
            </button>
            <button className="btn btn-danger" onClick={borrarPedido}>
              Eliminar
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ItemPedidos;
