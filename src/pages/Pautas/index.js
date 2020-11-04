import React, { useState } from "react"
import "./styles.css"
import { Form, Field } from 'react-final-form'
import { useHistory } from 'react-router-dom'
import AdaptedRadioGroup from '../../components/AdaptedRadioGroup'
import {
  Box,
  Button,
  Radio,
  Flex,
  Text
} from '@chakra-ui/core'


export default function CadastroPautas(){
  const [isLoading, setLoading] = useState(false)
  const formData = localStorage.getItem('@merepresenta/dados-pessoais');

  const convertedForm = JSON.parse(formData);

  const pautasData = {...convertedForm};


  const history = useHistory();



  const continuarClick = (values) =>{
    const formattedValues = {
      ...values,
      ...convertedForm
    }
    
    if (Object.keys(values).length < 24)
      alert("Todos os campos são obrigatórios")
    else {
      localStorage.setItem('@merepresenta/pautas', JSON.stringify(formattedValues));
      history.push({pathname: '/cadastro/candidato-temas'})
    }
      // console.log(formattedValues)
  }

  return(
    <Form
      onSubmit={continuarClick}
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
          <h2 id="text1">Pautas #MeRepresenta</h2>
          
          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Gênero</h3>
            <h4 className="numero-pauta">Pauta 01 de 24</h4>
            <h2 className="subtitulo-pauta">1. Cirurgia genital em crianças intersexo por motivo estético</h2>
            <p className="descricao-pauta">Crianças intersexo estão passando por cirurgias porque seus pais e  médicos estão definindo qual sexo deveriam ter, apenas por motivos  estéticos. Cerca de 1% da   população do mundo é intersexo, pois tem  uma genitália, órgãos reprodutores ou cromossomos que não se  encaixam inteiramente na definição típica de masculino ou feminino.  A maioria destas cirurgias não é de emergência e nem tem motivos  médicos, pois são crianças saudáveis. Após a cirurgia, estas crianças  ainda precisam tomar hormônios por toda a vida. Além disso, muitas  delas ficam com problemas como incontinência urinária, perda de  sensação e função sexual e trauma psicológico. No Brasil não há  legislação sobre o assunto. Apenas em Malta e no Chile existem leis  proibindo intervenção médica em crianças intersexo sem  emergências clínicas.  
            
            <a id="text12">Saiba mais sobre o assunto neste <a target="_blank" href="https://youtu.be/n0UyG6zSNIA">vídeo</a> e nesta <a target="_blank" href="https://tab.uol.com.br/noticias/redacao/2019/07/18/nem-rosa-nem-azul-como-e-ser-pessoa-intersexo-no-brasil.htm">matéria</a>.</a>
            </p> 
            <Field
              name="pauta1"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de cirurgia genital em crianças intersexo por motivo estético</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> cirurgia genital em crianças intersexo por motivo estético</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 02 de 24</h4>
            <h2 className="subtitulo-pauta">2. Discussão de gênero e sexualidade nas escolas</h2>
            <p className="descricao-pauta">Jovens estão sendo impedidos de estudar e debater sobre gênero e sexualidade nas escolas. 
            Municípios e estados em todo país têm  aprovado leis contra a “ideologia de gênero”, associadas à ideia de  promover uma 
            “Escola sem partido”. Mas o Supremo Tribunal Federal  já decidiu, em 2020, que estas leis são contrárias à Constituição,
            porque violam princípios do sistema educacional brasileiro: a  liberdade de ensinar e o pluralismo de ideias. 
            <a id="text13">Saiba mais sobre como a “ideologia de gênero” é um projeto político e fundamentalista na série de 
            reportagens <a target="_blank" href="http://www.reinodadesinformacao.com.br/explore-mais-graficos/">O Reino 
            Sagrado da Desinformação</a> da  Gênero e Número.</a>
            </p> 
            <Field
              name="pauta2"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> da discussão de gênero e sexualidade nas escolas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> a discussão de gênero e sexualidade nas escolas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 03 de 24</h4>
            <h2 className="subtitulo-pauta">3. Casas públicas de acolhida para LGBT+</h2>
            <p className="descricao-pauta">Jovens LGBT+ são expulsos de casa pela família, o Brasil é o país  que mais mata LGBT+ no mundo e a saúde mental desta população  ficou ainda pior durante a pandemia. Praticamente não há políticas  públicas no Brasil de atendimento à população LGBT+. O movimento  LGBT+ demanda desde a década de 70 que sejam criadas pelo  Estado casas de acolhida. Na ausência do Estado, a própria  sociedade civil já criou 14 casas de acolhida LGBT+ em todas as  regiões do país, mantidas principalmente com recursos de doações.  Além de abrigo, costumam oferecer também atendimento de saúde  clínica, mental e orientações sobre seus direitos. 
<a id="text14">Saiba mais sobre o trabalho das casas de acolhida nesta <a target="_blank" href="https://ponte.org/casas-de-acolhida-lgbt-diminuem-atendimentos-mas-mantem-portas-abertas/">reportagem</a>  e nesta outra <a target="_blank" href="https://cbn.globoradio.globo.com/media/audio/301544/pandemia-afeta-ainda-mais-populacoes-vulneraveis-d.htm">reportagem</a>&nbsp;também.</a>
            </p> 
            <Field
              name="pauta3"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span>  de casas de acolhida públicas para LGBT+.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> casas de acolhida públicas para LGBT+.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#LGBT+</h3>
            <h4 className="numero-pauta">Pauta 04 de 24</h4>
            <h2 className="subtitulo-pauta">4. Aborto legal e seguro no SUS</h2>
            <p className="descricao-pauta">O aborto é um direito de qualquer pessoa gestante no Brasil, desde  1940, quando a sua vida está em risco com a gravidez ou quando ela  é resultado de um estupro e, desde 2012, também é possível quando  o feto não tiver um cérebro formado. Nestes casos, não é preciso  realizar Boletim de Ocorrência, nem ter autorização da justiça.  Qualquer hospital do SUS que tenha serviço de ginecologia e  obstetrícia deveria realizar o aborto legal e seguro. Mas este direito  não está sendo garantido no SUS - dos 126 hospitais de referência no  país, apenas 42 estão realizando o serviço em 2020.
<a id="text19">Conheça os <a target="_blank" href="https://azmina.com.br/reportagens/so-55-dos-hospitais-que-faziam-aborto-legal-seguem-atendendo-na-pandemia/" >hospitais que estão atendendo em 2020</a> e o <a target="_blank" href="https://mapaabortolegal.org/">Mapa do  Aborto Legal</a>, elaborados pela Gênero e Número e Revista AzMina.</a>

            </p> 
            <Field
              name="pauta4"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span>  do aborto legal e seguro no SUS.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> o aborto legal e seguro no SUS.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 05 de 24</h4>
            <h2 className="subtitulo-pauta">5. Delegacias da Mulher 24h para mulheres cis e trans</h2>
            <p className="descricao-pauta">O aborto é um direito de qualquer pessoa gestante no Brasil, desde  1940, quando a sua vida está em risco com a gravidez ou quando ela  é resultado de um estupro e, desde 2012, também é possível quando  o feto não tiver um cérebro formado. Nestes casos, não é preciso  realizar Boletim de Ocorrência, nem ter autorização da justiça.  Qualquer hospital do SUS que tenha serviço de ginecologia e  obstetrícia deveria realizar o aborto legal e seguro. Mas este direito  não está sendo garantido no SUS - dos 126 hospitais de referência no  país, apenas 42 estão realizando o serviço em 2020.

<a id="text23">Conheça os <a target="_blank" href="https://azmina.com.br/reportagens/so-55-dos-hospitais-que-faziam-aborto-legal-seguem-atendendo-na-pandemia/" >hospitais que estão atendendo em 2020</a> e o <a target="_blank" href="https://mapaabortolegal.org/">Mapa do  Aborto Legal</a>, elaborados pela Gênero e Número e Revista AzMina.</a>

            </p> 
            <Field
              name="pauta5"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de delegacias da Mulher 24h para mulheres cis e trans.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> delegacias da Mulher 24h para mulheres cis e trans.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 06 de 24</h4>
            <h2 className="subtitulo-pauta">6. Trans, travestis e pessoas não-binárias usarem o banheiro que escolherem</h2>
            <p className="descricao-pauta">A população trans, travesti e não-binária é frequentemente impedida  de usar banheiros de acordo com sua identidade de gênero. Desde  2015, o tema está no Supremo Tribunal Federal e dois ministros já  disseram que são a favor de poderem escolher qual banheiro usar.  Mas há 5 anos o ministro Fux, atual presidente do STF, interrompeu o  julgamento dizendo que precisava de tempo para pensar no assunto. 

<a id="text27">Saiba mais sobre o assunto neste <a target="_blank" href="https://www.youtube.com/watch?v=nxdNW4ptMQM">vídeo</a> e nesta <a target="_blank" href="https://ponte.org/impedidas-de-usar-o-banheiro-a-realidade-de-pessoas-trans-no-brasil/" >reportagem.</a></a>

            </p> 
            <Field
              name="pauta6"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de trans, travestis e pessoas não-binárias usarem o banheiro que escolherem.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> trans, travestis e pessoas não-binárias usarem o banheiro que escolherem.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Raça</h3>
            <h4 className="numero-pauta">Pauta 07 de 24</h4>
            <h2 className="subtitulo-pauta">7. Ensino de história e cultura afro-brasileira em todas as escolas</h2>
            <p className="descricao-pauta">Há 17 anos foi aprovada uma lei para o ensino obrigatório, em todas  as escolas, da história e cultura afro-brasileira (Lei 10.639/03). Mas,  ainda hoje, não se ensina a luta dos negros e as contribuições do  povo negro nas áreas social, econômica e política na história do  Brasil. O povo negro é retratado apenas como escravizado. Falta  fiscalização da aplicação da lei nas escolas e elaboração de materiais  didáticos com estes conteúdos.

<a id="text31">Saiba mais sobre a dificuldade do ensino de história e  cultura-afrobrasileira nas escolas nesta <a target="_blank" href="https://www.cartacapital.com.br/educacao/quinze-anos-depois-lei-10-639-ainda-esbarra-em-desconhecimento-e-resistencia/" >reportagem.</a></a>

            </p> 
            <Field
              name="pauta7"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Ensino de história e cultura afro-brasileira em todas as escolas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Ensino de história e cultura afro-brasileira em todas as escolas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 08 de 24</h4>
            <h2 className="subtitulo-pauta">8. Cotas para pessoas negras no Legislativo</h2>
            <p className="descricao-pauta">56% da população brasileira é negra, mas candidaturas negras  recebem apenas 20% dos recursos públicos para fazerem suas  campanhas e menos de 30% dos deputados estaduais e federais  eleitos são negros. Não há democracia se não houver representação  de negros e quilombolas, também na política. Os movimentos negros  no Brasil sempre reivindicaram cotas raciais como uma medida de  reparação histórica. Desde 2011, o deputado Federal Luis Alberto  propôs um projeto para que houvesse cotas para políticos negros  como vereadores, deputados estaduais e deputados federais (PEC  116/2011). Este projeto chegou a ser aprovado em uma etapa  importante na Câmara dos Deputados, mas já está há 5 anos  arquivado. Em 2020, o Tribunal Superior Eleitoral o Supremo Tribunal  Federal discutiram que as candidaturas negras devem receber  proporcionalmente recursos para campanha e tempo de tv e rádio nas  eleições. Esta vitória reacende o debate sobre a urgência da  representatividade das populações negras para que haja democracia  no Brasil.
<a id="text35">Saiba mais sobre cotas raciais na política nesta <a target="_blank" href="https://oglobo.globo.com/sociedade/saude/politica-de-saude-para-populacao-negra-so-existe-em-57-municipios-12-anos-apos-ser-criada-23364705">reportagem</a> e sobre o  financiamento público e tempo de TV para candidaturas negras na  plataforma <a target="_blank" href="https://www.paneantirracista.org/partidos" >PANE Antirracista</a> do Instituto Marielle Franco.</a>
            </p> 
            <Field
              name="pauta8"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Cotas para pessoas negras no Legislativo.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Cotas para pessoas negras no Legislativo.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 09 de 24</h4>
            <h2 className="subtitulo-pauta">9. Política de saúde para a população negra</h2>
            <p className="descricao-pauta">O Brasil tem mais de 5.500 municípios, mas apenas 57 colocam em prática a Política Nacional de Saúde Integral da População Negra,  criada em 2006. Há doenças que afetam mais a população negra  (exemplo: pressão alta, anemia falciforme, diabetes, glaucoma) e  também há práticas racistas no atendimento de saúde (exemplo:  mulheres negras recebem menos anestesia nos partos do que  mulheres brancas). Por isso, é fundamental que exista no SUS  políticas de atendimento específicas para a população negra. Em  2019, o SUS perdeu 20 bilhões de reais de seu orçamento e isso  também afeta diretamente a população negra, pois são 67% dos  usuários do SUS.

<a id="text39">Saiba mais sobre a falta de implementação da política de saúde para  a população negra nesta <a target="_blank" href="https://oglobo.globo.com/sociedade/saude/politica-de-saude-para-populacao-negra-so-existe-em-57-municipios-12-anos-apos-ser-criada-23364705" >reportagem</a> e sobre o impacto disso na  pandemia neste evento da <a target="_blank" href="https://brasil.un.org/pt-br/90260-especialistas-pedem-implementacao-da-politica-nacional-de-saude-integral-da-populacao-negra" >ONU Mulheres.</a></a>

            </p> 
            <Field
              name="pauta9"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Política de saúde para a população negra.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Política de saúde para a população negra.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Povos Tradicionais</h3>
            <h4 className="numero-pauta">Pauta 10 de 24</h4>
            <h2 className="subtitulo-pauta">10.Políticas emergenciais de combate à pandemia nas comunidades quilombolas</h2>
            <p className="descricao-pauta">No Brasil, há 16 milhões de quilombolas, distribuídos em 6.300 comunidades remanescentes de territórios em que houve resistência  negra à escravização. A Constituição de 1988 garantiu o direito dos  quilombolas à propriedade de suas terras, mas, até hoje, apenas  5,34% dos territórios quilombolas conseguiu. O atual presidente  afirmou em campanha que não investiria nenhum centavo em  indígenas e quilombolas e derrubou uma série de medidas destinadas  à saúde de povos indígenas, quilombolas e demais comunidades  tradicionais durante a pandemia, que havia sido aprovada pelo  Congresso Nacional. A população quilombola tem morrido 120% mais  de COVID-19 do que a média da população brasileira. Por isso, a  Coordenação Nacional de Articulação das Comunidades Negras  Rurais Quilombolas – CONAQ recorreu ao Supremo Tribunal Federal  para que o Estado brasileiro tome ações emergenciais de combate à  pandemia nas comunidades quilombolas (ADPF 742/2020).
<a id="text44">Saiba mais sobre a urgência de políticas de combate à pandemia nas comunidades quilombolas nesta <a target="_blank" href="https://diplomatique.org.br/supremo-deve-decidir-sobre-protecao-de-comunidades-quilombolas/" >reportagem</a> e no vídeo da campanha  <a target="_blank" href="https://www.instagram.com/tv/CFe2T9PHOn9/" >Vidas Quilombolas Importam</a> da CONAQ. </a>

            </p> 
            <Field
              name="pauta10"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Políticas emergenciais de combate à pandemia nas comunidades quilombolas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Políticas emergenciais de combate à pandemia nas comunidades quilombolas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 11 de 24</h4>
            <h2 className="subtitulo-pauta">11. Sacrifício de animais no contexto religioso</h2>
            <p className="descricao-pauta">Em 2019, o Supremo Tribunal Federal decidiu que o sacrifício de 
            animais praticado por povos de terreiros, judeus e muçulmanos está  de acordo com a Constituição e pode ser praticado (RE 494.601).
          <a id="text49">A permissão de se realizar o sacrifício ritual em contexto religioso  combate o <a target="_blank" href="https://www.youtube.com/watch?v=qTSD4MnkSRs">racismo dirigido às religiões de matriz africana</a>, principais  alvos de ataques e intolerância pela prática, além de promover a  defesa do Estado laico.</a>
<a id="text50">Saiba mais sobre a urgência de políticas de combate à pandemia nas comunidades quilombolas nesta <a target="_blank" href="https://diplomatique.org.br/supremo-deve-decidir-sobre-protecao-de-comunidades-quilombolas/" >reportagem</a> e no vídeo da campanha  <a target="_blank" href="https://www.instagram.com/tv/CFe2T9PHOn9/" >Vidas Quilombolas Importam</a> da CONAQ. </a>
            </p> 
            <Field
              name="pauta11"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Sacrifício de animais no contexto religioso.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Sacrifício de animais no contexto religioso.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 12 de 24</h4>
            <h2 className="subtitulo-pauta">12. Demarcação de terras indígenas</h2>
            <p className="descricao-pauta">Os povos indígenas têm direito ao reconhecimento da demarcação  das suas terras desde a Constituição de 1988. As demarcações são  importantes não apenas porque garantem a diversidade étnica e  cultural dos povos indígenas, mas também por serem os territórios  onde há maior conservação ambiental. Uma série de políticas  públicas e recursos para indígenas são melhor garantidos nas terras  indígenas demarcadas, como escolas para educação especial  indígena, postos de saúde, água tratada. Desde 2016, nenhuma terra  indígena foi demarcada no Brasil. Comunidades indígenas sem terras  demarcadas estão sofrendo maior impacto com a pandemia. O atual  presidente derrubou uma série de medidas destinadas à saúde de  povos indígenas, quilombolas e demais comunidades tradicionais  durante a pandemia, que havia sido aprovada pelo Congresso  Nacional. A taxa de mortalidade indígena por COVID-19 é 224% mais  alta do que a média da população brasileira.

<a id="text54">Saiba mais sobre o impacto da não demarcação de terras sobre os  indígenas na pandemia nesta <a target="_blank" href="https://www.causaoperaria.org.br/a-nao-demarcacao-das-terras-indigenas-e-um-genocidio/">reportagem</a> e dados sobre a pandemia  na plataforma <a target="_blank" href="http://emergenciaindigena.apib.info/">Emergência Indígena</a> da Articulação dos Povos  Indígenas do Brasil - APIB.</a>
</p> 
            <Field
              name="pauta12"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Demarcação de terras indígenas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Demarcação de terras indígenas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Políticas Sociais</h3>
            <h4 className="numero-pauta">Pauta 13 de 24</h4>
            <h2 className="subtitulo-pauta">13. Renda básica permanente mantendo os programas  sociais existentes</h2>
            <p className="descricao-pauta">Os povos indígenas têm direito ao reconhecimento da demarcação  das suas terras desde a Constituição de 1988. As demarcações são  importantes não apenas porque garantem a diversidade étnica e  cultural dos povos indígenas, mas também por serem os territórios  onde há maior conservação ambiental. Uma série de políticas  públicas e recursos para indígenas são melhor garantidos nas terras  indígenas demarcadas, como escolas para educação especial  indígena, postos de saúde, água tratada. Desde 2016, nenhuma terra  indígena foi demarcada no Brasil. Comunidades indígenas sem terras  demarcadas estão sofrendo maior impacto com a pandemia. O atual  presidente derrubou uma série de medidas destinadas à saúde de  povos indígenas, quilombolas e demais comunidades tradicionais  durante a pandemia, que havia sido aprovada pelo Congresso  Nacional. A taxa de mortalidade indígena por COVID-19 é 224% mais  alta do que a média da população brasileira.

<a id="text54">Saiba mais sobre o impacto da não demarcação de terras sobre os  indígenas na pandemia nesta <a target="_blank" href="https://www.causaoperaria.org.br/a-nao-demarcacao-das-terras-indigenas-e-um-genocidio/">reportagem</a> e dados sobre a pandemia  na plataforma <a target="_blank" href="http://emergenciaindigena.apib.info/">Emergência Indígena</a> da Articulação dos Povos  Indígenas do Brasil - APIB.</a>
</p> 
            <Field
              name="pauta13"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Renda básica permanente mantendo os programas  sociais existentes.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Renda básica permanente mantendo os programas  sociais existentes.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 14 de 24</h4>
            <h2 className="subtitulo-pauta">14. Teto de gastos públicos</h2>
            <p className="descricao-pauta">Em 2016, foi aprovada uma política econômica conhecida por “teto de  gastos públicos”, que nos próximos 20 anos pode reduzir cerca de 1/3  dos gastos públicos federais, voltando a níveis de recursos anteriores  à Constituição de 1988. Isso levaria ao congelamento de gastos  sociais com políticas para a saúde, educação e seguro desemprego.  Já estamos sentindo os impactos do “teto dos gastos públicos”, com a  redução de 20 bilhões de reais para o SUS, em plena pandemia.

<a id="text63">Saiba mais a respeito com a campanha <a target="_blank " href="http://direitosvalemmais.org.br">#AcabaTetodeGastos</a> e com  esta <a target="_blank" href="https://www.nexojornal.com.br/ensaio/2020/Criatividade-cont%C3%A1bil-ou-interpretativa-n%C3%A3o-salvar%C3%A1-o-teto-de-gastos" >matéria.</a></a>

</p> 
            <Field
              name="pauta14"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> do Teto de gastos públicos.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> o Teto de gastos públicos.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Segurança Pública</h3>
            <h4 className="numero-pauta">Pauta 15 de 24</h4>
            <h2 className="subtitulo-pauta">15. Guardas Civis Municipais andarem armadas</h2>
            <p className="descricao-pauta">A atuação da Guardas Civis Municipais de várias cidades tem se  tornado cada vez mais parecida (e até mesmo realizada em conjunto)  com a Polícia Militar. Enquanto o papel da Polícia Militar é o  de garantir a segurança pública, o das Guardas Civis era apenas o de  proteger o patrimônio público da cidade e cada município pode  escolher ter uma Guarda ou não. Mas em 2014, uma lei aumentou o  papel das Guardas, prevendo o patrulhamento preventivo e o uso  progressivo da força (Lei 13.022/2014). A partir daí, muitas Guardas  passaram a atuar de modo muito semelhante à Polícia Militar:  trabalhando armadas, realizando patrulhamento ostensivo,  abordagens seletivas, apreensões e prisões. Isso é um problema,  porque a Polícia Militar é a que mais mata jovens negros e periféricos.  Só durante a pandemia as mortes por policiais aumentaram 31%.

<a id="text68">Saiba mais sobre o problema da ampliação do papel da Guarda  Municipal nesta <a target="_blank" href="http://www.justificando.com/2020/09/17/o-estado-policial-e-a-guarda-municipal/">matéria</a></a>

</p> 
            <Field
              name="pauta15"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Guardas Civis Municipais andarem armadas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Guardas Civis Municipais andarem armadas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 16 de 24</h4>
            <h2 className="subtitulo-pauta">16. Política de emprego para pessoas que saem da prisão</h2>
            <p className="descricao-pauta">As pessoas que saem da prisão muitas vezes não conseguem  empregos por conta do preconceito, mesmo quando já cumpriram  toda a sua pena há muito tempo. Oferecer uma política de acesso ao  mercado de trabalho para estas pessoas é importante para que  consigam romper com um ciclo de violência e desigualdade no qual  estão inseridas, na maioria das vezes. O Brasil tem mais de 700 mil  presos e só 19% deles consegue trabalhar e 13% estudar dentro das  prisões. Isso também contribui para que saiam das prisões sem  condições mínimas para o mercado de trabalho. O município pode  promover vagas para pessoas com este perfil ou ao menos reduzir as  limitações de acesso ao trabalho. Na cidade de de São Paulo, por  exemplo, uma lei impede que pessoas condenadas criminalmente,  não importa há quanto tempo, possam ser taxistas (Lei 7.329/69).  Isso acaba sendo uma pena de perpétua e desproporcional, que só  reforça a discriminação.

<a id="text71">Saiba como as cidades podem contribuir com outras políticas para  quem sai da prisão, além do emprego, na <a target="_blank" href="http://ittc.org.br/wp-content/uploads/2017/02/Agenda-Municipal-online.pdf" >Agenda Municipal para  Justiça Criminal</a> do Instituto Terra, Trabalho e Cidadania - ITTC.</a>

</p> 
            <Field
              name="pauta16"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Política de emprego para pessoas que saem da prisão.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Política de emprego para pessoas que saem da prisão.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Drogas</h3>
            <h4 className="numero-pauta">Pauta 17 de 24</h4>
            <h2 className="subtitulo-pauta">17. Descriminalizar o comércio de drogas para reduzir a  quantidade de mulheres e jovens negros presos</h2>
            <p className="descricao-pauta">O Brasil tem a terceira maior população carcerária do mundo, com  mais de 700 mil pessoas presas. As cadeias estão superlotadas,  trabalhando em média 70% acima da sua capacidade. E um dos  motivos é a política de “guerra às drogas”. Em 2006, aprovamos a Lei  de Drogas, uma das principais responsáveis pelo aumento do número  de presos no país (Lei 11.343/2016). Hoje não é crime ser usuário de  drogas, mas crime comercializar drogas. O problema é que a lei não  traz critérios para diferenciar um do outro. Ou seja, é mais provável  que um usuário, negro, pobre e periférico seja preso por tráfico do  que tratado como alguém que precisa de atendimento na saúde  pública. Drogas é a segunda maior causa de prisão dos homens e é a  maior causa de prisão de mulheres (metade delas está presa por  comércio de drogas). Pessoas negras são 56% da população  brasileira, mas são 70% da população  das prisões. Jovens, de 18 a  29 anos, são 18% da população brasileira, mas 44% dos presos.  Além do encarceramento, a “guerra às drogas” também provoca  maior violência policial, mortes por homicídio e afasta os usuários de  drogas de buscar atendimento na saúde pública.  

<a id="text75">Saiba mais sobre com a <a target="_blank" href="https://desencarceramento.org.br/" >Agenda Nacional pelo Desencarceramento</a>,  com o <a target="_blank" href="https://www.youtube.com/watch?v=LMX3eESrH9g" >vídeo</a> e <a target="_blank" href=" http://ittc.org.br/pgd-jogo/" >jogo</a> Política de Drogas é uma questão de Mulheres do  Instituto Terra, Trabalho e Cidadania - ITTC.</a>


</p> 
            <Field
              name="pauta17"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Descriminalizar o comércio de drogas para reduzir a  quantidade de mulheres e jovens negros presos.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Descriminalizar o comércio de drogas para reduzir a  quantidade de mulheres e jovens negros presos.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 18 de 24</h4>
            <h2 className="subtitulo-pauta">18. Tratamento de usuário de drogas no SUS com redução de danos</h2>
            <p className="descricao-pauta">Usuários de drogas devem poder ser tratados no SUS. Mas vários governos municipais, estaduais e o atual governo federal têm retirado  verbas da saúde pública e destinado para entidades religiosas. As  formas de tratamento do usuário de drogas no SUS e nas entidades  religiosas são totalmente diferentes. O SUS adota políticas que  respeitam o momento de cada usuário no seu tratamento. Isso  significa que para as pessoas que ainda não podem ou não querem  parar de usar drogas, o objetivo maior é a reduzir os danos causados  pelo uso. Por exemplo, os usuários podem receber seringas  descartáveis, para não serem contaminados por doenças  sexualmente transmissíveis, ou podem ser orientados a trocar uma  droga por outra de menor risco. Já as entidades religiosas,   normalmente conhecidas como “Comunidades Terapêuticas”  promovem a intervenção do usuário e o método da abstinência total  do uso de drogas. Isso reforça a ideia de que usuários de drogas  devem ser excluídos da sociedade, de que são criminosos, ou uma  abordagem moral e religiosa e não de saúde pública.  

<a id="text78">Saiba mais sobre políticas de redução de danos aqui e sobre  comunidades terapêuticas aqui.</a>

</p> 
            <Field
              name="pauta18"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Tratamento de usuário de drogas no SUS com redução de danos.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Tratamento de usuário de drogas no SUS com redução de danos.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Comunicação</h3>
            <h4 className="numero-pauta">Pauta 19 de 24</h4>
            <h2 className="subtitulo-pauta">19. Acesso gratuito à internet nas periferias, comunidades  indígenas e quilombolas</h2>
            <p className="descricao-pauta">Na média nacional, 28% dos domicílios brasileiros ainda não tem acesso à internet. Na área rural, esse número sobre para 48%.  Enquanto 99% dos domicílios da classe A estão conectados, nas  classes D e E, 50% dos domicílios não possuem conexão. O Marco  Civil da Internet reconhece que o acesso à internet é essencial para o  exercício da cidadania (Lei n° 12.965/2014), mas a exclusão digital  afeta muito mais a população pobre, periférica, quilombola e  indígenas. Apenas 48% da população indígena e 55% das pessoas  negras já utilizou um computador pelo menos uma vez na vida.   

<a id="text83">Saiba mais sobre a desigualdade no acesso à internet no vídeo da campanha <a target="_blank" href="https://www.youtube.com/watch?v=J8ePyTWzCO0" >Internet Direito Seu</a> do Intervozes.</a>

</p> 
            <Field
              name="pauta19"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Acesso gratuito à internet nas periferias, comunidades  indígenas e quilombolas.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Acesso gratuito à internet nas periferias, comunidades  indígenas e quilombolas.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 20 de 24</h4>
            <h2 className="subtitulo-pauta">20. Políticos serem donos de emissoras de rádio e TV</h2>
            <p className="descricao-pauta">Nas últimas eleições, 34 candidatos a deputado estadual, federal, senador e governador eram donos de emissoras de rádio e TV e 26  foram eleitos. Isso é um problema, porque eles podem influenciar o  que a mídia fala sobre eles e seus adversários políticos, seja durante  a campanha, seja quando eleitos. No caso de deputados federais e  senadores eleitos é ainda mais grave. A Constituição não permite que  eles tenham contratos com o Estado e as emissoras de rádio e TV  são concessões públicas, um tipo de contrato. Além disso, são os  deputados e senadores que fiscalizam e decidem quem pode ter uma  emissora de rádio e TV. Ou seja, decidem sobre eles mesmos. Duas  ações pedem uma manifestação do Supremo Tribunal Federal sobre  o assunto, mas nem começaram a ser julgadas (ADPF  246 e ADPF 379).    

<a id="text87">Saiba mais sobre quem eram os políticos donos de rádio e TV que  foram <a target="_blank" href="http://intervozes.org.br/politicos-donos-da-midia-levantamento-do-intervozes-em-10-estados-denuncia-pratica-ilegal-de-candidatos-que-sao-proprietarios-de-canais-de-radio-e-tv/">candidatos</a> nas últimas eleições e quem foram os deputados  federais e senadores <a target="_blank" href="https://congressoemfoco.uol.com.br/opiniao/colunas/donos-de-radio-e-tv-formarao-bancada-de-pelo-menos-26-parlamentares-no-novo-congresso/" >eleitos</a> nos levantamentos do Intervozes.</a>

</p> 
            <Field
              name="pauta20"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Políticos serem donos de emissoras de rádio e TV.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Políticos serem donos de emissoras de rádio e TV.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Democracia</h3>
            <h4 className="numero-pauta">Pauta 21 de 24</h4>
            <h2 className="subtitulo-pauta">21. Cota de gênero e raça nas lideranças dos partidos</h2>
            <p className="descricao-pauta">Os partidos políticos e sua liberdade são fundamentais à democracia. Durante a ditadura, só podiam existir dois partidos e vários políticos tiveram os seus mandatos cassados. Mas os partidos brasileiros  ainda são marcados pela ausência de democracia interna. As  lideranças dos partidos, por exemplo, são principalmente compostas  por homens brancos, heterossexuais, cisgêneros e ricos e não  costuma haver mecanismos internos democráticos para a sua  escolha. Mulheres ocupam apenas 25% das lideranças partidárias. A  falta de representatividade nos cargos de direção dos partidos acaba  impactando na distribuição dos recursos públicos para as campanhas,  pois são estas lideranças que definem quanto cada candidatura deve   receber. Mulheres negras, por exemplo, são 28% da população  brasileira, 12,9% das candidatas a deputado federal, mas receberam  apenas 5,7% dos recursos públicos de campanha e foram apenas   2,5% dos eleitos. Também é importante que os partidos invistam em  espaços de articulação política de grupos minorizados dentro dos  partidos, como os setoriais de mulheres, pessoas negras e LGBT+.  Enquanto 76% dos partidos têm setoriais de mulheres, apenas 42%  tem setoriais negras e 33% de LGBT+.  

<a id="text92">Para saber mais sobre a presença de setoriais de mulheres, pessoas  negras e LGBT+ em cada partido, ver pesquisa da Casa 1  e #VoteLGBT.</a>

</p> 
            <Field
              name="pauta21"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Cota de gênero e raça nas lideranças dos partidos.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Cota de gênero e raça nas lideranças dos partidos.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 22 de 24</h4>
            <h2 className="subtitulo-pauta">22. Corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política</h2>
            
            <Field
              name="pauta22"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Corte de recursos públicos a partidos com candidaturas que praticam discurso de ódio ou violência política.</a>
              </Radio>
            </Field>
          </Box>


          <Box className="dadosInputs">
            <h3 className="titulo-pauta">#Meio Ambiente</h3>
            <h4 className="numero-pauta">Pauta 23 de 24</h4>
            <h2 className="subtitulo-pauta">22. Consentimento dos povos indígenas para a realização de empreendimentos</h2>
            <p className="descricao-pauta">Uma série de empreendimentos (como construções de barragens,  rodovias, mineração) tem sido realizada em territórios indígenas sem  que haja consulta e consentimento prévio dos povos indígenas.  Consultas prévias, com o objetivo de alcançar um acordo ou  consentimento, são um direito dos povos indígenas (Convenção 169  da Organização Internacional do Trabalho). O Estado ou as empresas  acabam fazendo pequenas reuniões, sem envolver um grupo  representativo dos povos indígenas afetados, apenas para cumprirem  esta etapa formal e já poderem, paralelamente, emitir autorizações  para o início das obras. O processo de consulta e consentimento  adequado deveria ser elaborado e proposto pelos próprios povos  indígenas, em respeito a sua autodeterminação. O desrespeito a esse  direito provoca impactos não só na comunidade indígena, nos seus  saberes tradicionais e relação ancestral com a terra, mas também ao  meio ambiente. Os povos indígenas são protetores das florestas. As  terras indígenas demarcadas possuem preservação ambiental maior  até do que a de parques ambientais estaduais e nacionais.    

<a id="text95">Conheça um <a target="_blank" href="https://reporterbrasil.org.br/wp-content/uploads/2016/07/Protocolo-de-consulta-Munduruku.pdf">exemplo</a> de protocolo de consulta prévia e  consentimento elaborado pelo povo indígena Mundukuru.</a>  

</p> 
            <Field
              name="pauta23"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> de Consentimento dos povos indígenas para a realização de empreendimentos.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span> Consentimento dos povos indígenas para a realização de empreendimentos.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosInputs">
            <h4 className="numero-pauta">Pauta 24 de 24</h4>
            <h2 className="subtitulo-pauta">24. Afastamento do ministro do meio ambiente</h2>
            <p className="descricao-pauta">Uma série de empreendimentos (como construções de barragens,  rodovias, mineração) tem sido realizada em territórios indígenas sem  que haja consulta e consentimento prévio dos povos indígenas.  Consultas prévias, com o objetivo de alcançar um acordo ou  consentimento, são um direito dos povos indígenas (Convenção 169  da Organização Internacional do Trabalho). O Estado ou as empresas  acabam fazendo pequenas reuniões, sem envolver um grupo  representativo dos povos indígenas afetados, apenas para cumprirem  esta etapa formal e já poderem, paralelamente, emitir autorizações  para o início das obras. O processo de consulta e consentimento  adequado deveria ser elaborado e proposto pelos próprios povos  indígenas, em respeito a sua autodeterminação. O desrespeito a esse  direito provoca impactos não só na comunidade indígena, nos seus  saberes tradicionais e relação ancestral com a terra, mas também ao  meio ambiente. Os povos indígenas são protetores das florestas. As  terras indígenas demarcadas possuem preservação ambiental maior  até do que a de parques ambientais estaduais e nacionais.    

<a id="text95">Conheça um <a target="_blank" href="https://reporterbrasil.org.br/wp-content/uploads/2016/07/Protocolo-de-consulta-Munduruku.pdf">exemplo</a> de protocolo de consulta prévia e  consentimento elaborado pelo povo indígena Mundukuru.</a>  

</p> 
            <Field
              name="pauta24"
              component={AdaptedRadioGroup}
              label="Qual o seu posicionamento?">
                <div id="espaço"></div>
              <Radio value="favor">
                <a id="sembold">Sou a<span id="FavorBold">FAVOR</span> do Afastamento do ministro do meio ambiente.</a>
              </Radio>
              <Radio value="contra">
                <a id="sembold">Sou <span id="ContraBold">CONTRA</span>o Afastamento do ministro do meio ambiente.</a>
              </Radio>
            </Field>
          </Box>

          <Box className="dadosButtons">
            <Button
              isLoading={isLoading}
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
    );
}

