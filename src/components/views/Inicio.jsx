import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import portadaUno from "../../assets/portada.jpeg";
import portadaDos from "../../assets/portada-2.jpeg";
import portadaTres from "../../assets/portada-3.webp";
import chef_1 from "../../assets/chef-1.jpg";
import chef_2 from "../../assets/chef-2.jpg";
import chef_3 from "../../assets/chef-3.jpg";
import avatar_1 from "../../assets/avatar-1.jpg";
import avatar_2 from "../../assets/avatar-2.jpg";
import avatar_3 from "../../assets/avatar-3.jpg";
import horarios from "../../assets/horarios.jpg";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  agregarAlCarrito,
  consultaListaProductos,
} from "../helpers/helpers";
import { Link } from "react-router-dom";

const Inicio = ({ usuarioLogueado, carrito, setCarrito }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultaListaProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "No se puede mostrar los productos",
          "error"
        );
      }
    });
  }, []);

  const handlePedidos = (producto) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas agregar este producto al carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#bc8c4c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, agregar"
    }).then((result) => {
      if (result.isConfirmed) {
        if (usuarioLogueado.hasOwnProperty("nombreUsuario")) {
          Swal.fire({
            title: "Producto agregado",
            text:"¡El producto se agrego correctamente a la sección 'Pedidos'!",
            icon: "success",
            confirmButtonColor: "#bc8c4c",
          });
          agregarAlCarrito(setCarrito, carrito, producto);
          let actualizarCarrito = [...carrito, producto]
          sessionStorage.setItem("carrito", JSON.stringify(actualizarCarrito));
        } else {
          Swal.fire({
            title: "Error",
            text: "Tiene que iniciar sesión para realizar el pedido",
            icon: "error",
            confirmButtonColor: "#bc8c4c",
          });
        }
        
      }
    });
    
  };

  

  return (
    <main className="main mb-5">
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
        <h1>Nuestro Menú</h1>
        <hr />
        <Row>
          {productos.map((producto) => (
            <Col key={producto._id} className=" mt-2">
              <Card className="mx-auto card-w  p-2">
                <Card.Img className="card-img" variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombreProducto}</Card.Title>
                  <Link
                    className="btn bg-btn me-2"
                    to={"/detalle/" + producto._id}
                  >
                    Ver detalle
                  </Link>
                  <button
                    className="btn bg-btn"
                    onClick={() =>
                      handlePedidos(producto)
                    }
                  >
                    Agregar al carrito
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <section className="mt-4">
          <h2 className="text-center">Chefs talentosos</h2>
          <hr />
          <Row className="mt-4">
            <Col className="text-center">
              <div className="img-chef">
                <img src={chef_1} alt="Chef" />
              </div>
              <div className="mt-2">
                <h5 className="texto">Brian Scott</h5>
                <p>
                  El Chef Brian Scott se especializa en cocina mediterránea,
                  utilizando ingredientes frescos y de temporada para crear
                  platos deliciosos y llenos de sabor.
                </p>
              </div>
            </Col>
            <Col className="text-center">
              <div className="img-chef">
                <img src={chef_2} alt="Chef" />
              </div>
              <div className="mt-2">
                <h5 className="texto">Eduardo Harris</h5>
                <p>
                  El Chef Eduardo Harris ha trabajado en algunos de los
                  restaurantes más prestigiosos del país, y su cocina ha sido
                  elogiada por su autenticidad y sabor.
                </p>
              </div>
            </Col>
            <Col className="text-center">
              <div className="img-chef">
                <img src={chef_3} alt="Chef" />
              </div>
              <div className="mt-2">
                <h5 className="texto">Richard Rebe</h5>
                <p>
                  El Chef Richard Rebe se especializa en cocina fusión,
                  combinando sabores e ingredientes de diferentes culturas para
                  crear platos únicos y emocionantes.{" "}
                </p>
              </div>
            </Col>
          </Row>
        </section>
        <section className="mt-4">
          <h2 className="text-center">Testimonios</h2>
          <hr />
          <Row className="">
            <Col className="text-center mt-2">
              <Card className="card-testimonio mx-auto">
                <img className="img-avatar" src={avatar_1} alt="" />
                <Card.Body>
                  <Card.Title className="texto">Juan Pérez</Card.Title>
                  <Card.Text>
                    "¡Me encantó mi experiencia en este restaurante! La comida
                    era deliciosa y el servicio fue impecable. Definitivamente
                    volveré y lo recomendaré a mis amigos."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-center mt-2">
              <Card className="card-testimonio mx-auto">
                <img className="img-avatar" src={avatar_2} alt="" />
                <Card.Body>
                  <Card.Title className="texto">Facundo Fernandez</Card.Title>
                  <Card.Text>
                    "Este es el mejor restaurante de la ciudad. La pasta es
                    fresca y hecha a mano, y la salsa es deliciosa. El ambiente
                    es acogedor y el personal es muy amable."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="text-center mt-2">
              <Card className="card-testimonio mx-auto">
                <img className="img-avatar" src={avatar_3} alt="" />
                <Card.Body>
                  <Card.Title className="texto">María García</Card.Title>
                  <Card.Text>
                    "He estado viniendo a este restaurante durante años y
                    siempre me ha encantado. La comida es consistentemente
                    excelente y los precios son muy razonables.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="mt-4">
          <h2 className="text-center">Horarios de trabajo</h2>
          <hr />
          <Row className="text-center">
            <Col className="col-md-6 col-sm-12 mt-2">
              <div>
                <div>
                <img className="rounded" src={horarios} alt="Horarios" />
                </div>
              </div>
            </Col>
            <Col className="col-md-6 col-sm-12 mt-2">
              <h4 className="texto">
                Lunes - Sábados:
                <span className="text-secondary"> 7:00 am - 12 pm</span>
              </h4>
              <h4 className="texto">
                Domingos:{" "}
                <span className="text-secondary"> 9:00 am - 12 pm</span>
              </h4>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Inicio;
