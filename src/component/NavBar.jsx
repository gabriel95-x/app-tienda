import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBarr() {
  return (
    <Navbar expand="lg" className="bg-danger-subtle">
      <Container>
        
        <Navbar.Brand href="#home">
        <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tienda Daya</Navbar.Brand>
        {/* <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-center"> */}
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#FAQ">FAQ</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item  >Categoria A</NavDropdown.Item>
              <NavDropdown.Item  >Categoria B</NavDropdown.Item>
              <NavDropdown.Item  >Categoria C</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        {/* </Navbar.Collapse>           */}
        
        <Nav>
           <CartWidget
            cantPro ="5"
           />
        </Nav>


      </Container>
    </Navbar>
  );
}


export default NavBarr;