import { Link } from "react-router-dom";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Pizza</td>
      <td>$5000</td>
      <td className="tamanio text-truncate">
        https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg
      </td>
      <td>Plato principal</td>
      <td className="text-center">
        <Link className="btn btn-warning me-1" to={'/administrador/editarproducto'}>Editar</Link>
        <button className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  );
};

export default ItemProducto;
