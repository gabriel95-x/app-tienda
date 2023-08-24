import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function NavBarr() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const itemCollections = collection(db, "categorias");

    getDocs(itemCollections).then((snapshot) => {
      
      const docs = snapshot.docs.map((doc) => ({ ...doc.data() }));

      setCategorias(docs);
    });
  }, []);


  return (
    <Navbar expand="lg" className="bg-danger-subtle">
      <Container>

        <Navbar.Brand as={Link} to="/" href="#home">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Tienda Diana</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <NavDropdown title="Categoria" id="basic-nav-dropdown">
            {categorias.map((item) =>
              (<NavDropdown.Item key={item.nombre} as={Link} to={`/products/${item.nombre}`} >{item.nombre}</NavDropdown.Item>))
            }
          </NavDropdown>
        </Nav>

        <Nav>
          <Link to='/mycart'><CartWidget /></Link>
        </Nav>


      </Container>
    </Navbar>
  );
}


export default NavBarr;