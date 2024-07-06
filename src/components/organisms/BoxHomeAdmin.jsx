
import ActionButton from '../molecules/ActionButton';

function BoxHomeAdmin({ onPedidosClick, onVentasClick, onGestionClick }) {
    return (
        <div className="flex justify-evenly mt-9 border-slate-950 font-bold text-2xl ">
            <ActionButton
                imageSrc="/pedidosColor.png" 
                label="GESTIÓN PEDIDOS" 
                onClick={onPedidosClick}
            />
            <ActionButton 
                imageSrc="/gestionProducts.png" 
                label="GESTIÓN ARTÍCULOS" 
                onClick={onGestionClick} 
            />
            <ActionButton 
                imageSrc="/ventas1.png" 
                label="VER VENTAS" 
                onClick={onVentasClick} 
            />
        </div>
    );
}

export default BoxHomeAdmin;
