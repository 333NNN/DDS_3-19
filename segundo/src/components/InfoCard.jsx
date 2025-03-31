import { useParams, useNavigate } from "react-router-dom";

const InfoCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const VoltarHome = () => {
    navigate("/sobre");
  };
  return (
    <div>
      <p>InfoCard do cartão: {id}</p>
      <button onClick={VoltarHome}>Voltar</button>
    </div>
  );
};

export default InfoCard;
