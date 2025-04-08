import Button from "react-bootstrap/Button";
import MyCard from "../components/MyCard";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary" size="lg">
        Botão
      </Button>
      <br />
      <Button variant="outline-success">Funfou</Button>
      <MyCard
        titulo="GOAT"
        img="https://refactoring.guru/images/patterns/content/decorator/decorator.png?id=710c66670c7123e0928d3b3758aea79e"
        desc="Nothingness"
      />
    </div>
  );
};

export default Home;
