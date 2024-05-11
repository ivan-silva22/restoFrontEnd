import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import Error404 from "./components/views/Error404";
import DetalleProducto from "./components/views/DetalleProducto";
import AdminProductos from "./components/views/AdminProductos";
import EditarProducto from "./components/views/Producto/EditarProducto";
import CrearProducto from "./components/views/Producto/CrearProducto";
import Pedidos from "./components/views/Pedidos";
import AcercaDe from "./components/views/AcercaDe";
import AdminUsuarios from "./components/views/AdminUsuarios";
import AdminPedidos from "./components/views/AdminPedidos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/detalle" element={<DetalleProducto />} />
          <Route exact path="/acercade" element={<AcercaDe />} />
          <Route exact path="/pedidos" element={<Pedidos />} />
          <Route
            exact
            path="/administradorproductos"
            element={<AdminProductos />}
          />
          <Route  path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
