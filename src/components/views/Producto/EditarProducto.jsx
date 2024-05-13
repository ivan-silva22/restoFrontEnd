import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaObtenerProducto } from "../../helpers/helpers";
import { useParams } from "react-router-dom";

const EditarProducto = () => {

  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue,
  } = useForm();

  useEffect(()=>{
    consultaObtenerProducto(id).then((respuesta)=>{
      if(respuesta){
        setValue("nombreProducto", respuesta.nombreProducto);
        setValue("descripcion", respuesta.descripcion);
        setValue("precio", respuesta.precio);
        setValue("imagen", respuesta.imagen);
        setValue("categoria", respuesta.categoria);
      }
    })
  },[])

  const onSubmit = (producto) =>{
    console.log(producto)
  }

  return (
    <main className="main my-5">
      <div className="w-50 mx-auto">
        <h2>Editar producto</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label><span className="estilo-form">Nombre</span></Form.Label>
            <Form.Control type="text" placeholder="Nombre"
             {...register("nombreProducto", {
              required: "El nombre es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad maxima de caracteres es de 100 digitos",
              },
            })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label><span className="estilo-form">Descripción</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Descripción"
            {...register("descripcion", {
              required: "La descripción es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 500,
                message: "La cantidad maxima de caracteres es de 500 digitos",
              },
            })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="precio">
            <Form.Label><span className="estilo-form">Precio</span></Form.Label>
            <Form.Control type="number" placeholder="$4000"
            {...register("precio", {
              required: "La descripción es un dato obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo es de $10000",
              },
            })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="imagen">
            <Form.Label><span className="estilo-form">URL Imagen</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
              {...register('imagen',{
                required: 'La imagen es un dato obligatorio',
                pattern:{
                  value:/^.*\.(png|jpg|jpeg)$/,
                  message:'El formato de la URL es invalido, el formato debe ser .png / .jpg / .jpeg'
                }
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label><span className="estilo-form">Categoria</span></Form.Label>
            <Form.Select aria-label="Default select example"
            {...register('categoria',{
              required: 'La categoria es obligatoria'
            })}
            >
              <option value="">Seleccione una opción</option>
              <option value="Clasicas">Clásicas</option>
              <option value="Vegetariana">Vegetariana</option>
              <option value="Vegana">Vegana</option>
              <option value="Vegana">Postres</option>
              <option value="Vegana">Bebidas</option>
            </Form.Select>
            <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
          </Form.Group>
          <button className=" btn bg-btn" type="submit">
            Guardar
          </button>
        </Form>
      </div>
    </main>
  );
};

export default EditarProducto;
