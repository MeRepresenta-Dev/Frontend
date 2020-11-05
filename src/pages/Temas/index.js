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

const [score, setScore] = useState({
  genero: '0',
  raca: '0',
  lgbt: '0',
  povostradicionais: '0',
  politicassociais: '0',
  segurancapublica: '0',
  drogas: '0',
  comunicacao: '0',
  democracia: '0',
  meioambiente: '0'
});
const [totalScore, setTotalScore] = useState(5);
const dadosPaginaAnt = localStorage.getItem('@merepresenta/pautas');
const convertedForm = JSON.parse(dadosPaginaAnt);
const temasData = {...score};
const history = useHistory();
const toast = useToast();

const scoreSum = (scoreObj) => Object.values(scoreObj).reduce( (accum, curr) => {return accum + parseInt(curr, 10)}, 0)
const handleScore = (newScore) => {
  let keyScore = Object.keys(newScore)[0]
  let valueScore = Object.values(newScore)[0]
  let newObjScore
  const qtdScoreCards = Object.values(score).filter(vals => vals > 0).length
  const allZeros = Object.values(score).every(val => val === 0)

  if (qtdScoreCards < 3) {
    newObjScore = {
      ...score,
      [keyScore]: valueScore
    }
    setScore(newObjScore)
  }

  let total = 5 - scoreSum(newObjScore);
  if(total >= 0) setTotalScore(total);
  else
    toast({
      title: `Atenção!`,
      description: "Você tem até 5 pontos para distribuir",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })


  console.log(newObjScore, total)
}

const irParaSaudacao  = async () =>{
  const formattedValues = {
    ...convertedForm,
    ...score
  }
  if (scoreSum(score) < 5) {
    toast({
      title: `Erro!`,
      description: "Distribua os 5 pontos entre os temas",
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    })
  } else {
    try{
      const response = await api.post("/register", formattedValues);
      if(response.status === 200){
        return history.push('/candidato/saudacao');
      }
    }
    catch(e){
      alert('Houve um erro ao enviar os dados');
    }  
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
              <Score label="#Genero" value="genero" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#LGBT+" value="lgbt" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Raça" value="raca" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Povos Tradicionais" value="povostradicionais" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Políticas Sociais" value="politicassociais" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Segurança Pública" value="segurancapublica" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Drogas" value="drogas" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Comunicação" value="comunicacao" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Democracia" value="democracia" onChangeScore={handleScore} />
            </div>
            <div id="divGenero" >
              <Score label="#Meio Ambiente" value="meioambiente" onChangeScore={handleScore} />
            </div>
          </div>
      
          <div id="divContinuar">
            <Button onClick={() => irParaSaudacao()} id="ButtonContinuar" >Continuar</Button>
          </div>
      </div>
    </div>
  );
}
