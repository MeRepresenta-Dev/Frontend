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

      localStorage.setItem('@merepresenta/cadastro', JSON.stringify(values));
      setLoading(true);
      console.log('submitting', formattedValues)
      api.post("/register", formattedValues)
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
                console.log(e)
               }                
            }

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
                    <Input id="telefone" name="telefone" placeholder="+55 21925640835" onChange={(event) => {
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
                    <Thumb file={photoFile} />
                    <Text className="helperTextUpload">                    
                      Insira a foto que será usado na divulgação da sua campanha, caso faça parte de uma candidatura 
                      coletiva você deverá usar a imagem com todos os integrantes.
                    </Text>
                  </Box>
                  <input id="photo" name="photo" className="inputPhoto" type="file" onChange={onSendPhoto} className="form-control" />
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
