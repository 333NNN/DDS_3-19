import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert"
import { verificadorCpf } from "../functions/verificaCPF";

const VerificaCPF = () => {
  const [cpf, setCpf] = useState("");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");
  const [mostrarAlert, setMostrarAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cpfNumerico = cpf.replace(/\D/g, "");

    if (cpfNumerico.length !== 11) {
      setAlertVariant("danger");
      setAlertMensagem("CPF deve conter exatamente 11 dígitos.");
      setMostrarAlert(true);
      return;
    }

    const valido = verificadorCpf(cpfNumerico);
    if (valido) {
      setAlertVariant("success");
      setAlertMensagem("✅ CPF válido!");
    } else {
      setAlertVariant("danger");
      setAlertMensagem("❌ CPF inválido.");
    }
    setMostrarAlert(true);
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Form
        onSubmit={handleSubmit}
        className="p-4 border rounded bg-light shadow"
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Form.Group controlId="formCPF">
          <Form.Label>Verificação de CPF</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => {
              const apenasNumeros = e.target.value.replace(/\D/g, "");
              if (apenasNumeros.length <= 11) {
                setCpf(apenasNumeros);
              }
            }}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="mt-3" variant="primary" type="submit">
            Checar
          </Button>
        </div>

        {mostrarAlert && (
          <Alert
            className="mt-3"
            variant={alertVariant}
            onClose={() => setMostrarAlert(false)}
            dismissible
          >
            {alertMensagem}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default VerificaCPF;
