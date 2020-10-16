import React from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from 'react-final-form'

import {
  Box,
  Button,
  Heading,
} from '@chakra-ui/core'
import './styles.css'

import validate from '../../utils/validate'
import InputControl from '../../components/InputControl'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default function Login() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/cadastro`; 
    history.push(path);
  }

  return (
      <main className="login">
        <section className="loginWrapper">
          <Heading className="loginHeading" as="h1" size="2xl">
            Login
          </Heading>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({
              handleSubmit,
              form,
              errors,
              submitting,
            }) => (
            <Box
              as="form"
              p={4}
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              onSubmit={handleSubmit}
            >
              <Box className="loginInputs">
                <InputControl name="email" label="E-mail" />
                <InputControl name="senha" label="Senha" />
              </Box>
              <Box className="loginButtons">
                <Button
                  isLoading={submitting}
                  loadingText="Enviando"
                  variantColor="teal"
                  type="submit"
                >
                  Entrar
                </Button>
                <Button
                  variantColor="teal"
                  variant="outline"
                  onClick={routeChange}
                >
                  Cadastre-se
                </Button>
                <a className="forgetPassword" href="#">
                  Esqueci minha senha
                </a>
              </Box>
            </Box>
            )}
          />
        </section>
      </main>
  )
}
