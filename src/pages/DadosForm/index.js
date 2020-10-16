import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useForm } from 'react-hook-form';

const { register, handleSubmit, errors } = useForm();


<<<<<<< Updated upstream
=======
import React, { useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import {Link, useHistory} from 'react-router-dom'

>>>>>>> Stashed changes
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




export default function DadosForm() {

  const history = useHistory();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);


<<<<<<< Updated upstream

  return (
      <main className="dados">
        <section className={`dadosWrapper ${isMobile ? "responsive" : ""}`}>
          <Box className="dadosTSEData">
            <img src="https://via.placeholder.com/150" alt="Foto Candidato" />
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
=======
  const onSubmit = async values => {

    console.log(values);
    
      history.push({
      pathname: '/cadastro/candidato-pautas',
      data: values // your data array of objects
    })
  }


  return (
    <main className="dados">
      <section className={`dadosWrapper ${isMobile ? "responsive" : ""}`}>
        <Box className="dadosTSEData">
          <img src="https://via.placeholder.com/150" alt="Foto do candidato" />
        </Box>
        <Box className="dadosContent">
          <Heading className="dadosHeading" as="h1" size="lg">
            Olá, [Nome do Candidato depois de logado]!
          </Heading>
          <Text>
            Obrigada por ingressar na nossa plataforma! Agora precisamos de algumas informações sobre quem você é. As questões identitárias poderão ser utilizadas pelos eleitores para filtrarem as candidaturas.
          </Text>
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
              <Box className="dadosInputs">
                <Field
                  name="identidadeGenero"
                  component={AdaptedRadioGroup}
                  label="Como você se identifica?"
                >
                  <Radio value="mulherCis">
                    Mulher cis
                  </Radio>
                  <Radio value="mulherTrans">
                    Mulher trans e/ou travesti
                  </Radio>
                  <Radio value="homemTrans">
                    Homem trans
                  </Radio>
                  <Radio value="homemCis">
                    Homem cis
                  </Radio>
                  <Radio value="naoBinaria">
                    Pessoa não-binária
                  </Radio>
                  <Radio value="naoDeclarar">
                    Prefiro não declarar
                  </Radio>
                </Field>
              </Box>
              <Box className="dadosInputs">
                <Field
                  name="orientacaoSexualAfetiva"
                  component={AdaptedRadioGroup}
                  label="Qual sua orientação afetiva e/ou sexual?"
                >
                  <Radio value="hetero">
                    Hétero
                  </Radio>
                  <Radio value="gay">
                    Gay
                  </Radio>
                  <Radio value="panBisexual">
                    Pan ou Bisexual
                  </Radio>
                  <Radio value="lesbica">
                    Lésbica
                  </Radio>
                  <Radio value="naoDeclarar">
                    Prefiro não declarar
                  </Radio>
                </Field>
              </Box>
              <Box className="dadosInputs">
                <Field
                  name="corRaca"
                  component={AdaptedRadioGroup}
                  label="Qual sua cor ou raça?"
                >
                  <Radio value="branca">
                    Branca
                  </Radio>
                  <Radio value="preta">
                    Preta
                  </Radio>
                  <Radio value="parda">
                    Parda
                  </Radio>
                  <Radio value="amarela">
                    Amarela
                  </Radio>
                  <Radio value="indigena">
                    Indígena
                  </Radio>
                </Field>
              </Box>
              <Box className="dadosInputs">
                <Field
                  name="candidaturaColetiva"
                  component={AdaptedRadioGroup}
                  label="Você faz parte de uma Candidatura Coletiva?"
                >
                  <Radio value="nao">
                    Não faço parte
                  </Radio>
                  <Radio value="simNumeroDiferente">
                    Sim, sou candidata/o individual que está fazendo campanha conjunta com outras candidaturas, cada uma com seu nº de urna próprio
                  </Radio>
                  <Radio value="simMesmoNumero">
                    Sim, sou candidata/o registrada/o, mas represento outras co-candidaturas, sob o mesmo nº de urna
                  </Radio>
                </Field>
              </Box>
              <Box className="dadosInputs">
                <Control name="deficiencia" my={4}>
                  <FormLabel htmlFor="deficiencia">Você possui alguma deficiência?</FormLabel>
                  <Stack pl={6} mt={1} spacing={1}>
                    <CheckboxArrayControl name="deficiencia" value="nao">
                      Não possuo
                    </CheckboxArrayControl>
                    <CheckboxArrayControl name="deficiencia" value="visual">
                      Deficiência Visual
                    </CheckboxArrayControl>
                    <CheckboxArrayControl name="deficiencia" value="auditiva">
                      Deficiência Auditiva
                    </CheckboxArrayControl>
                    <CheckboxArrayControl name="deficiencia" value="fisica">
                      Deficiência Física
                    </CheckboxArrayControl>
                    <CheckboxArrayControl name="deficiencia" value="intelectual">
                      Deficiência Intelectual
                    </CheckboxArrayControl>
                    <CheckboxArrayControl name="deficiencia" value="multipla">
                      Deficiência Multipla
                    </CheckboxArrayControl>
                  </Stack>
                  <Error name="deficiencia" />
                </Control>
              </Box>
              <Box className="dadosInputs">
              <TextareaControl name="notes" placeholder="Defendo pautas que se encaixem com …" label="Escreva um pouco sobre você ou sobre a candidatura coletiva" />
              </Box>
              <Box className="dadosInputs">
                <Heading className="dadosHeading" as="h1" size="lg">
                  Pautas #MeRepresenta
                </Heading>
                <Text>
                  Para entendermos melhor quem você representa, o próximo passo é definir sua posição  em relação algumas pautas selecionadas pela gente.
                </Text>
              </Box>
              <Box className="dadosButtons">
                <Button
                  isLoading={submitting}
                  loadingText="Enviando"
                  variantColor="teal"
                  type="submit"
                >
                  Continuar
                </Button>
>>>>>>> Stashed changes
              </Box>
              )}
            />
          </Box>
        </section>
      </main>
  )
}
