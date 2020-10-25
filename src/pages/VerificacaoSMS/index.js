import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import { Box, Button, Heading, useToast } from "@chakra-ui/core";
import api from "../../services/api";
import "./styles.css";

import InputControl from "../../components/InputControl";

export default function Login() {
  const toast = useToast();
  const dadosFormulario = localStorage.getItem('@merepresenta/cadastro');
  const convertedForm = JSON.parse(dadosFormulario);

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  const enviarNovamente =  async () => {
    toast({
      title: `Atenção!`,
      description: "Enviar novamente",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })
  };

  const onSubmit = (values) => {
    const { codigoSMS } = values;
    api.post("/validatesms", { code: codigoSMS })
      .then((response) => {
        toast({
          title: `Sucesso!`,
          description: "Seus dados foram enviados",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        })
        setTimeout(() => {
          return routeChange('/candidatos/dados-form');
        }, 3000)})
      .catch(e => 
        toast({
          title: `Erro`,
          description: "Houve um erro ao validar o código",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        })
      )
  };
  
  return (
    <main className="login">
      <section className="loginWrapper">
        <Heading className="loginHeading" as="h1" size="1xl">
          Digite o código recebido
        </Heading>
        <p id="frase" >Enviamos um SMS de verificação para <strong> {convertedForm.telefone}. </strong> Insira o código de verificação recebido. </p>
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

              <Box className="loginButtons">
                <InputControl className="campos2" name="codigoSMS" maxlength="4" />
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
