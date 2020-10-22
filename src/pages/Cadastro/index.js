// revisar o codigo sabado de manha e finalizar - ana


import React from 'react'
import { Form, Field } from 'react-final-form'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

import {
  Box,
  Button,
  Heading,
  Radio,
  Text,
} from '@chakra-ui/core'
import './styles.css'

import AdaptedRadioGroup from '../../components/AdaptedRadioGroup'
import InputControl from '../../components/InputControl'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))



export default function Cadastro() {

    const history = useHistory();

    const onSubmit = async values => {
      const formattedValues = {
        ...values,
        telefone: parseInt(values.telefone, 10),
        secao: parseInt(values.secao, 10),
      }
      
      try{
          const response = await api.post("/register", formattedValues);
          if(response.status === 200){
            return history.push({
                    pathname: '/cadastro/candidato-verificacao',
                  // data: values 
            })
          }
        }
        catch(e){
          alert('Houve um erro ao enviar o formulário');
        } 
  
      console.log(formattedValues)
    }

  return (
      <main className="cadastro">
        <section className="cadastroWrapper">
          <Heading className="cadastroHeading" as="h1" size="2xl">
            Olá, Candidato! Obrigada por ingressar na nossa plataforma! Para sua segurança precisamos cadastrar e validar o seu perfil.
          </Heading>
          <Form
            onSubmit={onSubmit}
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
              <Box className="cadastroInputs">
                <Heading className="cadastroInputsHeading" as="h2" size="xl">Dados da candidatura</Heading>
                <InputControl name="name" label="Nome" />
                <InputControl name="cpf" label="CPF" />
                <InputControl name="secao" label="Seção Eleitoral" />
              </Box>
              <Box className="cadastroInputs">
                <Heading className="cadastroInputsHeading" as="h2" size="xl">Para mantermos contato:</Heading>
                <InputControl name="telefone" label="Telefone Celular" />
                <span>Insira o número que será utilizado para validar seu cadastro</span>
                <InputControl name="email" label="E-mail" />
              </Box>
              <Box className="cadastroInputs">
                <Heading className="cadastroInputsHeading" as="h3" size="lg">Como encontramos sua candidatura nas redes sociais?</Heading>
                <InputControl name="facebook" label="Facebook" />
                <InputControl name="instagram" label="Instagram" />
                <InputControl name="twitter" label="Twitter" />
                <span>Necessário preencher pelo menos um dos campos.</span>
              </Box>
              <Box className="cadastroInputs">
                <Heading className="cadastroInputsHeading" as="h2" size="xl">Quem está preenchendo o cadastro é a/o própria/o candidata/o</Heading>
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
                <Heading className="cadastroInputsHeading" as="h2" size="xl">Cadastre uma senha para acesso futuro </Heading>
                <InputControl name="password" type="password" label="Senha" />
                <InputControl name="confirmaSenha" type="password" label="Confirme sua senha" />
              </Box>
              <Box className="cadastroInputs">
                <Heading className="cadastroInputsHeading" as="h2" size="xl">Anexar sua foto de candidatura</Heading>
                <Box className="cadastroCandidatePhotoContent">
                  <div className="candidatePhoto">
                    <span>Inserir foto de candidatura</span>
                  </div>
                  <Text>
                    Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura coletiva você deverá usar a imagem com todos os integrantes.
                  </Text>
            <input 
      type="file" 
      onChange={handleUploadFile}
      accept="application/jpg"    
       /input>
</div>
                </Box>
              </Box>
              <Box className="cadastroButtons">
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
        </section>
      </main>
  )
}
