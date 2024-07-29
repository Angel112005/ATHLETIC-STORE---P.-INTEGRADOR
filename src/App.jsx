// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import HomeAdmin from './pages/HomeAdmin';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Running from './pages/Running';
// import Futbol from './pages/Futbol';
// import Casual from './pages/Casual';
// import ProductListAdmin from './pages/ProductListAdmin';
// import AddProduct from './pages/AddProduct';
// import EditProduct from './pages/EditProduct';
// import PedidosAdmin from './pages/PedidosAdmin';
// import PedidosRealizadosADMIN from './pages/PedidosRealizadosADMIN';
// import ProductCatalog from './pages/ProductCatalog';
// import ProductDetails from './pages/ProductDetails';
// import Wishlist from './pages/Wishlist';
// import PedidosCliente from './pages/PedidosCliente';
// import { ProductProvider } from './context/ProductContext';
// import { AuthProvider } from './context/AuthContext';
// import { WishlistProvider } from './context/WishlistContext';

// function App() {
//     return (
//         <AuthProvider>
//             <ProductProvider>
//                 <WishlistProvider>
//                     <Router>
//                         <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route path='/HomeAdmin' element={<HomeAdmin/>} />
//                             <Route path="/Login" element={<Login />} />
//                             <Route path="/Register" element={<Register />} />
//                             <Route path="/Running" element={<Running/>} />
//                             <Route path="/Futbol" element={<Futbol />} />
//                             <Route path="/Casual" element={<Casual />} />
//                             <Route path='/Gestion' element={<ProductListAdmin/>}/>
//                             <Route path='/Pedidos' element={<PedidosAdmin></PedidosAdmin>} />
//                             <Route path='/Ventas' element={<PedidosRealizadosADMIN></PedidosRealizadosADMIN>} />
//                             <Route path='/AgregarProducto' element={<AddProduct></AddProduct>}/>
//                             <Route path="/EditarProducto/:id" element={<EditProduct />} />
//                             <Route path='/CatalogoClientes' element={<ProductCatalog></ProductCatalog>}/>
//                             <Route path='/product/:id' element={<ProductDetails/>} />
//                             <Route path="/wishlist" element={<Wishlist />} />
//                             <Route path='/ordersClient' element={<PedidosCliente/>} />
//                         </Routes>
//                     </Router>
//                 </WishlistProvider>    
//             </ProductProvider>
//         </AuthProvider>
//     );
// }

// export default App;











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
import EditProduct from './pages/EditProduct';
import PedidosAdmin from './pages/PedidosAdmin';
import PedidosRealizadosADMIN from './pages/PedidosRealizadosADMIN';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import PedidosCliente from './pages/PedidosCliente';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
    return (
        <AuthProvider>
            <ProductProvider>
                <WishlistProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/HomeAdmin' element={<HomeAdmin/>} />
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Register" element={<Register />} />
                            <Route path="/Running" element={<Running/>} />
                            <Route path="/Futbol" element={<Futbol />} />
                            <Route path="/Casual" element={<Casual />} />
                            <Route path='/Gestion' element={<ProductListAdmin/>}/>
                            <Route path='/Pedidos' element={<PedidosAdmin></PedidosAdmin>} />
                            <Route path='/Ventas' element={<PedidosRealizadosADMIN></PedidosRealizadosADMIN>} />
                            <Route path='/AgregarProducto' element={<AddProduct></AddProduct>}/>
                            <Route path="/EditarProducto/:id" element={<EditProduct />} />
                            <Route path='/CatalogoClientes' element={<ProductCatalog></ProductCatalog>}/>
                            <Route path='/product/:id' element={<ProductDetails/>} />
                            <Route path="/wishlist" element={<Wishlist />} />
                            <Route path='/ordersClient' element={<PedidosCliente/>} />
                        </Routes>
                    </Router>
                </WishlistProvider>    
            </ProductProvider>
        </AuthProvider>
    );
}

export default App;
