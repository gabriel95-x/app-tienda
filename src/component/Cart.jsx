import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, removeItem } = useContext(CartContext);


  let total = 0;

  const sumarItemCart = (id) => {

    setCart(
      cart.map((product) => {
        if (product.id === id) {
          return { ...product, cantidad: product.cantidad + 1 };
        }
        return product;
      })
    );

  };

  const restarItemCart = (id, cantidad) => { 
     console.log(cantidad)
    if( cantidad>1){
      setCart(
        cart.map((product) => {
          if (product.id === id && product.cantidad!=0) {
            return { ...product, cantidad: product.cantidad - 1 };
          }
          return product;
        })
      );
      }
  }
  return (
    <>
      {cart.length > 0 ? (
        <div className="card border-danger  mt-2 text-start ">
          <div className="card-header bg-transparent border-secondary card-title">
            Mi Carrito
          </div>
          <div className="card-body ">
            <div className=" ">
              <>
                {cart.map((item) => {
                  total += Math.trunc(item.precio * item.cantidad * 100) / 100;
                  return (
                    <div key={item.id} className="row g-0 m-1 border  ">
                      <div className="col-md-4 ">
                        <img
                          src={item.img}
                          className="img-fluid rounded-start "
                          style={{
                            maxHeight: "180px",
                            maxWidth: "180px",
                          }}
                        ></img>
                      </div>
                      <div className="col-md">
                        <div className="card-body">
                          <h5>{item.nombre}</h5>
                          <div className="row mt-3 text-end">
                            <div className="col-3 btn-group">
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => restarItemCart(item.id, item.cantidad)}
                              >
                                <i className="bi bi-dash"></i>
                              </button>
                              <div className="btn btn-outline-secondary">
                                {" "}
                                {item.cantidad}
                              </div>

                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => sumarItemCart(item.id)}
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                            </div>
                            <div className="col mt-2 card-text-5 " >Precio: ${item.precio}</div>
                            <div className="col mt-2 card-text-5">
                              Sub total: ${Math.trunc(item.precio * item.cantidad * 100) /
                                100}
                            </div>
                          </div>
                          <div className="row mt-3">

                            <div className=" col  ">
                              <button
                                className="btn  btn-danger btn-block"
                                onClick={() => removeItem(item.id)}
                              >
                                Quitar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                }
              </>
            </div>
          </div>
          <div className="card-footer bg-transparent border-secondary text-end">
            <Link to="/sendorder">
              <button className="btn  m-3 btn-primary btn-block">
                Realizar Comprar
              </button>
            </Link>
            Total a Pagar: ${total}
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <h3>Aun no tienes nada en el carrito</h3>
          <Link to="/products/all">
            {" "}
            <p>Volver al catalogo</p>
          </Link>
        </div>
      )}
    </>
  );

};

export default Cart;
