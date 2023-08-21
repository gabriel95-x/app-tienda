import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {


  const { longitud } = useContext(CartContext);

  return (
    <div>
      <button type="button" className="btn btn-outline-danger position-relative">
        <i className="bi bi-cart2"></i>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {longitud}
          <span className="visually-hidden">Ver Carrito</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
