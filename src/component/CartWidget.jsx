const CartWidget = ({cantPro}) => {
  return (
    <div>
         <button type="button" className="btn btn-outline-danger position-relative">  
         <i className="bi bi-cart2"></i>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cantPro}
          <span className="visually-hidden">Ver Carrito</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
