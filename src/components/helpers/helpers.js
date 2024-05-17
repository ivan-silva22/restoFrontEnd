const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLPedido = import.meta.env.VITE_API_PEDIDO;

export const login = async (usuario) => {
  console.log(usuario);
  try {
    const respuesta = await fetch(URLUsuario + "/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario)
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      nombreUsuario: datos.nombreUsuario,
      rol: datos.rol,
    }
  } catch (error) {
    console.log(error);
  }
};

export const consultaListaProductos = async () => {
  try {
    const respuesta = await fetch(URLProducto);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaBorrarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaCrearProducto = async (producto) => {
  try {
    const respuesta = await fetch(URLProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaObtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${id}`);
    const producto = respuesta.json();
    return producto;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaEditarProducto = async (producto, codigo) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${codigo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaCrearUsuario = async (usuario) => {
  try {
    const listaDeUsuarios = await fetch(URLUsuario + "/usuarios");
    console.log(listaDeUsuarios)
    const arrayDeUsuarios = await listaDeUsuarios.json();
    const usuarioExiste = arrayDeUsuarios.find(
      (item) =>
        item.nombreUsuario === usuario.nombreUsuario ||
        item.email === usuario.email
    );
    if(!usuarioExiste){
      const respuesta = await fetch(URLUsuario + "/registro",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const data = respuesta.json();
      return data;
    }else{
      return null;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaListaUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuario + "/usuarios");
    const listaDeUsuarios = await respuesta.json();
    return listaDeUsuarios;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const agregarAlCarrito = (setCarrito, carrito, producto) => {
  const existe = carrito.filter((item) => item.id === producto._id)[0];
  if (!existe) {
    producto.cantidad = 1;
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
  } else {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === producto._id) {
        producto.cantidad += 1;
        return item;
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  }
};

export const fechaPedido = (fecha) => {
  const dia = new Date().getDate();
  const mes = new Date().getMonth() + 1;
  const anio = new Date().getFullYear();
  return `${dia}/${mes}/${anio}`;
};

export const consultaCrearPedidos = async (carrito, total, usuarioLogueado) => {
  const fechaDelPedido = new Date();
  let pedidoCliente = {
    nombreUsuario: usuarioLogueado.nombreUsuario,
    fecha: fechaPedido(fechaDelPedido),
    productos: carrito.map((producto) => ({
      id: producto._id,
      nombreProducto: producto.nombreProducto,
      cantidad: producto.cantidad,
    })),
    estado: "Pendiente",
    total: total,
  };
  try {
    const respuesta = await fetch(URLPedido + "/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedidoCliente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const totalCarrito = (carrito, setTotal) => {
  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );
  setTotal(totalCarrito);
};

export const consultaListaPedidos = async () => {
  try {
    const respuesta = await fetch(URLPedido + "/pedidos");
    const listaDePedidos = await respuesta.json();
    return listaDePedidos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaEditarEstadoPedido = async (estado, id) => {
  try {
    const respuesta = await fetch(`${URLPedido}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaBorrarPedido = async (id) => {
  try {
    const respuesta = await fetch(`${URLPedido}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
