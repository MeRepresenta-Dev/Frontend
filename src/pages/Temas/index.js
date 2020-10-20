import React from 'react'
import './styles.css'
import {
    Box,
    Button,
    Heading,
    Flex,
    Text
  } from '@chakra-ui/core'

export default function Temas() {
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
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#LGBT+</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Raça</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Povos Tradicionais</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Politicas Sociais</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Segurança Pública</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Drogas</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Comunicação</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas" >#Democracia</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
                <div id="divGenero" >
                    <h2 id="textTemas">#Meio Ambiente</h2>
                <Button id="ButtonN1" >1</Button>
                <Button id="ButtonN2" >2</Button>
                <Button id="ButtonN3" >3</Button>
                <Button id="ButtonN4" >4</Button>
                <Button id="ButtonN5" >5</Button>
                </div>
            </div>
        
            <div id="divContinuar">
                <Button id="ButtonContinuar" >Continuar</Button>
            </div>
        </div>
        
    </div>
  
  );
}
