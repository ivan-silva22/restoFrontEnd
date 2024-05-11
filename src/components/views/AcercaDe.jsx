import { Container } from "react-bootstrap";
import desarrollador from "../../assets/desarrollador.jpg";

const AcercaDe = () => {
  return (
    <main className="main my-5">
      <Container>
        <h2>¡Bienvenido a Pizzaría Sabores!</h2>
        <hr />
        <p>
          Somos un restaurante familiar que lleva más de 25 años sirviendo las
          mejores pizzas de la ciudad. Nos apasiona la pizza y utilizamos solo
          los ingredientes más frescos y de la más alta calidad para crear
          nuestras pizzas deliciosas y auténticas.
        </p>
        <h2>Nuestra historia</h2>
        <hr />
        <p>
          Pizzaría Sabores fue fundada en 1998, por un pizzero apasionado que
          quería compartir su amor por la pizza con la comunidad. Desde
          entonces, nos hemos convertido en un restaurante favorito de las
          familias y amigos de la zona.
        </p>
        <h2>Nuestro equipo</h2>
        <hr />
        <p>
          Nuestro equipo de empleados amigables y dedicados está comprometido a
          brindarle el mejor servicio posible. Nos enorgullecemos de conocer a
          nuestros clientes habituales por su nombre y recordar sus pedidos
          favoritos.
        </p>
        <h2>Información del desarrollador del sitio web</h2>
        <hr />
        <p>Este sitio web fue desarrollado por <strong>MATE</strong>, una empresa de desarrollo web con sede en San Miguel de Tucumán. Nos especializamos en crear sitios web personalizados para restaurantes y otras empresas. </p>
        <div className="text-center">
            <img className="img-dev" src={desarrollador} alt="Foto del desarrollador" />
            <div>
                <h2>Iván Silva</h2>
                <h4>Desarrollador Full-Stack</h4>
            </div>
        </div>
      </Container>
    </main>
  );
};

export default AcercaDe;
