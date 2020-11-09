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
const [choosenThemes, setChoosenThemes] = useState([]);
const [choosenObj, setChoosenObj] = useState({});
const [loading, setLoading] = useState(false);
const dadosPaginaAnt = localStorage.getItem('@merepresenta/pautas');
const convertedForm = JSON.parse(dadosPaginaAnt);
const temasData = {...score};
const history = useHistory();
const toast = useToast();

const scoreSum = (scoreObj) => Object.values(scoreObj).reduce( (accum, curr) => {return accum + parseInt(curr, 10)}, 0)

const getKeyVal = (newScore) => {
  const keyScore = Object.keys(newScore)[0]
  const valueScore = Object.values(newScore)[0]

  return {
    key: keyScore,
    value: valueScore
  }
}

const setThemeList = (newScore) => {
  const theme = getKeyVal(newScore)
  let listThemes = [...choosenThemes];

  if(listThemes.find(t => t[theme.key])){
    if(theme.value == 0)
      listThemes = [...listThemes.filter(th => Object.keys(th)[0] !== theme.key)]
    else
      listThemes = [...listThemes.filter(th => Object.keys(th)[0] !== theme.key), newScore]
  }
  else {
    if(parseInt(theme.value, 10) > 0)
      listThemes = [...listThemes, newScore]
  }
  
  const totalScoreSum = listThemes.reduce((acc, obj) =>  acc + parseInt(Object.values(obj)[0], 10), 0)
  
  if(totalScoreSum <= 5){
    setChoosenThemes(listThemes)
    const mapped = listThemes.map(item => ({ [Object.keys(item)[0]]: Object.values(item)[0] }) );
    const newObj = Object.assign({}, ...mapped );
    setChoosenObj({...score, ...newObj})
  }
  else
    toast({
      title: `Atenção!`,
      description: "Você excedeu o limite de 5 pontos",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })
 
}

const handleScore = (newScore) => {
  if(choosenThemes.length < 3)
    setThemeList(newScore)
  else
    toast({
      title: `Atenção!`,
      description: "Você excedeu o limite de 3 temas",
      status: "warning",
      duration: 3000,
      position: "top",
      isClosable: true,
    })

}

  const irParaSaudacao  = async () =>{
    const formattedValues = {
      ...convertedForm,
      ...choosenObj
    }

    setLoading(true)
    try{
      const response = await api.post("/register", formattedValues);
      if(response.status === 200){
        toast({
          title: `Sucesso!`,
          description: "Dados cadastrados",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        })

        setTimeout(() => {
          setLoading(false);
          return history.push('/candidato/saudacao');
        }, 2000)
      }
    }
    catch(e){
      setLoading(false)
      toast({
        title: `Erro ${e.response.status}!`,
        description: "Houve um erro ao enviar o formulário",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    }  
  }

  const formDisabled = choosenThemes.reduce((acc, obj) =>  acc + parseInt(Object.values(obj)[0], 10), 0) < 5 || choosenThemes.length == 0
  
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
            <Button onClick={() => irParaSaudacao()} 
              disabled={formDisabled} 
              isLoading={loading}
              loadingText="Enviando"
              id="ButtonContinuar" >Continuar</Button>
          </div>
      </div>
    </div>
  );
}
