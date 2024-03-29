// revisar o codigo sabado de manha e finalizar - ana


import React, {useState} from 'react'
import { Form } from 'react-final-form'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import { Formik } from "formik";
import Thumb from '../../components/Thumb'

import {
  Button,
  Heading,
  Input,
  Radio, 
  RadioGroup,
  Text,
  Tooltip,
  Box,
  useToast
} from '@chakra-ui/core'
import './styles.css'

import AdaptedRadioGroup from '../../components/AdaptedRadioGroup'
import InputControl from '../../components/InputControl'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function Cadastro() {
    const toast = useToast();
    const history = useHistory();
    const [isLoading, setLoading] = useState(false)
    const [photoFile, setPhoto] = useState(undefined)

    const onSubmit = values => {
      const formattedValues = {
        ...values,
        telefone: parseInt(values.telefone, 10),
        secao: parseInt(values.secao, 10),
      }

      localStorage.setItem('@merepresenta/cadastro', JSON.stringify(formattedValues));
      setLoading(true);
      
      toast({
        title: `Sucesso!`,
        description: "Prosseguindo para o cadastro de dados pessoais",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      })
      
      setTimeout(() => {
        setLoading(false);
        return history.push({
          pathname: '/candidato/dados-form',
          // data: values 
        })
      }, 2000)
      
    }

  return (
      <main className="cadastro">
        <section className="cadastroWrapper">
          <Heading className="cadastroHeading" as="h1" size="2xl">
            Olá, Candidato! Obrigada por ingressar na nossa plataforma! Para sua segurança precisamos cadastrar e validar o seu perfil.
          </Heading>

          <Formik 
          initialValues={{ photo: null }}
          onSubmit={onSubmit} 
          render={({ values, handleSubmit, setFieldValue }) => {

            const onSendPhoto = async event => {
              const formData = new FormData();
                formData.append('file', event.target.files[0], event.target.name)
                setPhoto(event.target.files[0]);

                try {
                  const response = await api.post("/file", formData)
                  if (response.status === 201) {
                    setFieldValue('photo', response.data.photoUrl)
                  }
        
               } catch (e) {
                toast({
                  title: `Erro!`,
                  description: "Falha ao fazer upload da foto. Por favor, tente novamente",
                  status: "error",
                  duration: 4000,
                  position: "top",
                  isClosable: true,
                })
               }                
            }

            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Dados da candidatura</Heading>
                  <label htmlFor="email">
                    <span>Nome de Urna </span>
                    <Input id="name" isRequired name="name" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="cpf">
                    <span>CPF</span>
                    <Input id="cpf" name="cpf" isRequired onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="secao">
                    <span>Seção Eleitoral(<Tooltip label="Localizada no título de eleitor, a seção eleitoral é composta por uma sequência de 4 dígitos
">?</Tooltip>)</span>
                    <Input id="secao" name="secao" isRequired onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Para mantermos contato:</Heading>
                  <label htmlFor="telefone">
                    <span>Telefone Celular com DDD</span>
                    <Input id="telefone" name="telefone" isRequired placeholder="+55 21925640835" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="email">
                    <span>E-mail</span>
                    <Input id="email" name="email" isRequired onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Como encontramos sua candidatura nas redes sociais?</Heading>
                  <label htmlFor="telefone">
                    <span>Facebook</span>
                    <Input id="facebook" name="facebook" placeholder="www.facebook.com" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="instagram">
                    <span>Instagram</span>
                    <Input id="instagram" name="instagram" placeholder="www.instagram.com" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="twitter">
                    <span>Twitter</span>
                    <Input id="twitter" name="twitter" placeholder="www.twitter.com" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="preenchimentoCandidato">
                    <Heading className="cadastroInputsHeading" as="h2" size="lg">Quem está preenchendo o cadastro é a/o própria/o candidata/o?</Heading>
                    <RadioGroup name="preenchimentoCandidato" isRequired onChange={event => setFieldValue(event.target.name, event.target.value)}>
                      <Radio value="Sim">Sim</Radio>
                      <Radio value="Nao">Não</Radio>
                    </RadioGroup>
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Cadastre uma senha para acesso futuro</Heading>
                  <label htmlFor="email">
                    <span>Senha</span>
                    <Input id="password" name="password" isRequired type="password" onChange={(event) => {
                        setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="cpf">
                    <span>Confirme sua senha</span>
                    <Input id="confirmaSenha" name="confirmaSenha" isRequired type="password" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Anexar sua foto de candidatura</Heading>
                  <Box className="cadastroInputs">
                    <Thumb file={photoFile} />
                    <Text className="helperTextUpload">                    
                      Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura 
                      coletiva você deverá usar a imagem com todos os integrantes.
                    </Text>
                  </Box>
                  <input id="photo" name="photo" className="inputPhoto" isRequired type="file" onChange={onSendPhoto} className="form-control" />
                </div>

                <Box className="cadastroButtons">
                  <Button
                    isLoading={isLoading}
                    isDisabled={!values.photo}
                    loadingText="Enviando"
                    variantColor="pink"
                    type="submit"
                  >
                    Enviar
                  </Button>
                  {/* <Text>
                    Ao enviar seus dados você receberá um código de validação, insira-o na tela a seguir
                  </Text> */}
                </Box>
              </form>
            );
          }} />
        </section>
      </main>
  )
}
