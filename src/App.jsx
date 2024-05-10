import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import Error404 from './components/views/Error404';
import DetalleProducto from './components/views/DetalleProducto';
import AdminProductos from './components/views/AdminProductos';

function App() {
 

  return (
    <>
      {/* <Menu/> */}
      {/* <Inicio/> */}
      {/* <Login/> */}
      {/* <Registro/> */}
      {/* <Error404/> */}
      {/* <DetalleProducto/> */}
      <AdminProductos/>
      {/* <Footer/> */}
    </>
  )
}

export default App
