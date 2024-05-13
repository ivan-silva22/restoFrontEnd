import { Link } from "react-router-dom";

const ItemProducto = ({producto, indice}) => {
  return (
    <tr>
      <td>{indice + 1}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td className="tamanio text-truncate">
        {producto.imagen}
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="btn btn-warning me-1" to={'/administrador/editarproducto'}>Editar</Link>
        <button className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  );
};

export default ItemProducto;
