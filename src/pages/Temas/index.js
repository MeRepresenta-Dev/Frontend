import React from 'react'
import './styles.css'
import {
    Box,
    Button,
    Heading,
    Flex,
    Text
  } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import api from "../../services/api";


export default function Temas() {

const dadosPaginaAnt = localStorage.getItem('@merepresenta/pautas');

const convertedForm = JSON.parse(dadosPaginaAnt);

const temasData = {...convertedForm};

const history = useHistory();

const clickButton = (e, tema, resposta) =>{
    temasData[tema] = resposta;

    const botoes1 = document.getElementsByClassName("botoesPontos1");
    // const botoes2 = document.getElementsByClassName("botoesPontos2");
    // const botoes3 = document.getElementsByClassName("botoesPontos3");
    // const botoes4 = document.getElementsByClassName("botoesPontos4");
    // const botoes5 = document.getElementsByClassName("botoesPontos5");
    // const botoes6 = document.getElementsByClassName("botoesPontos6");
    // const botoes7 = document.getElementsByClassName("botoesPontos7");
    // const botoes8 = document.getElementsByClassName("botoesPontos8");
    // const botoes9 = document.getElementsByClassName("botoesPontos9");
    // const botoes10 = document.getElementsByClassName("botoesPontos10");

    // console.log(botoes);

    for(let i=0; i < botoes1.length; i++){
        botoes1[i].style.backgroundColor = '#1B9AAA';
        botoes1[i].style.Color = 'white';
    }
    // for(let i=0; i < botoes2.length; i++){
    //     botoes2[i].style.backgroundColor = '#1B9AAA';
    //     botoes2[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes3.length; i++){
    //     botoes3[i].style.backgroundColor = '#1B9AAA';
    //     botoes3[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes4.length; i++){
    //     botoes4[i].style.backgroundColor = '#1B9AAA';
    //     botoes4[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes5.length; i++){
    //     botoes5[i].style.backgroundColor = '#1B9AAA';
    //     botoes5[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes6.length; i++){
    //     botoes6[i].style.backgroundColor = '#1B9AAA';
    //     botoes6[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes7.length; i++){
    //     botoes7[i].style.backgroundColor = '#1B9AAA';
    //     botoes7[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes8.length; i++){
    //     botoes8[i].style.backgroundColor = '#1B9AAA';
    //     botoes8[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes9.length; i++){
    //     botoes9[i].style.backgroundColor = '#1B9AAA';
    //     botoes9[i].style.Color = 'white';
    // }
    // for(let i=0; i < botoes10.length; i++){
    //     botoes10[i].style.backgroundColor = '#1B9AAA';
    //     botoes10[i].style.Color = 'white';
    // }

    e.target.style.backgroundColor = 'white';
    e.target.style.Color = 'black';


}

const irParaSaudacao  = async () =>{
    try{
        const response = await api.post("/", temasData);
        if(response.status === 200){
          return history.push('/candidatos/saudacao');
        }
      }
      catch(e){
        alert('Houve um erro ao enviar os dados');
      }  
}

  return (
        
        <div id="divPrincipal">
            <div id="divAux1" >
            <h2 id="textPrincipal">
                Escolha até 3 temas <br></br>que definem sua candidatura,
            </h2>
            <h2 id="textAux1" >
                <strong>1</strong>. Escolha de 1 até 3 temas abaixo que definam sua candidatura. <br></br>
                <strong>2</strong>. Em seguida, distribua até 5 pontos entre os temas escolhidos.
            </h2>
            <h2 id="textAux2">Pontos restantes: <span id="spanAux1">4</span> pontos</h2>

            <div id="divAux2">    
                <div id="divGenero" >
                    <h2 id="textTemas">#Genero</h2>
                <Button className="botoesPontos1" onClick={(e) => clickButton(e,'genero', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos1" onClick={(e) => clickButton(e,'genero', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos1" onClick={(e) => clickButton(e,'genero', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos1" onClick={(e) => clickButton(e,'genero', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos1" onClick={(e) => clickButton(e,'genero', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#LGBT+</h2>
                <Button className="botoesPontos2" onClick={(e) => clickButton(e,'lgbt', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos2" onClick={(e) => clickButton(e,'lgbt', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos2" onClick={(e) => clickButton(e,'lgbt', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos2" onClick={(e) => clickButton(e,'lgbt', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos2" onClick={(e) => clickButton(e,'lgbt', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Raça</h2>
                <Button className="botoesPontos3" onClick={(e) => clickButton(e,'raca', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos3" onClick={(e) => clickButton(e,'raca', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos3" onClick={(e) => clickButton(e,'raca', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos3" onClick={(e) => clickButton(e,'raca', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos3" onClick={(e) => clickButton(e,'raca', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Povos Tradicionais</h2>
                <Button className="botoesPontos4" onClick={(e) => clickButton(e,'povostradicionais', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos4" onClick={(e) => clickButton(e,'povostradicionais', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos4" onClick={(e) => clickButton(e,'povostradicionais', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos4" onClick={(e) => clickButton(e,'povostradicionais', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos4" onClick={(e) => clickButton(e,'povostradicionais', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Politicas Sociais</h2>
                <Button className="botoesPontos5" onClick={(e) => clickButton(e,'Politicassociais', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos5" onClick={(e) => clickButton(e,'politicassociais', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos5" onClick={(e) => clickButton(e,'politicassociais', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos5" onClick={(e) => clickButton(e,'politicassociais', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos5" onClick={(e) => clickButton(e,'politicassociais', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Segurança Pública</h2>
                <Button className="botoesPontos6" onClick={(e) => clickButton(e,'segurancapublica', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos6" onClick={(e) => clickButton(e,'segurancapublica', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos6" onClick={(e) => clickButton(e,'segurancapublica', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos6" onClick={(e) => clickButton(e,'segurancapublica', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos6" onClick={(e) => clickButton(e,'segurancapublica', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Drogas</h2>
                <Button className="botoesPontos7" onClick={(e) => clickButton(e,'drogas', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos7" onClick={(e) => clickButton(e,'drogas', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos7" onClick={(e) => clickButton(e,'drogas', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos7" onClick={(e) => clickButton(e,'drogas', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos7" onClick={(e) => clickButton(e,'drogas', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Comunicação</h2>
                <Button className="botoesPontos8" onClick={(e) => clickButton(e,'comunicacao', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos8" onClick={(e) => clickButton(e,'comunicacao', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos8" onClick={(e) => clickButton(e,'comunicacao', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos8" onClick={(e) => clickButton(e,'comunicacao', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos8" onClick={(e) => clickButton(e,'comunicacao', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Democracia</h2>
                <Button className="botoesPontos9" onClick={(e) => clickButton(e,'democracia', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos9" onClick={(e) => clickButton(e,'democracia', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos9" onClick={(e) => clickButton(e,'democracia', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos9" onClick={(e) => clickButton(e,'democracia', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos9" onClick={(e) => clickButton(e,'democracia', '5')} id="ButtonN5">5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas">#Meio Ambiente</h2>
                <Button className="botoesPontos10" onClick={(e) => clickButton(e,'meioambiente', '1')} id="ButtonN1">1</Button>
                <Button className="botoesPontos10" onClick={(e) => clickButton(e,'meioambiente', '2')} id="ButtonN2">2</Button>
                <Button className="botoesPontos10" onClick={(e) => clickButton(e,'meioambiente', '3')} id="ButtonN3">3</Button>
                <Button className="botoesPontos10" onClick={(e) => clickButton(e,'meioambiente', '4')} id="ButtonN4">4</Button>
                <Button className="botoesPontos10" onClick={(e) => clickButton(e,'meioambiente', '5')} id="ButtonN5">5</Button>
                </div>
            </div>
        
            <div id="divContinuar">
                <Button onClick="continuarClick" id="ButtonContinuar" >Continuar</Button>
            </div>
        </div>
        
    </div>
  
  );
}
