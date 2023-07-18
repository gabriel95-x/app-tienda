import NavBarr from "./component/NavBar"
import ItemListContainer from "./component/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import '/App.css'


function App() {
  
  return (
    <>
      <NavBarr/>

      <ItemListContainer
      texto= "Bienvenidos a la tienda"/>
    </>
  )
  }

export default App
