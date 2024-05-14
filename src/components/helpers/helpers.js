const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLPedido = import.meta.env.VITE_API_PEDIDO;

export const login = async (usuario) => {
  console.log(usuario);
  try {
    const respuesta = await fetch(URLUsuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        console.log("email y password correctos");
        return usuarioBuscado;
      } else {
        return false;
      }
    } else {
      return false;
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
    const respuesta = await fetch(URLUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaListaUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuario);
    const listaDeUsuarios = await respuesta.json();
    return listaDeUsuarios;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const  agregarAlCarrito =(setCarrito, carrito, producto)=>{
  const existe = carrito.filter((item)=> item.id === producto.id)[0];
  if(!existe){
    producto.cantidad = 1;
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
  }else{
    const nuevoCarrito = carrito.map((item)=>{
      if(item.id === producto.id){
        producto.cantidad += 1; 
        return item;
      }
      return item;
    })
    setCarrito(nuevoCarrito);
  }

}

export const fechaPedido = (fecha)=>{
  const dia = new Date().getDate();
  const mes = new Date().getMonth() + 1;
  const anio = new Date().getFullYear();
  return `${dia}/${mes}/${anio}`
}

export const consultaCrearPedidos = async (carrito, total, usuarioLogueado) => {
  const fechaDelPedido = new Date();
  let pedidoCliente = {
    nombreUsuario: usuarioLogueado.nombreUsuario,
    fecha: fechaPedido(fechaDelPedido),
    productos: carrito.map((producto)=>(
      {
        id: producto.id,
        nombreProducto: producto.nombreProducto,
        cantidad: producto.cantidad
      }
    )),
    estado: "Pendiente",
    total: total,
  } 
  try {
    const respuesta = await fetch(URLPedido, {
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

export const totalCarrito =(carrito, setTotal)=>{
  const totalCarrito = carrito.reduce((total, item)=> total + (item.precio * item.cantidad),0);
  setTotal(totalCarrito);
}

export const consultaListaPedidos = async()=>{
  try {
    const respuesta = await fetch(URLPedido);
    const listaDePedidos = await respuesta.json();
    return listaDePedidos;
  } catch (error) {
    console.log(error)
    return false;
  }
}

export const consultaEditarEstadoPedido = async(estado, id)=>{
  try {
    const respuesta = await fetch(`${URLPedido}/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const consultaBorrarPedido = async(id)=>{
  try {
    const respuesta = await fetch(`${URLPedido}/${id}`,{
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error)
    return false;
  }
}