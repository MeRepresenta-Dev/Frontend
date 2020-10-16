import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Heading,
  Flex,
  Text
} from '@chakra-ui/core'

import './styles.css'

import heroImage from './images/hero-image.png'

import video from './images/video.png'

import lgbt from './images/lgbt.png'
import povosOriginarios from './images/povos-originarios.png'
import raca from './images/raca.png'

import joinImage from './images/join-image.png'

import blogueirasNegras from './images/blogueiras-negras.png'
import feministaJuristas from './images/feminista-juristas.png'
import cidadaniaInteligente from './images/cidadania-inteligente.png'
import voteLGBT from './images/vote-lgbt.png'

import abglt from './images/abglt-168px.png'
import aliancaLGBT from './images/Laço-Aliança-2-168px.png'
import apoinme from './images/Laço-Aliança-2-168px (1).png'
import cfemea from './images/Laço-Aliança-2-168px (2).png'
import conaq from './images/abglt-168px (1).png'
import generoEnumero from './images/RJC-logo3-min-168px.png'
import instutoSoudapaz from './images/RJC-logo3-min-168px (1).png'
import intervozaes from './images/LogoIntervozes 380x168 px.png'
import ittc from './images/abglt-168px (2).png'
import movimentoDosTrabalhadores from './images/abglt-168px (3).png'
import plataformaBrasileiraDePolitica from './images/PBPD-168px.png'
import sistemaPolitico from './images/abglt-168px (4).png'
import redeJustiça from './images/abglt-168px (5).png'
import azMina from './images/abglt-168px (6).png'
import movimentoTrasparenciaPartidaria from './images/PBPD-168px (1).png'

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <Flex wrap="wrap">
          <Box className="heroContent">
            <Box className="heroHeading">
              <Heading as="h1" size="2xl">
                Ajude seus eleitores chegarem até você!
              </Heading>
              <Text fontSize="xl">
                  Quer aparecer para as eleitoras e eleitores que se preocupam com as mesmas pautas que você? Cadastre-se e traga mais visibilidade para sua candidatura.
              </Text>
            </Box>
            <Box className="heroButtons">
              <Button className="pinkButton">SOU CANDIDATO</Button>
              <Button className="blueButton">Quero ser voluntáriaos</Button>
              <Button className="grayButton">Sou eleitor</Button>
            </Box>
          </Box>
          <Box className="heroImage">
            <img src={heroImage} alt="Ilustração de eleitores/as no MeRepresenta"/>
          </Box>
        </Flex>
      </section>
      {/* Conheça o MeRepresenta */}
      <section className="presentation">
        <Flex wrap="wrap">
          <Box className="presentationVideo">
            <img src={video} alt="Video" />
          </Box>
          <Box className="presentationContent">
            <Heading as="h1" size="2xl">
              Conheça o <span>#MeRepresenta</span>
            </Heading>
            <Text fontSize="xl">
              O #MeRepresenta é uma união de coletivos formados por mulheres, pessoas negras e LGBT+. Nosso objetivo é diminuir a distância entre eleitoras/es e candidatas/os comprometidas/os com os direitos sociais, civis e políticos da população.
            </Text>
            <Text fontSize="xl">
              A nova plataforma #MeRepresenta Eleições 2020 foi elaborada com a participação de 16 organizações da sociedade civil. Veja abaixo quem está com a gente!
            </Text>
          </Box>
        </Flex>
      </section>
      {/* Entenda as pautas em debate */}
      <section className="topics">
        <Heading className="topicsHeading" as="h1" size="2xl">
          Entenda as <span>#pautas</span> em debate
        </Heading>
        <div className={`topicsBoxes ${isMobile ? "responsive" : ""}`}>
          <Box className="pink">  
            <Text>
              #Gênero
            </Text>
          </Box>
          <Box className="blue">
            <Text>
              #LGBT
            </Text>
          </Box>
          <Box className="image">
            <img src={raca} alt="Raça" />
          </Box>
          <Box className="pink">
            <Text>
              #Raça
            </Text>
          </Box>
          <Box className="yellow">
            <Text>
              #Povos Tradicionais
            </Text>
          </Box>
          <Box className="image">
            <img src={povosOriginarios} alt="Povos Originários e Meio Ambiente" />
          </Box>
          <Box className="blue">
            <Text>
              #Politicas Sociais
            </Text>
          </Box>
          <Box className="yellow">
            <Text>
              #Segurança Publica  
            </Text>
          </Box>
          <Box className="blue">
            <Text>
              #Drogas
            </Text>
          </Box>
          <Box className="yellow">
            <Text>
              #Comunicação
            </Text>
          </Box>
          <Box className="pink">
            <Text>
              #Meio Ambiente
            </Text>
          </Box><Box className="blue">
            <Text>
              #Democracia
            </Text>
          </Box>
          <Box className="image">
            <img src={lgbt} alt="LGBTQIA+" />
          </Box>
        </div>
      </section>
      {/* Faça parte */}
      <section className="join">
        <Flex wrap="wrap">
          <Box className="joinWrapper">
            <Box className="joinImage">
              <img src={joinImage} alt="Ilustrações com voluntárias/os do MeRepresenta" />
            </Box>
            <Box className="joinContent">
              <Heading as="h1" size="2xl">
                Faça parte do <span>#MeRepresenta</span>
              </Heading>
              <Box className="joinButtons">
                <Button className="blueButton">QUERO SER VOLUNTÁRIA/O</Button>
                <Button className="grayButton">Quero saber mais</Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </section>
      {/* Quem fez isso possível? */}
      <section className="makePossible">
        <Box className="makePossibleWrapper">
          <Heading className="makePossibleHeading" as="h1" size="2xl">
            <span>Quem</span> fez isso possível?
          </Heading>
          <Flex wrap="wrap" justifyContent="space-between">
            <Box className="makePossibleImage">
              <img src={blogueirasNegras} alt="Blogueiras Negras" />
            </Box>
            <Box className="makePossibleImage">
              <img src={feministaJuristas} alt="Rede Feminista de Juristas" />
            </Box>
            <Box className="makePossibleImage">
              <img src={cidadaniaInteligente} alt="Cidadania Inteligente" />
            </Box>
            <Box className="makePossibleImage">
              <img src={voteLGBT} alt="Vote LGBT" />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Heading className="makePossibleHeading">
             Parcerias
          </Heading>
          <Flex wrap="wrap" justifyContent="space-between">
              <Box className="makePossibleImage">
                <img src={abglt} alt="ABGLT" />
              </Box>
              <Box className="makePossibleImage">
                <img src={aliancaLGBT} alt="Aliança LGTB+" />
              </Box>
              <Box className="makePossibleImage">
                <img src={apoinme} alt="apoinme" />
              </Box>
              <Box className="makePossibleImage">
                <img src={cfemea} alt="cfemea" />
              </Box>
              <Box className="makePossibleImage">
                <img src={conaq} alt="Conaq" />
              </Box>
              <Box className="makePossibleImage">
                <img src={generoEnumero} alt="Gênero e Número" />
              </Box>
              <Box className="makePossibleImage">
                <img src={instutoSoudapaz} alt="Instuição Sou Da Paz" />
              </Box>
              <Box className="makePossibleImage">
                <img src={intervozaes} alt="Intervozes" />
              </Box>
              <Box className="makePossibleImage">
                <img src={ittc} alt="Instuto Terra, Trabalho e Cidadania" />
              </Box>
              <Box className="makePossibleImage">
                <img src={movimentoDosTrabalhadores} alt="Movimento dos Trabalhadores Rurais Sem Terra" />
              </Box>
              <Box className="makePossibleImage">
                <img src={plataformaBrasileiraDePolitica} alt="Plataforma Brasileira de Politica de Drogas" />
              </Box> 
              <Box className="makePossibleImage">
                <img src={sistemaPolitico} alt="Sistema Politico" />
              </Box>   
              <Box className="makePossibleImage">
                <img src={redeJustiça} alt="Rede de Justiça Criminal" />
              </Box>  
              <Box className="makePossibleImage">
                <img src={azMina} alt="AzMina" />
              </Box> 
              <Box className="makePossibleImage">
                <img src={movimentoTrasparenciaPartidaria} alt="Movimento Trabsparencia Partidaria" />
              </Box>
              <Box className="makePossibleImage">
              </Box>
              <Box className="makePossibleImage">
              </Box> 
              <Box className="makePossibleImage">
              </Box>
              <Box className="makePossibleImage">
              </Box> 
              <Box className="makePossibleImage">
              </Box>
              <Box className="makePossibleImage">
              </Box>    
            </Flex>
        </Box>
      </section>
    </main>
  )
}
