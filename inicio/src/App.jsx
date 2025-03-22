import "./App.css";
import FirstComponent from "./components/FirstComponent.jsx";
import ListRender from "./components/ListRender.jsx";
import Motivacao from "./components/Motivacao.jsx";
import TemplateExpressions from "./components/TemplateExpressions.jsx";
import Varia from "./components/Varia.jsx";
import Events from "./components/Events.jsx";

function App() {
  return (
    <>
      {/* <FirstComponent />
      <Motivacao />
      <TemplateExpressions />
      
      <Varia /> */}
      <Events />
      <ListRender />
    </>
  );
}

export default App;
