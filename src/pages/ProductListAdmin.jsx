import { useNavigate } from "react-router-dom";
import Header from "../components/organisms/Header"
// import ActionButton from "../components/molecules/ActionButton";
import ProductCardAdmin from "../components/molecules/ProductCardAdmin";
import BoxGestionAdmin from "../components/organisms/BoxGestionAdmin";

function ProductListAdmin({products, onEditProduct, onDeleteProduct}){
    const navigate = useNavigate();

    return(
        <>

        
        
        <Header 
            title="GESTIÓN ARTÍCULOS"
            logoSrc="/LOGO_BLACK.jpeg" 
            homeIconSrc="/path/to/home_icon.png"
            onHomeClick={()=>navigate("/")}
        //     onHomeClick = {() => navigate("/")}
        //     // isLoggedIn={isLoggedIn}
        //     // onLogoutClick={handleLogout}
        //     // onProfileClick={handleProfileClick}
            />
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <div className="grid grid-cols-4 gap-4">
        {products && products.map(product => (
          <ProductCardAdmin 
            key={product.id} 
            product={product} 
            onEdit={onEditProduct} 
            onDelete={onDeleteProduct} 
          />
        ))}
      </div>
      <BoxGestionAdmin onAddProductClick={() => navigate('/AgregarProducto')} />
    </div>
    </>
    )
}

export default ProductListAdmin