import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useWishlistContext } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist } = useWishlistContext();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return wishlist.reduce((total, item) => total + item.Precio * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        title="LISTA DE DESEOS"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        onHomeClick={() => navigate('/')}
      />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl mb-4 text-center font-bold text-white">Lista de Deseos</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border p-2">Modelo</th>
                <th className="border p-2">Cantidad</th>
                <th className="border p-2">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(item => (
                <tr key={item.Folio_producto} className="border">
                  <td className="border p-2">{item.Nombre_modelo}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">${item.Precio * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <p className="text-2xl">TOTAL: ${calculateTotal()}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={() => alert('Pedido realizado')}>
            Realizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
