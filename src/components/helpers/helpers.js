const URLUsuario = import.meta.env.VITE_API_USUARIO;

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