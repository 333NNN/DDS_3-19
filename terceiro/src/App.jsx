import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavBar from "./components/NewNavBar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <NewNavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
