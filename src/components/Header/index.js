import React from 'react'
import { useHistory } from "react-router-dom";

import {
  Button,
  Box,
} from '@chakra-ui/core'

import './styles.css'
import logo from './logotipo.png'




const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  

  const history = useHistory();

  const routeChange = () => {
    history.push("/login");
  };
  

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="headerImg">
          <img src={logo} alt="Logotipo MeRepresenta" />
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
                <a href="#">
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
<<<<<<< Updated upstream
            <Button variantColor="pink" variant="solid">
=======
            <Button onClick={routeChange} variantColor="pink" variant="solid">
>>>>>>> Stashed changes
              Sou Candidata/o
            </Button>
          </Box>
        </Box>
      </div>
    </header>
  )
}

export default Header
