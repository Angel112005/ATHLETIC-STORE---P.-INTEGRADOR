import ActionButton from "../molecules/ActionButton";

function BoxHomeAdmin({ onPedidosClick, onVentasClick, onGestionClick }) {
  return (
    <div className="flex justify-around mt-9 border-slate-950 font-bold text-2xl ">
      <ActionButton
        imageSrc="/pedidosColor.png"
        label="GESTIÓN PEDIDOS"
        onClick={onPedidosClick}
        className="text-white bg-zinc-600"
      />
      <ActionButton
        imageSrc="/ventas1.png"
        label="PEDIDOS REALIZADOS"
        onClick={onVentasClick}
        className="text-white bg-zinc-600"
      />
      <ActionButton
        imageSrc="/gestionProducts.png"
        label="GESTIÓN ARTÍCULOS"
        onClick={onGestionClick}
        className="text-white bg-zinc-600"
      />
    </div>
  );
}

export default BoxHomeAdmin;
