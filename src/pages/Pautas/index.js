import React from "react"
import "./styles.css"
import { useHistory } from 'react-router-dom'
import {
  Box,
  Button,
  Heading,
  Flex,
  Text
} from '@chakra-ui/core'


export default function CadastroPautas(){

const formData = localStorage.getItem('@merepresenta/form');

const convertedForm = JSON.parse(formData);

const pautasData = {...convertedForm};

localStorage.setItem('@merepresenta/pautas', JSON.stringify(pautasData));

const history = useHistory();

const clickButton = (e, pauta, resposta) =>{
    pautasData[pauta] = resposta;

    e.target.style.backgroundColor = 'khaki';

    // console.log(e.target.id);

    const id = e.target.id;

    const [,number] = id.split("Button");

    if(number % 5 !== 0){ //impar
        const otherButton = document.getElementById(`Button${Number(number)+1}`);
        otherButton.style.backgroundColor = '#F9F9F9';
    }else{
        const otherButton = document.getElementById(`Button${Number(number)-1}`);
        otherButton.style.backgroundColor = '#F9F9F9';
    }

    console.log(number);
}

const continuarClick = () =>{
        localStorage.setItem('@merepresenta/pautas', JSON.stringify(pautasData));
        history.push({pathname: '/cadastro/candidato-temas',})
}

return(

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
            <Button id="Button1" onClick={(e) => clickButton(e,'lgbt', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de cirurgia genital em crianças intersexo por motivo estético
            </Button>
            <Button id="Button2" onClick={(e) => clickButton(e,'lgbt', 'contra')}>
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
            <Button id="Button3" onClick={(e) => clickButton(e,'lgbt', 'favor')}>   
              Sou a<p id="FavorBold">FAVOR</p> da discussão de gênero e sexualidade nas escolas.
            </Button>
            <Button id="Button4" onClick={(e) => clickButton(e,'lgbt', 'contra')}>
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
            <Button id="Button5" onClick={(e) => clickButton(e,'lgbt', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de casas de acolhida públicas para LGBT+
            </Button>
            <Button id="Button6" onClick={(e) => clickButton(e,'lgbt', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> de casas de acolhida públicas para LGBT+
            </Button>
    </div>


    <h2 id="text2">#Gênero</h2>
    <h2 id="text16">Pauta 04 de 24</h2>
          <h2 id="text17">4. Aborto legal e seguro no SUS</h2>
          <h2 id="text18">O aborto é um direito de qualquer pessoa gestante no Brasil, desde <br></br> 1940, quando a sua vida está em risco com a gravidez ou quando ela <br></br> é resultado de um estupro e, desde 2012, também é possível quando <br></br> o feto não tiver um cérebro formado. Nestes casos, não é preciso <br></br> realizar Boletim de Ocorrência, nem ter autorização da justiça. <br></br> Qualquer hospital do SUS que tenha serviço de ginecologia e <br></br> obstetrícia deveria realizar o aborto legal e seguro. Mas este direito <br></br> não está sendo garantido no SUS - dos 126 hospitais de referência no <br></br> país, apenas 42 estão realizando o serviço em 2020.

          <a id="text19">Conheça os <a target="_blank" href="https://azmina.com.br/reportagens/so-55-dos-hospitais-que-faziam-aborto-legal-seguem-atendendo-na-pandemia/" >hospitais que estão atendendo em 2020</a> e o <a target="_blank" href="https://mapaabortolegal.org/">Mapa do <br></br> Aborto Legal</a>, elaborados pela Gênero e Número e Revista AzMina.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button7" onClick={(e) => clickButton(e,'genero', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>

            <Button id="Button8" onClick={(e) => clickButton(e,'genero', 'contra')}>
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
            <Button id="Button9" onClick={(e) => clickButton(e,'genero', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>
            <Button id="Button10" onClick={(e) => clickButton(e,'genero', 'contra')}>
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
            <Button id="Button11" onClick={(e) => clickButton(e,'genero', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do aborto legal e seguro no SUS
            </Button>
            <Button id="Button12" onClick={(e) => clickButton(e,'genero', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> o aborto legal e seguro no SUS
            </Button>
    </div>

    <h2 id="text102">#Raça</h2>
    <h2 id="text28">Pauta 07 de 24</h2>
          <h2 id="text29">7. Ensino de história e cultura afro-brasileira em todas as escolas</h2>
          <h2 id="text30">Há 17 anos foi aprovada uma lei para o ensino obrigatório, em todas <br></br> as escolas, da história e cultura afro-brasileira (Lei 10.639/03). Mas, <br></br> ainda hoje, não se ensina a luta dos negros e as contribuições do <br></br> povo negro nas áreas social, econômica e política na história do <br></br> Brasil. O povo negro é retratado apenas como escravizado. Falta <br></br> fiscalização da aplicação da lei nas escolas e elaboração de materiais <br></br> didáticos com estes conteúdos.

          <a id="text31">Saiba mais sobre a dificuldade do ensino de história e <br></br> cultura-afrobrasileira nas escolas nesta <a target="_blank" href="https://www.cartacapital.com.br/educacao/quinze-anos-depois-lei-10-639-ainda-esbarra-em-desconhecimento-e-resistencia/" >reportagem.</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button13" onClick={(e) => clickButton(e,'raca', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do ensino história e cultura afro-brasileira em todas as escolas.
            </Button>
            <Button id="Button14" onClick={(e) => clickButton(e,'raca', 'contra')}>
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
            <Button id="Button15" onClick={(e) => clickButton(e,'raca', 'favor')}>   
              Sou a<p id="FavorBold">FAVOR</p> de cotas para pessoas negras no Legislativo.
            </Button>
            <Button id="Button16" onClick={(e) => clickButton(e,'raca', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> cotas para pessoas negras no Legislativo.
            </Button>
    </div>

    <h2 id="text36">Pauta 09 de 24</h2>
          <h2 id="text37">9. Política de saúde para a população negra</h2>
          <h2 id="text38">O Brasil tem mais de 5.500 municípios, mas apenas 57 colocam em <br></br>prática a Política Nacional de Saúde Integral da População Negra, <br></br> criada em 2006. Há doenças que afetam mais a população negra <br></br> (exemplo: pressão alta, anemia falciforme, diabetes, glaucoma) e <br></br> também há práticas racistas no atendimento de saúde (exemplo: <br></br> mulheres negras recebem menos anestesia nos partos do que <br></br> mulheres brancas). Por isso, é fundamental que exista no SUS <br></br> políticas de atendimento específicas para a população negra. Em <br></br> 2019, o SUS perdeu 20 bilhões de reais de seu orçamento e isso <br></br> também afeta diretamente a população negra, pois são 67% dos <br></br> usuários do SUS.

          <a id="text39">Saiba mais sobre a falta de implementação da política de saúde para <br></br> a população negra nesta <a target="_blank" href="https://oglobo.globo.com/sociedade/saude/politica-de-saude-para-populacao-negra-so-existe-em-57-municipios-12-anos-apos-ser-criada-23364705" >reportagem</a> e sobre o impacto disso na <br></br> pandemia neste evento da <a target="_blank" href="https://brasil.un.org/pt-br/90260-especialistas-pedem-implementacao-da-politica-nacional-de-saude-integral-da-populacao-negra" >ONU Mulheres.</a></a>

          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button17"onClick={(e) => clickButton(e,'raca', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> da política de saúde para a população negra
            </Button>
            <Button id="Button18"onClick={(e) => clickButton(e,'raca', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> a política de saúde para a população negra
            </Button>
    </div>

    <h2 id="text40">]#Povos Tradicionais</h2>
    <h2 id="text41">Pauta 10 de 24</h2>
          <h2 id="text42">10.Políticas emergenciais de combate à pandemia nas <br></br> comunidades quilombolas</h2>
          <h2 id="text43">No Brasil, há 16 milhões de quilombolas, distribuídos em 6.300 <br></br>comunidades remanescentes de territórios em que houve resistência <br></br> negra à escravização. A Constituição de 1988 garantiu o direito dos <br></br> quilombolas à propriedade de suas terras, mas, até hoje, apenas <br></br> 5,34% dos territórios quilombolas conseguiu. O atual presidente <br></br> afirmou em campanha que não investiria nenhum centavo em <br></br> indígenas e quilombolas e derrubou uma série de medidas destinadas <br></br> à saúde de povos indígenas, quilombolas e demais comunidades <br></br> tradicionais durante a pandemia, que havia sido aprovada pelo <br></br> Congresso Nacional. A população quilombola tem morrido 120% mais <br></br> de COVID-19 do que a média da população brasileira. Por isso, a <br></br> Coordenação Nacional de Articulação das Comunidades Negras <br></br> Rurais Quilombolas – CONAQ recorreu ao Supremo Tribunal Federal <br></br> para que o Estado brasileiro tome ações emergenciais de combate à <br></br> pandemia nas comunidades quilombolas (ADPF 742/2020).

          <a id="text44">Saiba mais sobre a urgência de políticas de combate à pandemia nas <br></br>comunidades quilombolas nesta <a target="_blank" href="https://diplomatique.org.br/supremo-deve-decidir-sobre-protecao-de-comunidades-quilombolas/" >reportagem</a> e no vídeo da campanha <br></br> <a target="_blank" href="https://www.instagram.com/tv/CFe2T9PHOn9/" >Vidas Quilombolas Importam</a> da CONAQ. </a>
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button19"onClick={(e) => clickButton(e,'povostradicionais', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de políticas emergenciais de combate à pandemianas comunidades quilombolas
            </Button>
            <Button id="Button20"onClick={(e) => clickButton(e,'povostradicionais', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> políticas emergenciais de combate à pandemia nas comunidades quilombolas
            </Button>
    </div>


    <h2 id="text45">Pauta 11 de 24</h2>
          <h2 id="text46">11. Sacrifício de animais no contexto religioso</h2>
          <h2 id="text47">
          <h2 id="text48" >Em 2019, o Supremo Tribunal Federal decidiu que o sacrifício de <br>
          </br>animais praticado por povos de terreiros, judeus e muçulmanos está <br></br> de acordo com a Constituição e pode ser praticado (RE 494.601).<br></br>
          </h2>
          
          <a id="text49">A permissão de se realizar o sacrifício ritual em contexto religioso <br></br> combate o <a target="_blank" href="https://www.youtube.com/watch?v=qTSD4MnkSRs">racismo dirigido às religiões de matriz africana</a>, principais <br></br> alvos de ataques e intolerância pela prática, além de promover a <br></br> defesa do Estado laico.</a>

          <a id="text50">Saiba mais sobre a urgência de políticas de combate à pandemia nas <br></br>comunidades quilombolas nesta <a target="_blank" href="https://diplomatique.org.br/supremo-deve-decidir-sobre-protecao-de-comunidades-quilombolas/" >reportagem</a> e no vídeo da campanha <br></br> <a target="_blank" href="https://www.instagram.com/tv/CFe2T9PHOn9/" >Vidas Quilombolas Importam</a> da CONAQ. </a>

          </h2>
          

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button21"onClick={(e) => clickButton(e,'povostradicionais', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do sacrifício de animais no contexto religioso.
            </Button>
            <Button id="Button22"onClick={(e) => clickButton(e,'povostradicionais', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> o sacrifício de animais no contexto religioso.
            </Button>
    </div>


    <h2 id="text51">Pauta 12 de 24</h2>
          <h2 id="text52">12. Demarcação de terras indígenas</h2>
          <h2 id="text53">Os povos indígenas têm direito ao reconhecimento da demarcação <br></br> das suas terras desde a Constituição de 1988. As demarcações são <br></br> importantes não apenas porque garantem a diversidade étnica e <br></br> cultural dos povos indígenas, mas também por serem os territórios <br></br> onde há maior conservação ambiental. Uma série de políticas <br></br> públicas e recursos para indígenas são melhor garantidos nas terras <br></br> indígenas demarcadas, como escolas para educação especial <br></br> indígena, postos de saúde, água tratada. Desde 2016, nenhuma terra <br></br> indígena foi demarcada no Brasil. Comunidades indígenas sem terras <br></br> demarcadas estão sofrendo maior impacto com a pandemia. O atual <br></br> presidente derrubou uma série de medidas destinadas à saúde de <br></br> povos indígenas, quilombolas e demais comunidades tradicionais <br></br> durante a pandemia, que havia sido aprovada pelo Congresso <br></br> Nacional. A taxa de mortalidade indígena por COVID-19 é 224% mais <br></br> alta do que a média da população brasileira.

          <a id="text54">Saiba mais sobre o impacto da não demarcação de terras sobre os <br></br> indígenas na pandemia nesta <a target="_blank" href="https://www.causaoperaria.org.br/a-nao-demarcacao-das-terras-indigenas-e-um-genocidio/">reportagem</a> e dados sobre a pandemia <br></br> na plataforma <a target="_blank" href="http://emergenciaindigena.apib.info/">Emergência Indígena</a> da Articulação dos Povos <br></br> Indígenas do Brasil - APIB.</a>
          </h2>


          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button23"onClick={(e) => clickButton(e,'povostradicionais', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> da demarcação de terras indígenas
            </Button>
            <Button id="Button24"onClick={(e) => clickButton(e,'povostradicionais', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> a demarcação de terras indígenas
            </Button>
    </div>


    <h2 id="text55">#Políticas Sociais</h2>
    <h2 id="text56">Pauta 13 de 24</h2>
          <h2 id="text57">13. Renda básica permanente mantendo os programas <br></br> sociais existentes</h2>
          <h2 id="text58">Com a pandemia, após muita pressão da sociedade e da oposição ao <br></br>governo, foi aprovado o auxílio emergencial no valor de 600 reais, <br></br> que alcançou mais de 53 milhões de brasileiros. Com a popularidade <br></br> que a medida trouxe ao governo, este passou a defender a ideia de <br></br> uma renda básica permanente. Esta é uma ideia antiga que pode <br></br> garantir que famílias mais vulneráveis possam ter acesso a direitos <br></br> básicos e melhorar os índices de pobreza no Brasil, reduzindo <br></br> desigualdades sociais, econômicas, tributárias e os impactos da <br></br> instabilidade do mercado de trabalho. Mas a proposta do governo de <br></br> implementar a renda básica permanente quer eliminar ou reduzir <br></br> ainda mais a verba de outros programas sociais como o SUS, <br></br> educação pública gratuita e agricultura familiar.

          <a id="text59">Saiba mais com a campanha <a target="_blank" href="https://www.rendabasica.org.br/" >Renda Básica que Queremos!</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button25"onClick={(e) => clickButton(e,'politicassociais', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> da renda básica permanente mantendo os programas sociais existentes
            </Button>
            <Button id="Button26"onClick={(e) => clickButton(e,'politicassociais', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> da renda básica permanente mantendo os programas sociais existentes
            </Button>
    </div>

    <h2 id="text60">Pauta 14 de 24</h2>
          <h2 id="text61">14. Teto de gastos públicos</h2>
          <h2 id="text62">Em 2016, foi aprovada uma política econômica conhecida por “teto de <br></br> gastos públicos”, que nos próximos 20 anos pode reduzir cerca de 1/3 <br></br> dos gastos públicos federais, voltando a níveis de recursos anteriores <br></br> à Constituição de 1988. Isso levaria ao congelamento de gastos <br></br> sociais com políticas para a saúde, educação e seguro desemprego. <br></br> Já estamos sentindo os impactos do “teto dos gastos públicos”, com a <br></br> redução de 20 bilhões de reais para o SUS, em plena pandemia.

          <a id="text63">Saiba mais a respeito com a campanha <a target="_blank " href="http://direitosvalemmais.org.br">#AcabaTetodeGastos</a> e com <br></br> esta <a target="_blank" href="https://www.nexojornal.com.br/ensaio/2020/Criatividade-cont%C3%A1bil-ou-interpretativa-n%C3%A3o-salvar%C3%A1-o-teto-de-gastos" >matéria.</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button27"onClick={(e) => clickButton(e,'politicassociais', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> ddo teto dos gastos públicos
            </Button>
            <Button id="Button28"onClick={(e) => clickButton(e,'politicassociais', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> do teto dos gastos públicos
            </Button>
    </div>


    <h2 id="text64">#Segurança Pública</h2>
    <h2 id="text65">Pauta 15 de 24</h2>
          <h2 id="text66">15. Guardas Civis Municipais andarem armadas</h2>
          <h2 id="text67">A atuação da Guardas Civis Municipais de várias cidades tem se <br></br> tornado cada vez mais parecida (e até mesmo realizada em conjunto) <br></br> com a Polícia Militar. Enquanto o papel da Polícia Militar é o <br></br> de garantir a segurança pública, o das Guardas Civis era apenas o de <br></br> proteger o patrimônio público da cidade e cada município pode <br></br> escolher ter uma Guarda ou não. Mas em 2014, uma lei aumentou o <br></br> papel das Guardas, prevendo o patrulhamento preventivo e o uso <br></br> progressivo da força (Lei 13.022/2014). A partir daí, muitas Guardas <br></br> passaram a atuar de modo muito semelhante à Polícia Militar: <br></br> trabalhando armadas, realizando patrulhamento ostensivo, <br></br> abordagens seletivas, apreensões e prisões. Isso é um problema, <br></br> porque a Polícia Militar é a que mais mata jovens negros e periféricos. <br></br> Só durante a pandemia as mortes por policiais aumentaram 31%.

          <a id="text68">Saiba mais sobre o problema da ampliação do papel da Guarda <br></br> Municipal nesta <a target="_blank" href="http://www.justificando.com/2020/09/17/o-estado-policial-e-a-guarda-municipal/">matéria</a></a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button29"onClick={(e) => clickButton(e,'segurancapublica', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> das Guardas Civis Municipais andarem armadas
            </Button>
            <Button id="Button30"onClick={(e) => clickButton(e,'segurancapublica', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> as Guardas Civis Municipais andarem armadas
            </Button>
    </div>


    <h2 id="text65">Pauta 16 de 24</h2>
          <h2 id="text69">16. Política de emprego para pessoas que saem da prisão</h2>
          <h2 id="text70">As pessoas que saem da prisão muitas vezes não conseguem <br></br> empregos por conta do preconceito, mesmo quando já cumpriram <br></br> toda a sua pena há muito tempo. Oferecer uma política de acesso ao <br></br> mercado de trabalho para estas pessoas é importante para que <br></br> consigam romper com um ciclo de violência e desigualdade no qual <br></br> estão inseridas, na maioria das vezes. O Brasil tem mais de 700 mil <br></br> presos e só 19% deles consegue trabalhar e 13% estudar dentro das <br></br> prisões. Isso também contribui para que saiam das prisões sem <br></br> condições mínimas para o mercado de trabalho. O município pode <br></br> promover vagas para pessoas com este perfil ou ao menos reduzir as <br></br> limitações de acesso ao trabalho. Na cidade de de São Paulo, por <br></br> exemplo, uma lei impede que pessoas condenadas criminalmente, <br></br> não importa há quanto tempo, possam ser taxistas (Lei 7.329/69). <br></br> Isso acaba sendo uma pena de perpétua e desproporcional, que só <br></br> reforça a discriminação.

          <a id="text71">Saiba como as cidades podem contribuir com outras políticas para <br></br> quem sai da prisão, além do emprego, na <a target="_blank" href="http://ittc.org.br/wp-content/uploads/2017/02/Agenda-Municipal-online.pdf" >Agenda Municipal para <br></br> Justiça Criminal</a> do Instituto Terra, Trabalho e Cidadania - ITTC.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button31"onClick={(e) => clickButton(e,'segurancapublica', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de política de emprego para pessoas que saem da  prisão
            </Button>
            <Button id="Button32"onClick={(e) => clickButton(e,'segurancapublica', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> política de emprego para pessoas que saem da  prisão
            </Button>
    </div>


    <h2 id="text2">#Drogas</h2>
    <h2 id="text65">Pauta 17 de 24</h2>
          <h2 id="text73">17. Descriminalizar o comércio de drogas para reduzir a <br></br> quantidade de mulheres e jovens negros presos</h2>
          <h2 id="text74">O Brasil tem a terceira maior população carcerária do mundo, com <br></br> mais de 700 mil pessoas presas. As cadeias estão superlotadas, <br></br> trabalhando em média 70% acima da sua capacidade. E um dos <br></br> motivos é a política de “guerra às drogas”. Em 2006, aprovamos a Lei <br></br> de Drogas, uma das principais responsáveis pelo aumento do número <br></br> de presos no país (Lei 11.343/2016). Hoje não é crime ser usuário de <br></br> drogas, mas crime comercializar drogas. O problema é que a lei não <br></br> traz critérios para diferenciar um do outro. Ou seja, é mais provável <br></br> que um usuário, negro, pobre e periférico seja preso por tráfico do <br></br> que tratado como alguém que precisa de atendimento na saúde <br></br> pública. Drogas é a segunda maior causa de prisão dos homens e é a <br></br> maior causa de prisão de mulheres (metade delas está presa por <br></br> comércio de drogas). Pessoas negras são 56% da população <br></br> brasileira, mas são 70% da população  das prisões. Jovens, de 18 a <br></br> 29 anos, são 18% da população brasileira, mas 44% dos presos. <br></br> Além do encarceramento, a “guerra às drogas” também provoca <br></br> maior violência policial, mortes por homicídio e afasta os usuários de <br></br> drogas de buscar atendimento na saúde pública.  

          <a id="text75">Saiba mais sobre com a <a target="_blank" href="https://desencarceramento.org.br/" >Agenda Nacional pelo Desencarceramento</a>, <br></br> com o <a target="_blank" href="https://www.youtube.com/watch?v=LMX3eESrH9g" >vídeo</a> e <a target="_blank" href=" http://ittc.org.br/pgd-jogo/" >jogo</a> Política de Drogas é uma questão de Mulheres do <br></br> Instituto Terra, Trabalho e Cidadania - ITTC.</a>
          
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button33"onClick={(e) => clickButton(e,'drogas', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de descriminalizar o comércio de drogas para reduzir a quantidade de mulheres e jovens negros presos
            </Button>
            <Button id="Button34"onClick={(e) => clickButton(e,'drogas', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> descriminalizar o comércio de drogas para reduzir a quantidade de mulheres e jovens negros presos
            </Button>
    </div>



    <h2 id="text65">Pauta 18 de 24</h2>
          <h2 id="text76">18. Tratamento de usuário de drogas no SUS com redução de danos</h2>
          <h2 id="text77">Usuários de drogas devem poder ser tratados no SUS. Mas vários <br></br>governos municipais, estaduais e o atual governo federal têm retirado <br></br> verbas da saúde pública e destinado para entidades religiosas. As <br></br> formas de tratamento do usuário de drogas no SUS e nas entidades <br></br> religiosas são totalmente diferentes. O SUS adota políticas que <br></br> respeitam o momento de cada usuário no seu tratamento. Isso <br></br> significa que para as pessoas que ainda não podem ou não querem <br></br> parar de usar drogas, o objetivo maior é a reduzir os danos causados <br></br> pelo uso. Por exemplo, os usuários podem receber seringas <br></br> descartáveis, para não serem contaminados por doenças <br></br> sexualmente transmissíveis, ou podem ser orientados a trocar uma <br></br> droga por outra de menor risco. Já as entidades religiosas, <br></br>  normalmente conhecidas como “Comunidades Terapêuticas” <br></br> promovem a intervenção do usuário e o método da abstinência total <br></br> do uso de drogas. Isso reforça a ideia de que usuários de drogas <br></br> devem ser excluídos da sociedade, de que são criminosos, ou uma <br></br> abordagem moral e religiosa e não de saúde pública.  

          <a id="text78">Saiba mais sobre políticas de redução de danos aqui e sobre <br></br> comunidades terapêuticas aqui.</a>
          
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button35"onClick={(e) => clickButton(e,'drogas', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do tratamento de usuário de drogas no SUS com redução de danos
            </Button>
            <Button id="Button36"onClick={(e) => clickButton(e,'drogas', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> o tratamento de usuário de drogas no SUS com redução de danos
            </Button>
    </div>


    
    <h2 id="text79">#Comunicação</h2>
    <h2 id="text80">Pauta 19 de 24</h2>
          <h2 id="text81">19. Acesso gratuito à internet nas periferias, comunidades <br></br> indígenas e quilombolas</h2>
          <h2 id="text82">Na média nacional, 28% dos domicílios brasileiros ainda não tem <br></br>acesso à internet. Na área rural, esse número sobre para 48%. <br></br> Enquanto 99% dos domicílios da classe A estão conectados, nas <br></br> classes D e E, 50% dos domicílios não possuem conexão. O Marco <br></br> Civil da Internet reconhece que o acesso à internet é essencial para o <br></br> exercício da cidadania (Lei n° 12.965/2014), mas a exclusão digital <br></br> afeta muito mais a população pobre, periférica, quilombola e <br></br> indígenas. Apenas 48% da população indígena e 55% das pessoas <br></br> negras já utilizou um computador pelo menos uma vez na vida.   

          <a id="text83">Saiba mais sobre a desigualdade no acesso à internet no vídeo da <br></br>campanha <a target="_blank" href="https://www.youtube.com/watch?v=J8ePyTWzCO0" >Internet Direito Seu</a> do Intervozes.</a>
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button37"onClick={(e) => clickButton(e,'comunicacao', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do acesso gratuito à internet nas periferias, comunidades indígenas e quilombolas
            </Button>
            <Button id="Button38"onClick={(e) => clickButton(e,'comunicacao', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> o acesso gratuito à internet nas periferias, comunidades indígenas e quilombolas
            </Button>
    </div>

    <h2 id="text84">Pauta 20 de 24</h2>
          <h2 id="text85">20. Políticos serem donos de emissoras de rádio e TV</h2>
          <h2 id="text86">Nas últimas eleições, 34 candidatos a deputado estadual, federal, <br></br>senador e governador eram donos de emissoras de rádio e TV e 26 <br></br> foram eleitos. Isso é um problema, porque eles podem influenciar o <br></br> que a mídia fala sobre eles e seus adversários políticos, seja durante <br></br> a campanha, seja quando eleitos. No caso de deputados federais e <br></br> senadores eleitos é ainda mais grave. A Constituição não permite que <br></br> eles tenham contratos com o Estado e as emissoras de rádio e TV <br></br> são concessões públicas, um tipo de contrato. Além disso, são os <br></br> deputados e senadores que fiscalizam e decidem quem pode ter uma <br></br> emissora de rádio e TV. Ou seja, decidem sobre eles mesmos. Duas <br></br> ações pedem uma manifestação do Supremo Tribunal Federal sobre <br></br> o assunto, mas nem começaram a ser julgadas (ADPF <br></br> 246 e ADPF 379).    

          <a id="text87">Saiba mais sobre quem eram os políticos donos de rádio e TV que <br></br> foram <a target="_blank" href="http://intervozes.org.br/politicos-donos-da-midia-levantamento-do-intervozes-em-10-estados-denuncia-pratica-ilegal-de-candidatos-que-sao-proprietarios-de-canais-de-radio-e-tv/">candidatos</a> nas últimas eleições e quem foram os deputados <br></br> federais e senadores <a target="_blank" href="https://congressoemfoco.uol.com.br/opiniao/colunas/donos-de-radio-e-tv-formarao-bancada-de-pelo-menos-26-parlamentares-no-novo-congresso/" >eleitos</a> nos levantamentos do Intervozes.</a>
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button39"onClick={(e) => clickButton(e,'comunicacao', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de políticos serem donos de emissoras de rádio e TV
            </Button>
            <Button id="Button40"onClick={(e) => clickButton(e,'comunicacao', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> políticos serem donos de emissoras de rádio e TV
            </Button>
    </div>

    <h2 id="text88">#Democracia</h2>
    <h2 id="text89">Pauta 21 de 24</h2>
          <h2 id="text90">21. Cota de gênero e raça nas lideranças dos partidos</h2>
          <h2 id="text91">Os partidos políticos e sua liberdade são fundamentais à democracia.<br></br> Durante a ditadura, só podiam existir dois partidos e vários políticos <br></br>tiveram os seus mandatos cassados. Mas os partidos brasileiros <br></br> ainda são marcados pela ausência de democracia interna. As <br></br> lideranças dos partidos, por exemplo, são principalmente compostas <br></br> por homens brancos, heterossexuais, cisgêneros e ricos e não <br></br> costuma haver mecanismos internos democráticos para a sua <br></br> escolha. Mulheres ocupam apenas 25% das lideranças partidárias. A <br></br> falta de representatividade nos cargos de direção dos partidos acaba <br></br> impactando na distribuição dos recursos públicos para as campanhas, <br></br> pois são estas lideranças que definem quanto cada candidatura deve <br></br>  receber. Mulheres negras, por exemplo, são 28% da população <br></br> brasileira, 12,9% das candidatas a deputado federal, mas receberam <br></br> apenas 5,7% dos recursos públicos de campanha e foram apenas <br></br>  2,5% dos eleitos. Também é importante que os partidos invistam em <br></br> espaços de articulação política de grupos minorizados dentro dos <br></br> partidos, como os setoriais de mulheres, pessoas negras e LGBT+. <br></br> Enquanto 76% dos partidos têm setoriais de mulheres, apenas 42% <br></br> tem setoriais negras e 33% de LGBT+.  

          <a id="text92">Para saber mais sobre a presença de setoriais de mulheres, pessoas <br></br> negras e LGBT+ em cada partido, ver pesquisa da Casa 1 <br></br> e #VoteLGBT.</a>
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button41"onClick={(e) => clickButton(e,'democracia', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de cota de gênero e raça nas lideranças dos partidos políticos serem donos de emissoras de rádio e TV
            </Button>
            <Button id="Button42"onClick={(e) => clickButton(e,'democracia', 'contra')}>
                Sou <p id="ContraBold">CONTRA</p>cota de gênero e raça nas lideranças dos partidos políticos serem donos de emissoras de rádio e TV
            </Button>
    </div>

    <h2 id="text84">Pauta 22 de 24</h2>
          <h2 id="text93">22. Consentimento dos povos indígenas para a realização de <br></br>empreendimentos</h2>
          <h2 id="text94">Uma série de empreendimentos (como construções de barragens, <br></br> rodovias, mineração) tem sido realizada em territórios indígenas sem <br></br> que haja consulta e consentimento prévio dos povos indígenas. <br></br> Consultas prévias, com o objetivo de alcançar um acordo ou <br></br> consentimento, são um direito dos povos indígenas (Convenção 169 <br></br> da Organização Internacional do Trabalho). O Estado ou as empresas <br></br> acabam fazendo pequenas reuniões, sem envolver um grupo <br></br> representativo dos povos indígenas afetados, apenas para cumprirem <br></br> esta etapa formal e já poderem, paralelamente, emitir autorizações <br></br> para o início das obras. O processo de consulta e consentimento <br></br> adequado deveria ser elaborado e proposto pelos próprios povos <br></br> indígenas, em respeito a sua autodeterminação. O desrespeito a esse <br></br> direito provoca impactos não só na comunidade indígena, nos seus <br></br> saberes tradicionais e relação ancestral com a terra, mas também ao <br></br> meio ambiente. Os povos indígenas são protetores das florestas. As <br></br> terras indígenas demarcadas possuem preservação ambiental maior <br></br> até do que a de parques ambientais estaduais e nacionais.    

          <a id="text95">Conheça um <a target="_blank" href="https://reporterbrasil.org.br/wp-content/uploads/2016/07/Protocolo-de-consulta-Munduruku.pdf">exemplo</a> de protocolo de consulta prévia e <br></br> consentimento elaborado pelo povo indígena Mundukuru.</a>  
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button43"onClick={(e) => clickButton(e,'democracia', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do consentimento dos povos indígenas para a realização de empreendimentos.
            </Button>
            <Button id="Button44"onClick={(e) => clickButton(e,'democracia', 'contra')}>
              Sou <p id="ContraBold">CONTRA</p> o consentimento dos povos indígenas para a realização de empreendimentos.
            </Button>
    </div>

    <h2 id="text103">#Meio Ambiente</h2>
    <h2 id="text89">Pauta 23 de 24</h2>
          <h2 id="text96">23. Cota de gênero e raça nas lideranças dos partidos</h2>
          <h2 id="text97">Os partidos políticos e sua liberdade são fundamentais à democracia.<br></br> Durante a ditadura, só podiam existir dois partidos e vários políticos <br></br>tiveram os seus mandatos cassados. Mas os partidos brasileiros <br></br> ainda são marcados pela ausência de democracia interna. As <br></br> lideranças dos partidos, por exemplo, são principalmente compostas <br></br> por homens brancos, heterossexuais, cisgêneros e ricos e não <br></br> costuma haver mecanismos internos democráticos para a sua <br></br> escolha. Mulheres ocupam apenas 25% das lideranças partidárias. A <br></br> falta de representatividade nos cargos de direção dos partidos acaba <br></br> impactando na distribuição dos recursos públicos para as campanhas, <br></br> pois são estas lideranças que definem quanto cada candidatura deve <br></br>  receber. Mulheres negras, por exemplo, são 28% da população <br></br> brasileira, 12,9% das candidatas a deputado federal, mas receberam <br></br> apenas 5,7% dos recursos públicos de campanha e foram apenas <br></br>  2,5% dos eleitos. Também é importante que os partidos invistam em <br></br> espaços de articulação política de grupos minorizados dentro dos <br></br> partidos, como os setoriais de mulheres, pessoas negras e LGBT+. <br></br> Enquanto 76% dos partidos têm setoriais de mulheres, apenas 42% <br></br> tem setoriais negras e 33% de LGBT+.  

          <a id="text98">Para saber mais sobre a presença de setoriais de mulheres, pessoas <br></br> negras e LGBT+ em cada partido, ver pesquisa da Casa 1 <br></br> e #VoteLGBT.</a>
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button45"onClick={(e) => clickButton(e,'meioambiente', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> de cota de gênero e raça nas lideranças dos partidos políticos serem donos de emissoras de rádio e TV
            </Button>
            <Button id="Button46"onClick={(e) => clickButton(e,'meioambiente', 'contra')}>
                Sou <p id="ContraBold">CONTRA</p>cota de gênero e raça nas lideranças dos partidos políticos serem donos de emissoras de rádio e TV
            </Button>
    </div>


    <h2 id="text89">Pauta 24 de 24</h2>
          <h2 id="text99">24. Afastamento do ministro do meio ambiente</h2>
          <h2 id="text100">O Senado Federal criou uma Comissão Parlamentar de Inquérito <br></br> (CPI) da Crise Ambiental com o objetivo de investigar o "desmonte da <br></br> governança ambiental" no governo federal, além das queimadas na <br></br> Amazônia e no Pantanal. Em discurso na ONU, o presidente culpou <br></br> indígenas pelos incêndios nestes territórios. Desde o início desta <br></br> presidência, uma série de medidas foi adotada para impedir a <br></br> fiscalização ambiental, que impede atividades ilegais, como <br></br> desmatamento, mineração e queimadas ilegais. Técnicos de <br></br> fiscalização foram trocados de cargo, foram impedidos de destruir <br></br> equipamentos utilizados para as atividades ilegais e receberam <br></br> repreensões de seus superiores por continuarem com o seu trabalho.  <br></br>Em 2018, primeiro ano de governo, houve uma redução de 35% das <br></br> multas aplicadas por crimes ambientais na Amazônia. Em 2019, a <br></br> redução foi ainda maior, de  40% - atingindo o menor número de<br></br> multas aplicadas em toda a década. Justamente nos territórios com <br></br> menos multas, houve aumento de desmatamento. Vários pedidos por <br></br> parlamentares e promotores estão sendo feitos para que a justiça <br></br> afaste o ministro do meio ambiente do seu cargo, sob o risco de <br></br> danos ainda maiores ao meio ambiente.  

          <a id="text101">Para saber mais sobre a relação entre redução de multas e aumento <br></br> do desmatamento, ver esta reportagem, e sobre a relação entre <br></br> desmatamento e queimada, ver esta reportagem.</a>
         
          </h2>

          <h2 id="text6">Qual o seu posicionamento?</h2>    
    <div id="BotaoPautas">
            <Button id="Button47"onClick={(e) => clickButton(e,'meioambiente', 'favor')}>
              Sou a<p id="FavorBold">FAVOR</p> do afastamento do ministro do meio ambiente.
            </Button>
            <Button id="Button48"onClick={(e) => clickButton(e,'meioambiente', 'contra')}>
                Sou <p id="ContraBold">CONTRA</p>o afastamento do ministro do meio ambiente.
            </Button>
    </div>


    <div id="divBetween">
        <a id="voltarFormu" href="/cadastro/candidato-dados">...Voltar para Formulário</a>
        <Button onClick={continuarClick} id="botaoCont">Continuar</Button>
    </div>

    </div>

    </Box>
 
    );
}

