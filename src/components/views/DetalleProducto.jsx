import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { consultaObtenerProducto } from "../helpers/helpers";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleProducto = () => {

  const [producto, setProducto] =  useState({});

  const {id} = useParams();

  useEffect(()=>{
    consultaObtenerProducto(id).then((respuesta)=>{
      if(respuesta){
        setProducto(respuesta);
      }else{
        Swal.fire(
          "Ocurrio un error",
          "No se puede mostrar el producto",
          "error"
        );
      }
    })
  },[])

  return (
    <main className="main my-5">
      <Container>
        <Card className="detalle p-4">
          <Row>
            <Col className="col-md-6 col-sm-12">
              <Card.Img
                className="img-detalle"
                variant="top"
                src={producto.imagen}
              />
            </Col>
            <Col className="col-md-6 col-sm-12">
              <Card.Body>
                <Card.Title>{producto.nombreProducto}</Card.Title>
                <Card.Text>Descripcion: {producto.descripcion}</Card.Text>
                <Card.Text>Precio: ${producto.precio}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </main>
  );
};

export default DetalleProducto;
