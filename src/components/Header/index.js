import React from 'react'

import {
  Button,
  Box,
} from '@chakra-ui/core'

import './styles.css'
import logo from './logotipo.png'

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="headerImg">
          <a href="/"><img id="logo" src={logo} alt="Logotipo MeRepresenta" /></a>
        </div>
        <Box display={{ base: "block", lg: "none" }} onClick={handleToggle}>
          <svg
            fill="#fd006c"
            width="32px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Box
          display={{ sm: show ? "block" : "none", lg: "flex" }}
          width={{ md: "full", lg: "auto" }}
        >
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/login">
                  Candidata/o
                </a>
              </li>
              <li>
                <a href="#">
                  Voluntária/o
                </a>
              </li>
              <li>
                <a href="#">
                  Eleitor/a
                </a>
              </li>
              <li>
                <a href="#">
                  Pautas
                </a>
              </li>
              <li>
                <a href="#">
                  Perguntas?
                </a>
              </li>
            </ul>
          </nav>
          <Box
            display={{ sm: show, md: show ? "block" : "none", lg: "block" }}
            mt={{ base: 4, md: 0 }}
          >
            <a href="/login" ><Button variantColor="pink" variant="solid">
              Sou Candidata/o
            </Button></a>
          </Box>
        </Box>
      </div>
    </header>
  )
}

export default Header
