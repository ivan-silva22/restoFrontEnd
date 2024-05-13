const ItemUsuarios = ({itemUsuario, indice}) => {
  return (
    <tr>
      <td>{indice + 1}</td>
      <td>{itemUsuario.nombreUsuario}</td>
      <td>{itemUsuario.email}</td>
      <td>
        {(itemUsuario.rol === "administrador")?(
          itemUsuario.rol
        ):(
          'cliente'
        ) }
      </td>
    </tr>
  );
};

export default ItemUsuarios;
