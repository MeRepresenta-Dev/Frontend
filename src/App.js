import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import {
  ThemeProvider,
  theme,
} from '@chakra-ui/core';

import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import CadastroVerificacao from './pages/VerificacaoSMS'
import DadosForm from './pages/DadosForm';
import CadastroPautas from './pages/Pautas'
import CadastroTemas from './pages/Temas'
import CadastroConcluido from './pages/Concluido'
import EleitorResultados from './pages/EleitorResultados'

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

const App = () => (
  <ThemeProvider theme={newTheme}>
    <Header />
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/login" children={<Login />} />
      <Route path="/cadastro/candidato" children={<Cadastro />} />
      <Route path="/cadastro/candidato-verificacao" children={<CadastroVerificacao />} />
      <Route path="/cadastro/candidato-dados" children={<DadosForm />} />
      <Route path="/cadastro/candidato-pautas" children={<CadastroPautas />} />
      <Route path="/cadastro/candidato-temas" children={<CadastroTemas />} />
      <Route path="/cadastro/candidato-concluido" children={<CadastroConcluido />} />
      <Route path="/candidato/:slug" children={<EleitorResultados />} />
    </Switch>
    <Footer />
  </ThemeProvider>
)

export default App;
