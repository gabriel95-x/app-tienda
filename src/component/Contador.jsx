import { useState } from "react";

const Contador = ({stock}) => {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    if(stock>cantidad)
        setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad>0) 
        setCantidad(cantidad - 1);
  };
  const reset = () => {
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
        <button  type="button"  className="btn btn-secondary btn-lg btn-block">Add to car</button>
      </div>
    </div>
  );
};
export default Contador;
