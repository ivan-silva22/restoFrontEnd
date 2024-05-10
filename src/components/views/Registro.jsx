import { Form } from "react-bootstrap";

const Registro = () => {
  return (
    <main className="main my-4">
      <div className="w-50 mx-auto">
        <h2>Registrarse</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contaseña *</Form.Label>
            <Form.Control type="password" placeholder="********" />
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
