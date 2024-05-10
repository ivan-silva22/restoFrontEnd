import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import portadaUno from "../../assets/portada.jpeg";
import portadaDos from "../../assets/portada-2.jpeg";
import portadaTres from "../../assets/portada-3.webp";


const Inicio = () => {
  return (
    <main className="main my-4">
      <Carousel>
        <Carousel.Item>
          <img className="portada" src={portadaUno} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="portada" src={portadaDos} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="portada" src={portadaTres} alt="" />
        </Carousel.Item>
      </Carousel>
      <Container className="mt-3">
        <h1>Menú principal</h1>
        <hr />
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
              />
              <Card.Body>
                <Card.Title>Pizza</Card.Title>
                <Card.Text>
                  Alguna descripcion
                </Card.Text>
                <button  className="btn btn-detalle">Ver detalle</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Inicio;
