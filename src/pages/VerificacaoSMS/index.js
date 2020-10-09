import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import { Box, Button, Heading } from "@chakra-ui/core";
import api from "../../services/api";
import "./styles.css";

import InputControl from "../../components/InputControl";

const onSubmit = async (values) => {
  const response = await api.post("/validacao", values);

  if(response.status !== 200){
    return alert('Código inválido');
  }
};

export default function Login() {
  const history = useHistory();

  const enviarNovamente =  async () => {
    alert("enviar novamente");
  };

  return (
    <main className="login">
      <section className="loginWrapper">
        <Heading className="loginHeading" as="h1" size="1xl">
          Digite o código recebido
        </Heading>
        <p id="frase" >Enviamos um SMS de verificação para <strong> {}. </strong> Insira o código de verificação recebido. </p>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, errors, submitting }) => (
            <Box
              as="form"
              p={4}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              <br></br>
              <Box className="loginInputs">
                <InputControl name="codigo" label="Código de verificação" />
              </Box>
              <Box className="loginButtons">
                <a id="enviarNovamente" className="forgetPassword" onClick={enviarNovamente}>
                  Enviar novamente
                </a>
                <Button id="btnContinuar" isLoading={submitting} loadingText="Enviando"  type="submit" variantColor="teal">
                  Continuar
                </Button>
                
              </Box>
            </Box>
          )}
        />
      </section>
    </main>
  );
}
