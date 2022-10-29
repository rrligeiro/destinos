import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cpf } from "cpf-cnpj-validator";

function FormComp() {
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
    },
  });

  function formSubmit(userData) {
    console.log(userData);
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
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
                autoFocus: true,
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
                field.onChange(e.target.value
                  .replace(/\D/g, "")
                  .replace( /(\d{3})(\d)/ , "$1.$2")
                  .replace( /(\d{3})(\d)/ , "$1.$2")
                  .replace( /(\d{3})(\d{1,2})$/ , "$1-$2"));
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
