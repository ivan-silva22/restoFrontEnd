import { Route, Routes } from "react-router-dom";
import AdminUsuarios from "../views/AdminUsuarios";
import AdminProductos from "../views/AdminProductos";
import AdminPedidos from "../views/AdminPedidos";
import CrearProducto from "../views/Producto/CrearProducto";
import EditarProducto from "../views/Producto/EditarProducto";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminProductos />}
        />
        <Route
          exact
          path="/administradorusuarios"
          element={<AdminUsuarios />}
        />
        <Route exact path="/administradorpedidos" element={<AdminPedidos />} />
        <Route exact path="/crearproducto" element={<CrearProducto />} />
        <Route exact path="/editarproducto" element={<EditarProducto />} />
      </Routes>
    </>
  );
};

export default RutasAdmin;
