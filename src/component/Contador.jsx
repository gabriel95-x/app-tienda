import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Contador = ({ id, nombre, precio, stock, img }) => {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    if (stock > cantidad)
      setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 0)
      setCantidad(cantidad - 1);
  };
  const reset = () => {
    setCantidad(0);
  };


  const { cart, addToCar } = useContext(CartContext);

 
const add = ( ) => {
  addToCar(id, nombre, precio, img, cantidad);
  setCantidad(0);
};


  return (
    <div >
      <div className="contador">{cantidad}</div>
      <div className="btn-group mt-2">
        <button className="btn btn-outline-secondary" onClick={restar}><i className="bi bi-dash"></i></button>
        <button className="btn btn-outline-secondary" onClick={reset}><i className="bi bi-arrow-clockwise"></i></button>
        <button className="btn btn-outline-secondary" onClick={sumar}><i className="bi bi-plus"></i></button>

      </div>
      <div className="mt-2">
        <button type="button" onClick={add} className="btn btn-success btn-lg btn-block">Add to car</button>
      </div>
    </div>
  );
};
export default Contador;
