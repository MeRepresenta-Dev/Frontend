import React, { useState } from 'react'
import { Checkbox, Icon, useToast } from '@chakra-ui/core'
import './style.css'

export default function Score ({ label, name, value, onChangeScore }) {
  const [level, setLevel] = useState(0)
  const [isActive, setActive] = useState(false)
  const toast = useToast();
  const barList = new Array(5);
  const handleScore = (score) => {
    if (score >= 0 && score <= 5)
      setLevel(score)
    else
      toast({
        title: `Atenção!`,
        description: "A pontuação deve ser de 1 a 5",
        status: "warning",
        duration: 2000,
        position: "top",
        isClosable: true,
      })
    
    onChangeScore({ [value]: level })
  }

  const handleCheck = (isActive) => {
    if(!isActive) handleScore(0)
    setActive(isActive)
  }


  return (
    <div className={`Score ${isActive ? 'active' : ''}`}>
      <div className="check">
        <p className="label">{label}</p>
        <Checkbox onChange={() => handleCheck(!isActive)} name={name} value={value} />
      </div>

      <div className="progress">
        <div className="bar">
          {
            [...barList].map((_, index) => (
              <span 
                key={index}
                className={`point${index + 1 <= level ? ' active' : ''}`} />))
          }
          
        </div>

        <div className="slider">
          <button className="btn dec" disabled={!isActive} onClick={() => handleScore(level - 1)}>
            <Icon name="triangle-down" />
          </button>
          <span className="level">{level}</span>
          <button className="btn inc" disabled={!isActive} onClick={() => handleScore(level + 1)}>
            <Icon name="triangle-down" />
          </button>
        </div>
      </div>
    </div>
  );
}
