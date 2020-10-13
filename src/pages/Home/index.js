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

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);
  
  <button onClick={activateLasers}>  Activate Lasers
  <a href="https://app.merepresenta.org.br/cadastro/candidato-dados" onclick="console.log('The link was clicked.'); return false">
  Click me
  </button>
</a>

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper eros sed risus aliquam, vel pretium urna cursus.
              </Text>
            </Box>
            <Box className="heroButtons">
              <Button><a href="https://app.merepresenta.org.br/cadastro/candidato-dados" onclick="console.log('The link was clicked.'); return false"
</a>SOU CANDIDATO</Button>
              <Button>Quero ser voluntária/o</Button>
              <Button>Sou eleitor/a</Button>
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
              A nova plataforma #MeRepresenta Eleições 2018 foi elaborada com a participação 19 organizações da sociedade civil. Veja abaixo quem está com a gente!
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
              #Povos Tradicionais & Meio Ambiente
            </Text>
          </Box>
          <Box className="image">
            <img src={povosOriginarios} alt="Povos Originários e Meio Ambiente" />
          </Box>
          <Box className="blue">
            <Text>
              #Saúde, Educação e Trabalho
            </Text>
          </Box>
          <Box className="yellow">
            <Text>
              #Migrantes
            </Text>
          </Box>
          <Box className="blue">
            <Text>
              #Drogas
            </Text>
          </Box>
          <Box className="yellow">
            <Text>
              #Corrupção
            </Text>
          </Box>
          <Box className="pink">
            <Text>
              #Segurança & Direitos Humanos
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
                <Button>QUERO SER VOLUNTÁRIA/O</Button>
                <Button>Quero saber mais</Button>
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
      </section>
    </main>
  )
}
