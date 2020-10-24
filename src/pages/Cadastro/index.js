// revisar o codigo sabado de manha e finalizar - ana


import React, {useState} from 'react'
import { Form } from 'react-final-form'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import { Formik } from "formik";
// import { yup } from "yup";
import Thumb from '../../components/Thumb'

import {
  Button,
  Heading,
  Input,
  Radio, 
  RadioGroup,
  Text,
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
    const handleSubmit = (values) => console.log('=>', values)
    const [isLoading, setLoading] = useState(false)

    const onSubmit = values => {
      const formattedValues = {
        ...values,
        telefone: parseInt(values.telefone, 10),
        secao: parseInt(values.secao, 10),
      }
      console.log('=> fVal', formattedValues)

       localStorage.setItem('@merepresenta/cadastro', JSON.stringify(values));
       setLoading(true);
       const fields = Object.keys(formattedValues).filter(item => item !== 'photo')
       
       const formData = new FormData();
       formData.append('photo', values.photo, values.photo.name)
       fields.forEach(item => formData.append(item, formattedValues[item]))
       console.log('f:', formData)
       api.post("/register", formData)
        .then((res) => {
          if(res.status === 200){
            setLoading(false);
            toast({
              title: `Sucesso!`,
              description: "Seus dados foram enviados",
              status: "success",
              duration: 2000,
              position: "top",
              isClosable: true,
            })
            setTimeout(() => {
              return history.push({
                pathname: '/cadastro/candidato-verificacao',
                // data: values 
              })
            }, 2000)
            
          }
        })
        .catch((e) => {
          setLoading(false);
          toast({
            title: `Erro`,
            description: "Houve um erro ao enviar o formulário",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          })
        });
      
  
      console.log(formattedValues)
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
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Dados da candidatura</Heading>
                  <label htmlFor="email">
                    <span>Nome de Urna</span>
                    <Input id="name" name="name" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="cpf">
                    <span>CPF</span>
                    <Input id="cpf" name="cpf" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="secao">
                    <span>Seção Eleitoral</span>
                    <Input id="secao" name="secao" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Para mantermos contato:</Heading>
                  <label htmlFor="telefone">
                    <span>Telefone Celular</span>
                    <Input id="telefone" name="telefone" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="email">
                    <span>E-mail</span>
                    <Input id="email" name="email" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="preenchimentoCandidato">
                    <Heading className="cadastroInputsHeading" as="h2" size="lg">Quem está preenchendo o cadastro é a/o própria/o candidata/o?</Heading>
                    <RadioGroup name="preenchimentoCandidato" onChange={event => setFieldValue(event.target.name, event.target.value)}>
                      <Radio value="Sim">Sim</Radio>
                      <Radio value="Nao">Não</Radio>
                    </RadioGroup>
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Cadastre uma senha para acesso futuro</Heading>
                  <label htmlFor="email">
                    <span>Senha</span>
                    <Input id="password" name="password" type="password" onChange={(event) => {
                        setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                  <label htmlFor="cpf">
                    <span>Confirme sua senha</span>
                    <Input id="confirmaSenha" name="confirmaSenha" type="password" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.value);
                  }} />
                  </label>
                </div>

                <div className="form-group">
                  <Heading className="cadastroInputsHeading" as="h2" size="lg">Anexar sua foto de candidatura</Heading>
                  <Box className="cadastroInputs">
                    <Thumb file={values.photo} />
                    <Text className="helperTextUpload">                    
                      Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura 
                      coletiva você deverá usar a imagem com todos os integrantes.
                    </Text>
                  </Box>
                  <input id="photo" name="photo" className="inputPhoto" type="file" onChange={(event) => {
                    setFieldValue(event.target.name, event.target.files[0]);
                  }} className="form-control" />
                </div>

                <Box className="cadastroButtons">
                  <Button
                    isLoading={isLoading}
                    loadingText="Enviando"
                    variantColor="pink"
                    type="submit"
                  >
                    Enviar
                  </Button>
                  <Text>
                    Ao enviar seus dados você receberá um código de validação, insira-o na tela a seguir
                  </Text>
                </Box>
              </form>
            );
          }} />
         

        </section>
      </main>
  )
}
