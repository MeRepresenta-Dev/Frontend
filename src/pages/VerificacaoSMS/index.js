import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import { Box, Button, Heading } from "@chakra-ui/core";
import api from "../../services/api";
import "./styles.css";

import InputControl from "../../components/InputControl";

const onSubmit = async (values) => {
  const {codigo1, codigo2, codigo3, codigo4} = values;
  
  const code = `${codigo1}${codigo2}${codigo3}${codigo4}`;

  const response = await api.post("/validacao", {codigo: code});

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
              <div id="teste">
                <Box className="campos">
                  <InputControl className="campos2" name="codigo1" maxlength="1" />
                </Box>
                <Box className="campos">
                  <InputControl className="campos2" name="codigo2" maxlength="1" />
                </Box>
                <Box className="campos">
                  <InputControl className="campos2" name="codigo3" maxlength="1" />
                </Box>
                <Box className="campos">
                  <InputControl className="campos2" name="codigo4" maxlength="1" />
                </Box>
              </div>
              
              <br></br>
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
