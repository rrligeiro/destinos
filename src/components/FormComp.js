import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormComp() {
  return (

    <Form>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="name" placeholder="Nome" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite o email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="name" placeholder="Telefone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="name" placeholder="CPF" />
      </Form.Group>

      <Form.Select className="mb-3" aria-label="Default select example">
        <option>País</option>
        <option value="1">Brasil</option>
        <option value="2">China</option>
        <option value="3">EUA</option>
      </Form.Select>

      <Form.Select className="mb-3" aria-label="Default select example">
        <option>Cidades</option>
        <option value="1">São Paulo</option>
        <option value="2">Belo Horizonte</option>
        <option value="3">Ribeirão Preto</option>
      </Form.Select>
    

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>

  );
}

export default FormComp;