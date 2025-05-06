import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/BarraNav";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
