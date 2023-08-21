import { createContext, useState } from "react"

export const CartContext = createContext(null);




export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const longitud = cart.length;

  const addToCar = (id, nombre, precio, img, cantidad) => {
    if (cantidad == 0) {
      return;
    }
    setCart((items) => {
      if (items.find((item => item.id === id))) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + cantidad };
          }
          return item;
        })
      }
      return [...items, { id, cantidad: cantidad, precio, nombre, img }]
    })
  }

  const resetCart = () => setCart([]);

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))
  return (

    <CartContext.Provider value={{ cart, setCart, addToCar, removeItem, longitud, resetCart }}>

      {children}

    </CartContext.Provider>


  );

}

export default ShoppingCartProvider;