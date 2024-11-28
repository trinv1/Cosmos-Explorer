import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Navigation bar that allows for switching between pages
const NavigationBar = () => { 
  return (
        <Navbar bg="dark" variant="dark"> 
          <Container>
            <Navbar.Brand href="/" className="me-auto">Cosmos Explorer</Navbar.Brand>
           <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/galaxy">Galaxies</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};
export default NavigationBar;