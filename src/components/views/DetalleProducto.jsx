import { Card, Row, Col, Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <main className="main my-5">
      <Container>
        <Card className="detalle p-4">
          <Row>
            <Col className="col-md-6 col-sm-12">
              <Card.Img
                className="img-detalle"
                variant="top"
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
              />
            </Col>
            <Col className="col-md-6 col-sm-12">
              <Card.Body>
                <Card.Title>Pizza</Card.Title>
                <Card.Text>Descripción: Alguna descripcion....</Card.Text>
                <Card.Text>Precio: $5000</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </main>
  );
};

export default DetalleProducto;
