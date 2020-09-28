import React, { useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'

import {
  Box,
  Button,
  Heading,
  Radio,
  Text,
} from '@chakra-ui/core'
import './styles.css'

import validate from '../../utils/validate'
import PasswordInput from '../../components/PasswordInput'
import AdaptedRadioGroup from '../../components/AdaptedRadioGroup'
import InputControl from '../../components/InputControl'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default function DadosForm() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
      <main className="dados">
        <section className={`dadosWrapper ${isMobile ? "responsive" : ""}`}>
          <Box className="dadosTSEData">
            <img src="https://via.placeholder.com/150" alt="Foto de Maria Lima" />
          </Box>
          <Box className="dadosContent">
            <Heading className="dadosHeading" as="h1" size="lg">
              Olá, Maria Lima!
            </Heading>
            <Text>
              Obrigada por ingressar na nossa plataforma! Agora precisamos de algumas informações sobre quem você é. As questões identitárias poderão ser utilizadas pelos eleitores para filtrarem as candidaturas.
            </Text>
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
                <Box className="dadosInputs">
                  <Heading className="dadosInputsHeading" as="h2" size="xl">Dados da candidatura</Heading>
                  <InputControl name="nomeUrna" label="Nome de urna" />
                  <InputControl name="cpf" label="CPF" />
                  <InputControl name="secaoEleitoral" label="Seção Eleitoral" />
                </Box>
                <Box className="dadosInputs">
                  <Heading className="dadosInputsHeading" as="h2" size="xl">Para mantermos contato:</Heading>
                  <InputControl name="celular" label="Telefone Celular" />
                  <span>Insira o número que será utilizado para validar seu dados</span>
                  <InputControl name="emailCandidato" label="E-mail" />
                </Box>
                <Box className="dadosInputs">
                  <Heading className="dadosInputsHeading" as="h3" size="lg">Como encontramos sua candidatura nas redes sociais?</Heading>
                  <InputControl name="facebook" label="Facebook" />
                  <InputControl name="instagram" label="Instagram" />
                  <InputControl name="twitter" label="Twitter" />
                  <span>Necessário preencher pelo menos um dos campos.</span>
                </Box>
                <Box className="dadosInputs">
                  <Heading className="dadosInputsHeading" as="h2" size="xl">Quem está preenchendo o dados é a/o própria/o candidata/o</Heading>
                  <Field
                    name="preenchimentoCandidato"
                    component={AdaptedRadioGroup}
                  >
                    <Radio value="Sim">
                      Sim
                    </Radio>
                    <Radio value="Não">
                      Não
                    </Radio>
                  </Field>
                </Box>
                <Box className="senhaInputs">
                  <Heading className="dadosInputsHeading" as="h2" size="xl">Cadastre uma senha para acesso futuro </Heading>
                  <PasswordInput name="senha" label="Senha" />
                  <PasswordInput name="confirmaSenha" label="Confirme sua senha" />
                </Box>
                <Box className="dadosInputs">
                  <Heading className="dadosInputsHeading" as="h2" size="xl">Anexar sua foto de candidatura</Heading>
                  <Box className="dadosCandidatePhotoContent">
                    <div className="candidatePhoto">
                      <span>Inserir foto de candidatura</span>
                    </div>
                    <Text>
                      Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura coletiva você deverá usar a imagem com todos os integrantes.
                    </Text>
                  </Box>
                </Box>
                <Box className="dadosButtons">
                  <Button
                    isLoading={submitting}
                    loadingText="Enviando"
                    variantColor="teal"
                    type="submit"
                  >
                    Enviar
                  </Button>
                  <Text>
                    Ao enviar seus dados você receberá um código de validação, insira-o na tela a seguir
                  </Text>
                </Box>
              </Box>
              )}
            />
          </Box>
        </section>
      </main>
  )
}
