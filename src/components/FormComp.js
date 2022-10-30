import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cpf } from "cpf-cnpj-validator";
import Countries from "./Countries";
import Cities from "./Cities.js";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CarouselComp from "./CarouselComp";

function FormComp() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const addCountry = (country) => {
    if (countries.includes(country)) {
      countries.splice(countries.indexOf(country), 1);
      setCountries([...countries]);
    } else {
      setCountries([...countries, country]);
    }
  };

  const addCity = (city) => {
    if (cities.includes(city)) {
      cities.splice(cities.indexOf(city), 1);
      setCities([...cities]);
    } else {
      setCities([...cities, city]);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      cpf: "",
      countries: "",
      cities: "",
    },
  });

  function formSubmit(userData) {
    userData.countries = countries;
    userData.cities = cities;
    console.log(userData);
  }

  return (
    <Container>
      <Row className="row-content">
        <Form onSubmit={handleSubmit(formSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Digite seu nome"
                      isInvalid={errors.firstName}
                    />
                  )}
                />
                {errors.firstName && (
                  <Form.Control.Feedback type="invalid">
                    Nome é obrigatório
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="email@exemplo.com"
                      isInvalid={errors.email}
                    />
                  )}
                />
                {errors.email?.type === "pattern" && (
                  <Form.Control.Feedback type="invalid">
                    Email inválido
                  </Form.Control.Feedback>
                )}
                {errors.email?.type === "required" && (
                  <Form.Control.Feedback type="invalid">
                    Email é obrigatório
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{ validate: (value) => value.length > 12 }}
                  render={({ field: { ref, ...field } }) => (
                    <PhoneInput
                      {...field}
                      inputProps={{
                        ref,
                        required: true,
                        autoFocus: false,
                      }}
                      country={"br"}
                      onlyCountries={["br"]}
                      countryCodeEditable={false}
                      isValid={(value) => {
                        return value.length > 12;
                      }}
                      inputStyle={{
                        width: "100%",
                      }}
                    />
                  )}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CPF</Form.Label>
                <Controller
                  name="cpf"
                  control={control}
                  rules={{
                    validate: (value) => cpf.isValid(value),
                    required: true,
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Digite seu CPF"
                      isInvalid={errors.cpf}
                      onChange={(e) => {
                        field.onChange(
                          e.target.value
                            .replace(/\D/g, "")
                            .replace(/(\d{3})(\d)/, "$1.$2")
                            .replace(/(\d{3})(\d)/, "$1.$2")
                            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
                        );
                      }}
                      maxLength="14"
                    />
                  )}
                />
                {errors.cpf?.type === "required" && (
                  <Form.Control.Feedback type="invalid">
                    CPF é obrigatório
                  </Form.Control.Feedback>
                )}
                {errors.cpf?.type === "validate" && (
                  <Form.Control.Feedback type="invalid">
                    CPF inválido
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <CarouselComp addCity={addCity} cities={cities} />
            </Col>
          </Row>
          <Row className="row-content">
            <Col lg={5}>
              <Form.Group className="mb-3">
                <Form.Label>Selecione um país</Form.Label>
                <Form.Select
                  className="mb-3"
                  onChange={(e) => addCountry(e.target.value)}
                >
                  <Countries />
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Países selecionados</Form.Label>
                <ListGroup>
                  {countries.length === 0 && (
                    <ListGroup.Item variant="danger">
                      Escolha ao menos um país
                    </ListGroup.Item>
                  )}
                  {countries.map((country) => (
                    <ListGroup.Item
                      variant="success"
                      key={country}
                      value={country}
                      onClick={(e) => addCountry(e.target.outerText)}
                    >
                      {country}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            </Col>
            <Col lg={5}>
              <Form.Group className="mb-3">
                <Form.Label>Selecione uma cidade</Form.Label>
                <Form.Select
                  className="mb-3"
                  onChange={(e) => addCity(e.target.value)}
                >
                  <Cities />
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cidades selecionadas</Form.Label>
                <ListGroup>
                  {cities.length === 0 && (
                    <ListGroup.Item variant="danger">
                      Escolha ao menos uma cidade
                    </ListGroup.Item>
                  )}
                  {cities.map((city) => (
                    <ListGroup.Item
                      variant="success"
                      key={city}
                      value={city}
                      onClick={(e) => addCity(e.target.outerText)}
                    >
                      {city}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Form.Group>
            </Col>
            <Col className=" align-self-center">
              <Button variant="primary" type="submit" size="lg">
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}

export default FormComp;
