import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HiMiniShoppingBag } from "react-icons/hi2";
import Button from "react-bootstrap/Button";

const BarraNav = () => {
  const usuarioNome = "Visitante";

  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <HiMiniShoppingBag size="1.5rem" className="me-2" />
            NNN Market
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Produtos</Nav.Link>
              <Nav.Link href="/cadastraproduto">Cadastro</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                Usuário: {usuarioNome}
              </Navbar.Text>

              {usuarioNome === "Visitante" ? (
                <>
                  <Button variant="primary" href="/login">
                    Entrar
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="danger" href="/login">
                    Sair
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNav;
