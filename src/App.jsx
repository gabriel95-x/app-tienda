import NavBarr from "./component/NavBar";
import Welcome from "./component/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "/App.css";
import Contador from "./component/Contador";
import ItemListContainer from "./component/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Evento from "./component/Evento";
import ItemDetailContainer from "./component/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarr />

      <Routes>
       
        <Route exact  path="/" element={ <Welcome texto="Bienvenidos a la tienda" /> }/>
        <Route exact  path="/products/:category" element={ <ItemListContainer /> }/>
        <Route exact  path="/item/:id" element={ <ItemDetailContainer /> }/>


        {/* <Contador
      stock={7}/> */}
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
