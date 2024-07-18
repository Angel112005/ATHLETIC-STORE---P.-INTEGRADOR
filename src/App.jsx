
// src/App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import Running from './pages/Running';
import Futbol from './pages/Futbol';
import Casual from './pages/Casual';
import ProductListAdmin from './pages/ProductListAdmin';
import AddProduct from './pages/AddProduct';
import PedidosAdmin from './pages/PedidosAdmin';
// import VentasAdmin from './pages/VentasAdmin';
import PedidosRealizadosADMIN from './pages/PedidosRealizadosADMIN'
import ProductCatalog from './pages/ProductCatalog';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/HomeAdmin" element={<HomeAdmin />}  */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Running" element={<Running/>} />
                <Route path="/Futbol" element={<Futbol />} />
                <Route path="/Casual" element={<Casual />} />
                <Route path='/Gestion' element={<ProductListAdmin/>}/>
                {/* <Route path='/AddProduct' element={<AddProduct></AddProduct>} /> */}
                <Route path='/Pedidos' element={<PedidosAdmin></PedidosAdmin>} />
                <Route path='/Ventas' element={<PedidosRealizadosADMIN></PedidosRealizadosADMIN>} />
                <Route path='/AgregarProducto' element={<AddProduct></AddProduct>}/>
                <Route path='/CatalogoClientes' element={<ProductCatalog></ProductCatalog>}/>
            </Routes>
        </Router>
    );
}

export default App;
