import { Col, Container, Row } from "react-bootstrap";

const Pedidos = () => {
  return (
    <main className="main my-5">
      <Container>
        <h2>Mis pedidos</h2>
        <hr />
        <Row>
          <Col>
            <div className="row border border-3 p-3 text-center justify-content-center">
              <div className="col-md-2">
                <img
                  className="img-fluid rounded"
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-2">
                <h3>Producto:</h3>
                <h5>Pizza</h5>
              </div>
              <div className="col-md-2 text-center">
                <h3>Cantidad:</h3>
                <div className="d-flex justify-content-evenly">
                  <button className="btn bg-btn">+</button>
                  <h4>2</h4>
                  <button className="btn bg-btn">-</button>
                </div>
              </div>
              <div className="col-md-2">
                <h3>Total:</h3>
                <h5>$5000</h5>
              </div>
              <div className="col-md-2">
              <button className="btn bg-btn my-3">Realizar pedido</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Pedidos;
