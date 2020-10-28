import React, { useState } from 'react'
import './styles.css'
import {
    Box,
    Button,
    Heading,
    Flex,
    useToast,
    Text
  } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import Score from '../../components/Score'
import api from "../../services/api";


export default function Temas() {

const [score, setScore] = useState([]);
const [totalScore, setTotalScore] = useState(5);
const dadosPaginaAnt = localStorage.getItem('@merepresenta/pautas');
const convertedForm = JSON.parse(dadosPaginaAnt);
const temasData = {...convertedForm};
const history = useHistory();
const toast = useToast();

const handleScore = (newScore) => {
  let newListScore = [...score.filter(el => el.title !== newScore.title), newScore].filter(el => el.score > 0);
  let total = newListScore.reduce( (accum, curr) => {return accum + curr.score}, 0);
  if(totalScore > 0) setTotalScore(5 - total);
  else
    toast({
      title: `Atenção!`,
      description: "Você tem até 5 pontos para distribuir",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })
  if(score.length < 3) setScore(newListScore);
  else
    toast({
      title: `Atenção!`,
      description: "Escolha até 3 temas",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })
  console.log(total)
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
            <h2 id="textAux2">Pontos restantes: <span id="spanAux1">{totalScore}</span> pontos</h2>

            <div id="divAux2">    
              <div id="divGenero" >
                <Score label="#Genero" name="bla" value="genero" onChangeScore={handleScore} />
              </div>
                <div id="divGenero" >
                  <Score label="#LGBT+" name="bla" value="lgbt" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Raça" name="bla" value="raca" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Povos Tradicionais" name="bla" value="povostradicionais" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Politicas Sociais" name="bla" value="politicassociais" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Segurança Pública" name="bla" value="segurancapublica" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Drogas" name="bla" value="drogas" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Comunicação" name="bla" value="comunicacao" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Democracia" name="bla" value="democracia" onChangeScore={handleScore} />
                </div>
                <div id="divGenero" >
                  <Score label="#Meio Ambiente" name="bla" value="meioambiente" onChangeScore={handleScore} />
                </div>
            </div>
        
            <div id="divContinuar">
              <Button onClick="continuarClick" id="ButtonContinuar" >Continuar</Button>
            </div>
        </div>
        
    </div>
  
  );
}
