import NavBarr from "./component/NavBar";
import Welcome from "./component/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "/App.css";
import ItemListContainer from "./component/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./component/ItemDetailContainer";

import ShoppingCartContext from "./context/ShoppingCartContext"
import Cart from "./component/Cart";
import { SendOrder } from "./component/SendOrder";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartContext> {/* mi contexto*/}
        <NavBarr />

        <Routes>

          <Route exact path="/" element={<Welcome texto="Bienvenidos a la tienda" />} />
          <Route exact path="/products/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/mycart/" element={<Cart />} />
          <Route exact path="/sendorder/" element={<SendOrder />} />


        </Routes>
      </ShoppingCartContext>{/* fin de mi contexto*/}
    </BrowserRouter>
  );
}

export default App;
