
import ProductoCarrito from "./ProductoCarrito";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  // Mostrar un total de productos en el carrito
  const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);

  const totalPrice = carrito.reduce(
    (acc, element) => acc + element.cantidad * element.infoProducto.precio,
    0
  );

  const ListaProductos = carrito;
  console.log(carrito);

  // if(ListaProductos.length == 0){
  // }else{
  //     console.log("No hay productos en el carrito");
  // }

  return (
    <>
      <div className="cart-container">
        <div className="itemcarrito">item en Carrito: {cantidad} </div>
        {carrito.length > 0 ? (
          carrito.map((producto, idx) => (
            <ProductoCarrito key={producto.idx} data={producto} />
          ))
        ) : (
          <p>No Has agregado productos al carrito aún!.</p>
        )}
        <div className="precio-total">
          <span>Total</span>${totalPrice}
        </div>
        <button>Vaciar Todos los productos</button>
        <button>Pagar</button>
      </div>
    </>
  );
};

export default Carrito;
