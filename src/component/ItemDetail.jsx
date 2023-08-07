import { useState } from "react";
import Contador from "./Contador";

const ItemDetail = ({ product }) => {
  return (
    <>
      {/* <div key={product.id} className="cardDetailCustom">
        <img
          className="card-img-top"
          src={product.img}
          alt="Card image cap"
          width="100"
          height="100"
        ></img>
        <div className="card-body">
          <h5 className="card-title">
            <b>{product.nombre}</b>
          </h5>
          <Contador stock={product.stock} />
        </div>
      </div> */}
      <div className="card m-4 w-50  text-left" key={product.id} >
        <img className="card-img-top h-50 "  src={product.img} alt="Card image cap"></img>
        <div className=" card-body ">
          <h5 className=" text-left card-title">{product.nombre}</h5>
          <p className="card-text">{product.descripcion}...</p>
                   <div >Stock {product.stock}</div>

          <div className="price">$ {product.precio}</div>

        </div>
        <div className="card-footer">
          <Contador stock={product.stock} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
