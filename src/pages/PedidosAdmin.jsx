import Header from "../components/organisms/Header"
import { useNavigate } from "react-router-dom";

function PedidosAdmin(){
    const navigate = useNavigate();

    return(
        
        <div className="min-h-screen bg-black">
            <Header 
            title="GESTIÓN PEDIDOS" 
            logoSrc="/LOGO_BLACK.jpeg"
            className="bg-white" 
            homeIconSrc="/path/to/home_icon.png"
            onHomeClick = {() => navigate("/")}
            // isLoggedIn={isLoggedIn}
            // onLogoutClick={handleLogout}
            // onProfileClick={handleProfileClick}
            />
            <div className="text-white text-center mt-5">
                {/* <h1 className="text-2xl">HISTORIAL DE PEDIDOS</h1> */}
            </div>

        </div>
        
    )
}

export default PedidosAdmin

// Oye, me puedes ayudar para agregar un producto desde la vista de admin y al guardar los datos se muestre tanto en la vista de admin, como en la vista de cliente. Consiste en que cuando se llene todo el formulario que se encuentra en la vista de gestion articulos y se presione el botón de guardar cambios, el producto se mostrará en forma de card en la vista de "gestión de productos" de parte del admin y también se mostrará al mismo tiempo en la vista de "catalogo de articulos" de parte del cliente.
// La diferencia en como se mostrará la card del lado del admin y con el cliente, es que al mostrarse en la vista de "gestion de productos", se va a mostrar la foto, modelo, categoria y precio, y en la esquina superior derecha de cada card que se vaya agregando, habrá un botón que al presionarlo va a desplegar 2 opciones: "modificar producto" que va a dirigir a otra vista en donde solo se podrá modificar precio,  descripcion y color, y al guardar cambios va  a actualizar la card con los nuevos datos en las vistas;  y la opción de eliminar artículo va a eliminar la card de la vista de admin y cliente.
// Para mostrar la card del producto agregado del lado del cliente, solo mostrará la imagen, modelo, categoría y precio; y por cada articulo que se agregue, al presionar la card del artículo en la vista de cliente, se debe mostrar la vista de ese artículo mas detallada donde apareceran los datos del producto, tabla de tallas, cantidad de articulos a adquirir y una opcion de realizar pedido que guardará los datos seleccionados del producto para hacer otra vista mas adelante.