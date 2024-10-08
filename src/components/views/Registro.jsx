import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaCrearUsuario } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = ({setUsuarioLogueado}) => {
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    consultaCrearUsuario(usuario).then((respuesta) => {
      const nuevoUsuario = {
        nombreUsuario: usuario.nombreUsuario,
        rol: 'Cliente',
      };
      if(respuesta && respuesta.mensaje === "usuario creado"){
        sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
        Swal.fire("Exito!", `Usuario creado con exito`, "success");
        setUsuarioLogueado(nuevoUsuario);
        navegacion('/')
      }else if(respuesta === null){
        Swal.fire("Error", "El usuario o email ya existe", "error");
      }else{
        Swal.fire("Error", "No se puede registrar, intente nuevamente más tarde", "error");
      }
    });
  };

  return (
    <main className="main my-4">
      <div className="w-50 mx-auto">
        <h2>Registrarse</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              {...register("nombreUsuario", {
                required: "El nombre es un dato obligatorio",
                minLength: {
                  value: 2,
                  message: "La cantidad minima de caracteres es de 2 digitos",
                },
                maxLength: {
                  value: 100,
                  message: "La cantidad maxima de caracteres es de 100 digitos",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]+$/,
                  message: "Solo se permite el ingreso de texto",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreUsuario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "El correo electronico es un dato obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El correo electronico debe cumplir con el formato email@dominio.com",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contaseña *</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es un dato obligatorio",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message:
                    "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <button className=" btn bg-btn" type="submit">
            Registrarse
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Registro;
