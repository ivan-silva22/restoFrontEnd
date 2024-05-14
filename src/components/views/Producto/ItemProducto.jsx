import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaBorrarProducto, consultaListaProductos } from "../../helpers/helpers";


const ItemProducto = ({ producto, indice, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: `Estas seguro de borrar el producto ${producto.nombreProducto}?`,
      text: "No se puede revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bc8c4c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarProducto(producto.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire({
              title: "Producto eliminado!",
              text: `El ${producto.nombreProducto} fue eliminado correctamente.`,
              icon: "success",
              confirmButtonColor: '#bc8c4c',
            });
            consultaListaProductos().then((respuesta) =>
              setProductos(respuesta)
            );
          } else {
            Swal.fire({
              title: "Ocurrio un error!",
              text: `Intente realizar este proceso más tarde.`,
              icon: "error",
              confirmButtonColor: '#bc8c4c',
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{indice + 1}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td className="tamanio text-truncate">{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-1"
          to={"/administrador/editarproducto/" + producto.id}
        >
          Editar
        </Link>
        <button className="btn btn-danger" onClick={borrarProducto}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ItemProducto;
