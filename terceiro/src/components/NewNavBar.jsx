import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NewNavBar = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="https://www.svgrepo.com/show/85746/computer-service.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ConnectFix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>

            <NavDropdown title="Actions" id="responsive-nav-dropdown">
              <NavDropdown.Item href="">Ação 1</NavDropdown.Item>
              <NavDropdown.Item href="">Ação 2</NavDropdown.Item>
              <NavDropdown.Item href="">Ação 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Ação 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Navbar.Text className="p-2">
              Signer in as: <a href="#login">Natã J.</a>
            </Navbar.Text>
            <Button variant="danger">Sair</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavBar;
