import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cadastro = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-center mb-4">Cadastro</h1>
      <Form>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInputNome"
              label="Nome"
              className="mb-3"
            >
              <Form.Control size="lg" type="text" placeholder=" " />
            </FloatingLabel>
            </Col>
            <Col>
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="" />
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
      <FloatingLabel controlId="floatingPassword" label="Senha" >
        <Form.Control type="password" placeholder="" />
      </FloatingLabel>

      <Form.Group controlId="formFile" className="mb-3" size="lg">
        <Form.Label>Envie uma imagem</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Select size="lg">
        <Form.Label>Tipo de usuário</Form.Label>
        <option value="Administrador">Administrador</option>
        <option value="Funcionário">Funcionário</option>
        <option value="Gerente">Gerente</option>
      </Form.Select>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10px" }}
      >
        <Button variant="danger">Cadastrar</Button>
      </div>
    </div>
  );
};

export default Cadastro;
