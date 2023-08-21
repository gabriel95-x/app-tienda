import { useState } from "react";
import Contador from "./Contador";

const ItemDetail = ({ product }) => {
  return (
    <>
      <div className="card m-4 w-50  text-left" key={product.id} >
        <img className="card-img-top h-50 " src={product.img} alt="Card image cap"></img>
        <div className=" card-body ">
          <h5 className=" text-left card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}...</p>
          <div >Stock {product.stock}</div>

          <div className="price">$ {product.precio}</div>

        </div>
        <div className="card-footer">
          <Contador
            stock={product.stock}
            id={product.id}
            precio={product.precio}
            nombre={product.nombre}
            img={product.img}
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
