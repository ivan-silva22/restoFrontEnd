import { Form } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <main className="main my-5">
      <div className="w-50 mx-auto">
        <h2>Editar producto</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label><span className="estilo-form">Nombre</span></Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label><span className="estilo-form">Descripción</span></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Descripción" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="precio">
            <Form.Label><span className="estilo-form">Precio</span></Form.Label>
            <Form.Control type="number" placeholder="$4000" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imagen">
            <Form.Label><span className="estilo-form">URL Imagen</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label><span className="estilo-form">Categoria</span></Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="">Seleccione una opción</option>
              <option value="Clasicas">Clásicas</option>
              <option value="Vegetariana">Vegetariana</option>
              <option value="Vegana">Vegana</option>
              <option value="Vegana">Postres</option>
              <option value="Vegana">Bebidas</option>
            </Form.Select>
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
