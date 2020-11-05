import React from 'react'
import './styles.css'
import { Input, Button } from "@chakra-ui/core";
import Img from '../../components/Header/logotipo.png'
import { useHistory } from 'react-router-dom'


export default function Obrigado() {

    const history = useHistory();

    const continuarClick = () =>{
            history.push({pathname: '/cadastro/candidato-pautas',})
    }


  return (

    <div id="MasterDiv">
        <h1 id="Saudacao">OBRIGADA</h1>
        <h1 id="textSaudacao1">Você tem até dia 12 de setembro para alterar <br></br> seu cadastro e respostas na plataforma. <br></br> Para ver seu perfil, <a target="_blank" href="/login">clique aqui.</a></h1>
        {/* <h1 id="textSaudacao2">Não encontrou um tema importante pra você?</h1>
        <h1 id="textSaudacao3" >Deixe uma sugestão pra gente!</h1>
        <div id="divInput">
            <Input id="inputText1"></Input>
        </div>
        <div id="textandbutton">
            <h1 id="textSaudacao4">Caracteres: 0 / 1000</h1>
            <Button id="ButtonEnviar">Enviar</Button>
        </div> */}
        <div id="buttonandimages">
            <div id="buttonPautas">
            <h1 id="textSaudacao5">Saiba mais sobre as <a id="linkPautas" >#pautas</a></h1>
            <h2 id="textSaudacao6">Se você não conseguiu se aprofundar durante o <br></br> questionário, não se preocupe. Nós temos uma página <br></br> cheia de links com todo conteúdo reunido!
            </h2>
            <Button onClick={continuarClick} id="ButtonQuero">Quero ver mais</Button>
            </div>
            <div>
                <img src={Img}></img>
            </div>
        </div>
        <div id="divAux"> uhdauhi <br></br>ahadiaoasuhdauhi 
        <br></br>ahadiaoasuhdauhi <br></br>ahadiaoas
        </div>
    </div>

  );
}