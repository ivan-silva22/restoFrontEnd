const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const login = async(usuario) =>{
    console.log(usuario)
    try {
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                console.log('email y password correctos')
                return usuarioBuscado
            }else{
                return false;
            }
        }else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

export const consultaListaProductos = async() =>{
    try {
      const respuesta = await fetch(URLProducto);
      const listaProductos = await respuesta.json();
      return listaProductos;        
    } catch (error) {
        console.log(error)
        return false;
    }
}