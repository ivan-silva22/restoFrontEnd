import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <main className="main my-4">
      <div className="w-50 mx-auto">
        <h2>Iniciar sesión</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contaseña</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
          <button className=" btn btn-detalle" type="submit">
            Iniciar sesión
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Login;
