import { useState } from "react";
import { consultaEditarEstadoPedido } from "../../helpers/helpers";

const ItemPedidos = ({ pedido, indice }) => {
  const [estado, setEstado] = useState(pedido.estado);

  const cambiarEstado = () => {
    const nuevoEstado = estado === "Pendiente" ? "Entregado" : "Pendiente";
    consultaEditarEstadoPedido({ estado: nuevoEstado }, pedido.id).then(() => {
      setEstado(nuevoEstado);
    });
  };

  return (
    <tr>
      <td>{indice + 1}</td>
      <td>{pedido.nombreUsuario}</td>
      <td>
        <ul>
          {pedido.productos.map((producto) => (
            <li key={producto.id}>
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
            <button className="btn btn-danger">Eliminar</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ItemPedidos;
