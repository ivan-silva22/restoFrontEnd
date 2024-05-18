import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { agregarAlCarrito, consultaCrearPedidos, totalCarrito } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Pedidos = ({ carrito, usuarioLogueado, setCarrito }) => {
  const [total, setTotal] = useState(0);

  const navegacion = useNavigate();

  const handleClick = () => {
    console.log('hola')
    consultaCrearPedidos(carrito, total, usuarioLogueado).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire(
          "Pedido exitoso",
          "¡Tu pedido fue realizado y pronto llegará a tu mesa!",
          "success",
        );
        setCarrito([]);
        navegacion("/");
      }
    })
  };

  useEffect(()=>{
    totalCarrito(carrito, setTotal);
  },[carrito])

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
                    <h4>{producto.cantidad}</h4>
                  </div>
                </div>
                <div className="col-md-2">
                  <h3>Precio</h3>
                  <h5>${producto.precio}</h5>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn bg-btn my-3"
                    onClick={handleClick}
                  >
                    Realizar pedido
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <hr />
        <div className="text-end">
          <p>Total a pagar: <span className="fw-bold">${total}</span></p>
        </div>
      </Container>
    </main>
  );
};

export default Pedidos;
