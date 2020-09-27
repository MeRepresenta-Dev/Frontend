import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import {
  ThemeProvider,
  theme,
} from '@chakra-ui/core';

import './App.css';

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import CadastroVerificacao from './pages/Verificacao'
import CadastroFormulario from './pages/Formulario'
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/cadastro/verificacao" element={<CadastroVerificacao />} />
      <Route path="/cadastro/candidato" element={<CadastroFormulario />} />
      <Route path="/cadastro/pautas" element={<CadastroPautas />} />
      <Route path="/cadastro/temas" element={<CadastroTemas />} />
      <Route path="/cadastro/concluido" element={<CadastroConcluido />} />
      <Route path="/candidato/:slug" element={<EleitorResultados />} />
    </Routes>
  </ThemeProvider>
)

export default App;
