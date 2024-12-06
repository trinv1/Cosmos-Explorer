import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Navigation bar that allows for switching between pages
const NavigationBar = () => { 
  return (
        <Navbar bg="dark" variant="dark"> 
          <Container>
            <Navbar.Brand href="/" className="me-auto" style = {{fontFamily: "monospace"}}>Cosmos Explorer</Navbar.Brand>
           <Nav className="me-auto">
              <Nav.Link href="/" style = {{fontFamily: "monospace", marginLeft: "150%"}}>Home</Nav.Link>
              <Nav.Link href="/galaxy" style = {{fontFamily: "monospace"}}>Galaxies</Nav.Link>
              <Nav.Link href="/favourites" style = {{fontFamily: "monospace"}}>Favourites</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};
export default NavigationBar;