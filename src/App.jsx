import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import Error404 from "./components/views/Error404";
import DetalleProducto from "./components/views/DetalleProducto";
import Pedidos from "./components/views/Pedidos";
import AcercaDe from "./components/views/AcercaDe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RutasProtegidas from "./components/Routes/RutasProtegidas";
import RutasAdmin from "./components/Routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
   

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />
        <Routes>
          <Route exact path="/" element={<Inicio usuarioLogueado={usuarioLogueado}/>} />
          <Route exact path="/registro" element={<Registro />} />
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
          />
          <Route exact path="/detalle/:id" element={<DetalleProducto />} />
          <Route exact path="/acercade" element={<AcercaDe />} />
          <Route exact path="/pedidos" element={<Pedidos />} />
          <Route
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
