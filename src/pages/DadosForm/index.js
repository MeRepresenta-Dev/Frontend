import React, { useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import api from "../../services/api"

import {
  Box,
  Button,
  Heading,
  FormLabel,
  Checkbox,
  Radio,
  Stack,
  Text,
  useToast
} from '@chakra-ui/core'
import './styles.css'

import AdaptedRadioGroup from '../../components/AdaptedRadioGroup'
import CheckboxArrayControl from '../../components/CheckboxArrayControl'
import Control from '../../components/Control'
import Error from '../../components/ErrorInput'
import TextareaControl from '../../components/TextareaControl'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))



export default function DadosForm() {
  const history = useHistory();
  const toast = useToast();
  const [isLoading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [deficiencia, temDeficiencia] = useState(true)
  const userData = JSON.parse(localStorage.getItem('@merepresenta/cadastro'));

  const onSubmit = async values => {
    const formattedValues = {
      ...userData,
      ...values,
      deficiencia: !deficiencia ? 'nao' : values.deficiencia.join(', '),
    }

    console.log(formattedValues)
    
    localStorage.setItem('@merepresenta/dados-form', JSON.stringify(formattedValues)); 
    setLoading(true);
    toast({
      title: `Sucesso!`,
      description: "Prosseguindo para o cadastro de Pautas",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    })
    
    setTimeout(() => {
      setLoading(false);
      return history.push({
        pathname: '/cadastro/candidato-pautas',
        // data: values 
      })
    }, 2000)
      
  }

  

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
          <img src={`http://${userData.photo}`} className="candidato-avatar"alt="Foto do candidato" />
        </Box>
        <Box className="dadosContent">
          <Heading className="dadosHeading" as="h1" size="lg">
            Olá, {userData.name}!
          </Heading>
          <Text>
            Obrigada por ingressar na nossa plataforma! Agora precisamos de algumas informações sobre quem você é. As questões identitárias poderão ser utilizadas pelos eleitores para filtrarem as candidaturas.
          </Text>
          <Form
            onSubmit={onSubmit}
            validate={values => {
              const errors = {}
              if (!values.identidadeGenero) {
                errors.identidadeGenero = 'Escolha uma opção'
              }
              if (!values.orientacaoSexualAfetiva) {
                errors.orientacaoSexualAfetiva = 'Escolha uma opção'
              }
              if (!values.cor) {
                errors.cor = 'Escolha uma opção'
              }
              if (!values.candidaturacoletiva) {
                errors.candidaturacoletiva = 'Escolha uma opção'
              }
              if (!values.descricaoCandidaturaColetiva) {
                errors.descricaoCandidaturaColetiva = 'Marque pelo menos uma opção'
              }
              return errors
            }}
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
              <div id="espaço"></div>

              <Box className="dadosInputs">
                <Field
                  isRequired
                  name="identidadeGenero"
                  component={AdaptedRadioGroup}
                  label="Como você se identifica?">
                    
                    <div id="espaço"></div>
                  <Radio value="mulherCis">
                   <a id="sembold"> Mulher cis</a>
                  </Radio>
                  <Radio value="mulherTrans">
                    <a id="sembold">Mulher trans e/ou travesti</a>
                  </Radio>
                  <Radio value="homemTrans">
                    <a id="sembold">Homem trans</a>
                  </Radio>
                  <Radio value="homemCis">
                    <a id="sembold">Homem cis</a>
                  </Radio>
                  <Radio value="naoBinaria">
                    <a id="sembold">Pessoa não-binária</a>
                  </Radio>
                  <Radio value="naoDeclarar">
                    <a id="sembold" >Prefiro não declarar</a>
                  </Radio>
                </Field>
              </Box>
              <div id="espaço"></div>
              <Box className="dadosInputs">
                <Field
                  name="orientacaoSexualAfetiva"
                  component={AdaptedRadioGroup}
                  label="Qual sua orientação afetiva e/ou sexual?">
                    <div id="espaço"></div>
                  <Radio value="hetero">
                    <a id="sembold" >Hétero</a>
                  </Radio>
                  <Radio value="gay">
                    <a id="sembold" >Gay</a>
                  </Radio>
                  <Radio value="panBisexual">
                    <a id="sembold" > Pan ou Bisexual</a>
                  </Radio>
                  <Radio value="lesbica">
                    <a id="sembold">Lésbica</a>
                  </Radio>
                  <Radio value="naoDeclarar">
                    <a id="sembold" >Prefiro não declarar</a>
                  </Radio>
                </Field>
              </Box>
              <div id="espaço"></div>
              <Box className="dadosInputs">
                <Field
                  name="cor"
                  component={AdaptedRadioGroup}
                  label="Qual sua cor ou raça?">
                    <div id="espaço"></div>
                  <Radio value="branca">
                    <a id="sembold">Branca</a>
                  </Radio>
                  <Radio value="preta">
                    <a id="sembold" > Preta</a>
                  </Radio>
                  <Radio value="parda">
                    <a id="sembold" > Parda</a>
                  </Radio>
                  <Radio value="amarela">
                   <a id="sembold"> Amarela</a>
                  </Radio>
                  <Radio value="indigena">
                    <a id="sembold" >Indígena</a>
                  </Radio>
                </Field>
              </Box>
              <div id="espaço"></div>
              <Box className="dadosInputs">
                <Field
                  name="candidaturacoletiva"
                  component={AdaptedRadioGroup}
                  label="Você faz parte de uma Candidatura Coletiva?">
                    <div id="espaço"></div>
                  <Radio value="nao">
                    <a id="sembold">Não faço parte</a>
                  </Radio>
                  <Radio value="simNumeroDiferente">
                    <a id="sembold">Sim, sou candidata/o individual que está fazendo campanha conjunta com outras candidaturas, cada uma com seu nº de urna próprio</a>
                  </Radio>
                  <Radio value="simMesmoNumero">
                    <a id="sembold" > Sim, sou candidata/o registrada/o, mas represento outras co-candidaturas, sob o mesmo nº de urna</a>
                  </Radio>
                </Field>
              </Box>
              <div id="espaço"></div>
           
              <Box className="dadosInputs">
                <Control name="deficiencia" my={4}>
                  <FormLabel htmlFor="deficiencia">Você possui alguma deficiência?</FormLabel>
                  <Stack mt={1} spacing={1}>
                    <Checkbox onChange={() => temDeficiencia(!deficiencia)} name="deficiencia" value="nao">
                      <a id="sembold">Não possuo</a>
                    </Checkbox>
                    {deficiencia && (
                      <>
                        <CheckboxArrayControl name="deficiencia" value="visual">
                          <a id="sembold" >Deficiência Visual</a>
                        </CheckboxArrayControl>
                        <CheckboxArrayControl name="deficiencia" value="auditiva">
                          <a id="sembold" >Deficiência Auditiva</a>
                        </CheckboxArrayControl>
                        <CheckboxArrayControl name="deficiencia" value="fisica">
                          <a id="sembold" >Deficiência Física</a>
                        </CheckboxArrayControl>
                        <CheckboxArrayControl name="deficiencia" value="intelectual">
                          <a id="sembold" >Deficiência Intelectual</a>
                        </CheckboxArrayControl>
                        <CheckboxArrayControl name="deficiencia" value="multipla">
                          <a id="sembold">Deficiência Multipla</a>
                        </CheckboxArrayControl>
                      </>
                    )}
                    </Stack>
                </Control>
              </Box>

              <div id="espaço"></div>
              
              <Box className="dadosInputs">
              <TextareaControl
                name="descricaoCandidaturaColetiva"
                placeholder="Defendo pautas que se encaixem com …"
                label="Escreva um pouco sobre você ou sobre a candidatura coletiva" />
              </Box>
              <div id="espaço"></div>
              <Box className="dadosInputs">
                <Heading className="dadosHeading" as="h1" size="lg">
                  Pautas #MeRepresenta
                </Heading>
                <Text>
                  Para entendermos melhor quem você representa, o próximo passo é definir sua posição em relação algumas pautas selecionadas pela gente.
                </Text>
              </Box>
              <Box className="dadosButtons">
                <Button
                  isLoading={isLoading}
                  // isDisabled={}
                  loadingText="Enviando"
                  variantColor="teal"
                  type="submit"
                >
                  Continuar
                </Button>
              </Box>
            </Box>
            )}
          />
        </Box>
      </section>
    </main>
  )
}
