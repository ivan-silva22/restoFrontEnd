import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) =>{
    login(usuario).then((respuesta)=>{
      if(respuesta && respuesta.status === 200){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta));
        Swal.fire({
          title: "Bienvenido",
          text: `${respuesta.nombreUsuario} iniciaste sesión correctamente`,
          icon: "success",
          confirmButtonColor: '#bc8c4c'
        });
        setUsuarioLogueado(respuesta);
        if(respuesta.rol === 'administrador'){
          navegacion('/administrador');
        }else{
          navegacion('/');
        }
      }else{
        Swal.fire({
          title: "Error",
          text: "Email o contraseña incorrecto.",
          icon: "error",
          confirmButtonColor: '#bc8c4c'
        });
      }
    });
  }

  return (
    <main className="main my-4">
      <div className="w-50 mx-auto">
        <h2>Iniciar sesión</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "El correo electronico es un dato obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'El correo electronico debe cumplir con el formato email@dominio.com'
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contaseña</Form.Label>
            <Form.Control type="password" placeholder="********"
            {...register("password",{
              required: 'La contraseña es un dato obligatorio',
              pattern:{
                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.'
              }
            })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <button className=" btn bg-btn" type="submit">
            Iniciar sesión
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Login;
