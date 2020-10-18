import React from "react"
import { useHistory } from 'react-router-dom'
import "./styles.css"
import {
  Box,
  Button,
} from '@chakra-ui/core'

const formData = localStorage.getItem('@merepresenta/form');

const convertedForm = JSON.parse(formData);

const pautasData = {...convertedForm};

// const history = useHistory();


const clickButton = (pauta, resposta) =>{
    pautasData[pauta] = resposta;

    console.log(pautasData);
}

const continuarClick = () =>{
    localStorage.setItem('@merepresenta/pautas', JSON.stringify(pautasData));

    // history.push({
    //     pathname: '/cadastro/candidato-pautas',
    //   })
}

const CadastroPautas = () => (
 
<Box>
  <div id="TextoPautas">
          <h2 id="text1">Pautas #MeRepresenta</h2>

          <h2 id="text2">#LGBT+</h2>
          <h2 id="text3">Pauta 01 de 24</h2>
          <h2 id="text4">1. Cirurgia genital em crianças intersexo por motivo estético</h2>
          <h2 id="text5">Crianças intersexo estão passando por cirurgias porque seus pais e <br></br> médicos estão definindo qual sexo deveriam ter, apenas por motivos <br></br> estéticos. Cerca de 1% da   população do mundo é intersexo, pois tem <br></br> uma genitália, órgãos reprodutores ou cromossomos que não se <br></br> encaixam inteiramente na definição típica de masculino ou feminino. <br></br> A maioria destas cirurgias não é de emergência e nem tem motivos <br></br> médicos, pois são crianças saudáveis. Após a cirurgia, estas crianças <br></br> ainda precisam tomar hormônios por toda a vida. Além disso, muitas <br></br> delas ficam com problemas como incontinência urinária, perda de <br></br> sensação e função sexual e trauma psicológico. No Brasil não há <br></br> legislação sobre o assunto. Apenas em Malta e no Chile existem leis <br></br> proibindo intervenção médica em crianças intersexo sem <br></br> emergências clínicas. <br></br> 
          
          <a id="text12">Saiba mais sobre o assunto neste <a target="_blank" href="https://youtu.be/n0UyG6zSNIA">vídeo</a> e nesta <a target="_blank" href="https://tab.uol.com.br/noticias/redacao/2019/07/18/nem-rosa-nem-azul-como-e-ser-pessoa-intersexo-no-brasil.htm">matéria</a>.</a>
          </h2> 

          <h2 id="text6">Qual o seu posicionamento?</h2>  

    <div id="BotaoPautas">
            <Button id="Button1" onClick={() => clickButton('cirugia', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de cirurgia genital em crianças intersexo por motivo estético
            </Button>
            <Button id="Button2" onClick={() => clickButton('cirugia', 'contra')} >
              Sou <p id="ContraBold">CONTRA</p> cirurgia genital em crianças intersexo por motivo estético
            </Button>
    </div>

    <h2 id="text11">Pauta 02 de 24</h2>
          <h2 id="text8">2. Discussão de gênero e sexualidade nas escolas</h2>
          <h2 id="text7">Jovens estão sendo impedidos de estudar e debater sobre gênero e <br></br>sexualidade nas escolas. Municípios e estados em todo país têm <br></br> aprovado leis contra a “ideologia de gênero”, associadas à ideia de <br></br> promover uma “Escola sem partido”. Mas o Supremo Tribunal Federal <br></br> já decidiu, em 2020, que estas leis são contrárias à Constituição, <br></br> porque violam princípios do sistema educacional brasileiro: a <br></br> liberdade de ensinar e o pluralismo de ideias. <br></br>

          <a id="text13">Saiba mais sobre como a “ideologia de gênero” é um projeto político e <br></br> fundamentalista na série de reportagens <a target="_blank" href="http://www.reinodadesinformacao.com.br/explore-mais-graficos/">O Reino Sagrado da Desinformação</a> da <br></br> Gênero e Número.</a>

    </h2>
          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button3" onClick={() => clickButton('genero', 'favor')} >
              Sou a<p id="FavorBold">FAVOR</p> da discussão de gênero e sexualidade nas escolas.
            </Button>
            <Button id="Button4" onClick={() => clickButton('genero', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> a discussão de gênero e sexualidade nas escolas.
            </Button>
    </div>

    <h2 id="text10">Pauta 03 de 24</h2>
          <h2 id="text9">3. Casas públicas de acolhida para LGBT+</h2>
          <h2 id="text15">Jovens LGBT+ são expulsos de casa pela família, o Brasil é o país <br></br> que mais mata LGBT+ no mundo e a saúde mental desta população <br></br> ficou ainda pior durante a pandemia. Praticamente não há políticas <br></br> públicas no Brasil de atendimento à população LGBT+. O movimento <br></br> LGBT+ demanda desde a década de 70 que sejam criadas pelo <br></br> Estado casas de acolhida. Na ausência do Estado, a própria <br></br> sociedade civil já criou 14 casas de acolhida LGBT+ em todas as <br></br> regiões do país, mantidas principalmente com recursos de doações. <br></br> Além de abrigo, costumam oferecer também atendimento de saúde <br></br> clínica, mental e orientações sobre seus direitos. <br></br>

          <a id="text14">Saiba mais sobre o trabalho das casas de acolhida nesta <a target="_blank" href="https://ponte.org/casas-de-acolhida-lgbt-diminuem-atendimentos-mas-mantem-portas-abertas/">reportagem</a> <br></br> e nesta outra <a target="_blank" href="https://cbn.globoradio.globo.com/media/audio/301544/pandemia-afeta-ainda-mais-populacoes-vulneraveis-d.htm">reportagem</a>&nbsp;também.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button5">
              Sou a<p id="FavorBold">FAVOR</p> de casas de acolhida públicas para LGBT+
            </Button>
            <Button id="Button6">
              Sou <p id="ContraBold">CONTRA</p> de casas de acolhida públicas para LGBT+
            </Button>
    </div>



    <h2 id="text2">Gênero</h2>
    <h2 id="text16">Pauta 04 de 24</h2>
          <h2 id="text17">4. Aborto legal e seguro no SUS</h2>
          <h2 id="text18">O aborto é um direito de qualquer pessoa gestante no Brasil, desde <br></br> 1940, quando a sua vida está em risco com a gravidez ou quando ela <br></br> é resultado de um estupro e, desde 2012, também é possível quando <br></br> o feto não tiver um cérebro formado. Nestes casos, não é preciso <br></br> realizar Boletim de Ocorrência, nem ter autorização da justiça. <br></br> Qualquer hospital do SUS que tenha serviço de ginecologia e <br></br> obstetrícia deveria realizar o aborto legal e seguro. Mas este direito <br></br> não está sendo garantido no SUS - dos 126 hospitais de referência no <br></br> país, apenas 42 estão realizando o serviço em 2020.

          <a id="text19">Conheça os <a target="_blank" href="https://azmina.com.br/reportagens/so-55-dos-hospitais-que-faziam-aborto-legal-seguem-atendendo-na-pandemia/" >hospitais que estão atendendo em 2020</a> e o <a target="_blank" href="https://mapaabortolegal.org/">Mapa do <br></br> Aborto Legal</a>, elaborados pela Gênero e Número e Revista AzMina.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button7">
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>
            <Button id="Button8">
              Sou <p id="ContraBold">CONTRA</p> o aborto legal e seguro no SUS
            </Button>
    </div>

    <h2 id="text20">Pauta 05 de 24</h2>
          <h2 id="text21">5. Delegacias da Mulher 24h para mulheres cis e trans</h2>
          <h2 id="text22">O aborto é um direito de qualquer pessoa gestante no Brasil, desde <br></br> 1940, quando a sua vida está em risco com a gravidez ou quando ela <br></br> é resultado de um estupro e, desde 2012, também é possível quando <br></br> o feto não tiver um cérebro formado. Nestes casos, não é preciso <br></br> realizar Boletim de Ocorrência, nem ter autorização da justiça. <br></br> Qualquer hospital do SUS que tenha serviço de ginecologia e <br></br> obstetrícia deveria realizar o aborto legal e seguro. Mas este direito <br></br> não está sendo garantido no SUS - dos 126 hospitais de referência no <br></br> país, apenas 42 estão realizando o serviço em 2020.

          <a id="text23">Conheça os <a target="_blank" href="https://azmina.com.br/reportagens/so-55-dos-hospitais-que-faziam-aborto-legal-seguem-atendendo-na-pandemia/" >hospitais que estão atendendo em 2020</a> e o <a target="_blank" href="https://mapaabortolegal.org/">Mapa do <br></br> Aborto Legal</a>, elaborados pela Gênero e Número e Revista AzMina.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button9">
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>
            <Button id="Button10">
              Sou <p id="ContraBold">CONTRA</p> o aborto legal e seguro no SUS
            </Button>
    </div>

    <h2 id="text24">Pauta 06 de 24</h2>
          <h2 id="text25">6. Trans, travestis e pessoas não-binárias usarem o banheiro que escolherem</h2>
          <h2 id="text26">A população trans, travesti e não-binária é frequentemente impedida <br></br> de usar banheiros de acordo com sua identidade de gênero. Desde <br></br> 2015, o tema está no Supremo Tribunal Federal e dois ministros já <br></br> disseram que são a favor de poderem escolher qual banheiro usar. <br></br> Mas há 5 anos o ministro Fux, atual presidente do STF, interrompeu o <br></br> julgamento dizendo que precisava de tempo para pensar no assunto. <br></br>

          <a id="text27">Saiba mais sobre o assunto neste <a target="_blank" href="https://www.youtube.com/watch?v=nxdNW4ptMQM">vídeo</a> e nesta <a target="_blank" href="https://ponte.org/impedidas-de-usar-o-banheiro-a-realidade-de-pessoas-trans-no-brasil/" >reportagem.</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button11">
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>
            <Button id="Button12">
              Sou <p id="ContraBold">CONTRA</p> o aborto legal e seguro no SUS
            </Button>
    </div>

    <h2 id="text2">Raça</h2>
    <h2 id="text28">Pauta 07 de 24</h2>
          <h2 id="text29">7. Ensino de história e cultura afro-brasileira em todas as escolas</h2>
          <h2 id="text30">Há 17 anos foi aprovada uma lei para o ensino obrigatório, em todas <br></br> as escolas, da história e cultura afro-brasileira (Lei 10.639/03). Mas, <br></br> ainda hoje, não se ensina a luta dos negros e as contribuições do <br></br> povo negro nas áreas social, econômica e política na história do <br></br> Brasil. O povo negro é retratado apenas como escravizado. Falta <br></br> fiscalização da aplicação da lei nas escolas e elaboração de materiais <br></br> didáticos com estes conteúdos.

          <a id="text31">Saiba mais sobre a dificuldade do ensino de história e <br></br> cultura-afrobrasileira nas escolas nesta <a target="_blank" href="https://www.cartacapital.com.br/educacao/quinze-anos-depois-lei-10-639-ainda-esbarra-em-desconhecimento-e-resistencia/" >reportagem.</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button13">
              Sou a<p id="FavorBold">FAVOR</p> do ensino história e cultura afro-brasileira em todas as escolas.
            </Button>
            <Button id="Button14">
              Sou <p id="ContraBold">CONTRA</p> o ensino história e cultura afro-brasileira em todas as escolas.
            </Button>
    </div>


    <h2 id="text32">Pauta 08 de 24</h2>
          <h2 id="text33">8. Cotas para pessoas negras no Legislativo</h2>
          <h2 id="text34">56% da população brasileira é negra, mas candidaturas negras <br></br> recebem apenas 20% dos recursos públicos para fazerem suas <br></br> campanhas e menos de 30% dos deputados estaduais e federais <br></br> eleitos são negros. Não há democracia se não houver representação <br></br> de negros e quilombolas, também na política. Os movimentos negros <br></br> no Brasil sempre reivindicaram cotas raciais como uma medida de <br></br> reparação histórica. Desde 2011, o deputado Federal Luis Alberto <br></br> propôs um projeto para que houvesse cotas para políticos negros <br></br> como vereadores, deputados estaduais e deputados federais (PEC <br></br> 116/2011). Este projeto chegou a ser aprovado em uma etapa <br></br> importante na Câmara dos Deputados, mas já está há 5 anos <br></br> arquivado. Em 2020, o Tribunal Superior Eleitoral o Supremo Tribunal <br></br> Federal discutiram que as candidaturas negras devem receber <br></br> proporcionalmente recursos para campanha e tempo de tv e rádio nas <br></br> eleições. Esta vitória reacende o debate sobre a urgência da <br></br> representatividade das populações negras para que haja democracia <br></br> no Brasil.

          <a id="text35">Saiba mais sobre cotas raciais na política nesta <a target="_blank" href="https://oglobo.globo.com/sociedade/saude/politica-de-saude-para-populacao-negra-so-existe-em-57-municipios-12-anos-apos-ser-criada-23364705">reportagem</a> e sobre o <br></br> financiamento público e tempo de TV para candidaturas negras na <br></br> plataforma <a target="_blank" href="https://www.paneantirracista.org/partidos" >PANE Antirracista</a> do Instituto Marielle Franco.</a>
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button15">
              Sou a<p id="FavorBold">FAVOR</p> de cotas para pessoas negras no Legislativo.
            </Button>
            <Button id="Button16">
              Sou <p id="ContraBold">CONTRA</p> cotas para pessoas negras no Legislativo.
            </Button>
    </div>


    <div id="divBetween">
        <a id="voltarFormu" href="/cadastro/candidato-dados">...Voltar para Formulário</a>
        <Button id="botaoCont" onClick={continuarClick}>Continuar</Button>
    </div>

</div>

</Box>
 
);

export default CadastroPautas
