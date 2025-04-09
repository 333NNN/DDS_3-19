import Button from "react-bootstrap/Button";
import MyCard from "../components/MyCard";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-top align-items-center min-vh-100">
      <h1>ℌ𝔬𝔪𝔢</h1>
      <br />
      <MyCard
        titulo="𝔙𝔬𝔦𝔡"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJ7uEiToAztnDknOFYu2Gx4ypDl-M3Y4iBA&s"
        desc="𝔑𝔬𝔱𝔥𝔦𝔫𝔤𝔫𝔢𝔰𝔰"
      />
      <Button variant="danger" size="lg">
        𝔅𝔲𝔱𝔱𝔬𝔫
      </Button>
      <br />
      <Button variant="outline-success">𝔄𝔱𝔲𝔞𝔩𝔦𝔷𝔞𝔯</Button>
    </div>
  );
};

export default Home;
