import { Col, Container, Row } from "react-bootstrap";

const Pedidos = ({carrito}) => {

  console.log(carrito)
    

  return (
    <main className="main my-5">
      <Container>
        <h2>Mis pedidos</h2>
        <hr />
        <Row>
          {carrito.map((producto, indice) => (
            <Col key={indice} className="col-md-12 mt-2">
            <div className="row border border-3 p-3 text-center justify-content-center">
              <div className="col-md-2">
                <img
                  className="img-fluid rounded"
                  src={producto.imagen}
                  alt=""
                />
              </div>
              <div className="col-md-2">
                <h3>Producto:</h3>
                <h5>{producto.nombreProducto}</h5>
              </div>
              <div className="col-md-2 text-center">
                <h3>Cantidad:</h3>
                <div className="d-flex justify-content-evenly">
                  <button className="btn bg-btn">+</button>
                  <h4>{producto.cantidad}</h4>
                  <button className="btn bg-btn">-</button>
                </div>
              </div>
              <div className="col-md-2">
                <h3>Precio</h3>
                <h5>${producto.precio}</h5>
              </div>
              <div className="col-md-2">
                <button className="btn bg-btn my-3">Realizar pedido</button>
              </div>
            </div>
          </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Pedidos;
