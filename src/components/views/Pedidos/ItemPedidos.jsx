const ItemPedidos = ({ pedido, indice }) => {
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
      <td>{pedido.estado}</td>
      <td className="text-center">
        <button className="btn btn-warning">Cambiar estado</button>
      </td>
    </tr>
  );
};

export default ItemPedidos;
