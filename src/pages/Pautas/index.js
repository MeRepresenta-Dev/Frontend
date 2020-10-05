import React, {useState} from 'react'
import {Box, Heading, Text, RadioGroup, Radio, Button} from '@chakra-ui/core'

import './styles.css'

export default function Pautas() {

  const [step, setStep] = useState(1);
  const [value, setValue] = useState(1);

  return(
    <main className="pauta">
      <section>
      <div className="container">
        {(()=>{
          if(step===1){
            return <div className="retangulo-rosa"></div>;
          }else{
            return <div className="retangulo-cinza"></div>;
          }
        })()}
        {(()=>{
          if(step===2){
            return <div className="retangulo-rosa"></div>;
          }else{
            return <div className="retangulo-cinza"></div>;
          }
        })()}
      </div>
      <Heading className="pautaTitulo" as="h3" size="lg">Pautas #MeRepresenta</Heading>
        {
          (()=>{
            switch(step){
              case 1: 
                return(
                  <Box 
                  >
                    <Heading as="h3" size="lg">#LGBT+</Heading>
                    <Box>
                      <Heading as="h6" size="xs">Pauta 01 de 22</Heading>
                      <Heading as="h4" size="md">Discriminar LGBTs deve ser crime.</Heading>
                      <Text>O Brasil é um dos países que mais matam LGBTs no mundo, em especial travestis e transexuais. Não há legislação que considere crime o preconceito contra lésbicas, transsexuais e travestis, bissexuais, gays. </Text>
                      <Heading>Qual seu posicionamento?</Heading>
                      <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
                        <Radio value={1}>Sou a FAVOR da criminalização da LGBTfobia</Radio>
                        <Radio value={2}>Sou CONTRA a criminalização da LGBTfobia </Radio>
                      </RadioGroup>
                    </Box>
                    <br></br>
                    <Button 
                      variantColor="teal" 
                      variant="solid"
                      onClick={() => setStep(step+1)}>
                      Próximo
                    </Button>
                  </Box>
                );

              case 2:
                return(
                  <Box 
                  >
                    <Heading as="h3" size="lg">#LGBT+</Heading>
                    <Box>
                      <Heading as="h6" size="xs">Pauta 02 de 22</Heading>
                      <Heading as="h4" size="md">Trans e travestis podem usar o banheiro que quiserem.</Heading>
                      <Text>A população transexual e travesti é frequentemente impedida de utilizar banheiros, masculinos ou femininos em lugares públicos e comerciais. No Brasil ainda não existe uma legislação para esse assunto.</Text>
                      <Heading>Qual seu posicionamento?</Heading>
                      <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
                        <Radio value={1}>Sou a FAVOR de pessoas trans e travestis usar o banheiro que quiserem</Radio>
                        <Radio value={2}>Sou CONTRA pessoas trans e travestis usar o banheiro que quiserem </Radio>
                      </RadioGroup>
                    </Box>
                    <br></br>
                    <Button 
                      variantColor="teal" 
                      variant="solid"
                      onClick={() => setStep(step-1)}>
                      Anterior
                    </Button>
                  </Box>
                );
            }
          })()}
      </section>
    </main>
  );
  
}
