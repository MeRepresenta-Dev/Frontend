import React, { useState, useEffect } from 'react'
import { Checkbox, Icon, useToast } from '@chakra-ui/core'
import './style.css'

export default function Score ({ label, name, value, disabled, onChangeScore }) {
  const [level, setLevel] = useState(0)
  const [isActive, setActive] = useState(false)
  const toast = useToast();
  const barList = new Array(5);
  
  const handleScore = (score) => {
    if(score < 0 || score > 5)
      toast({
        title: `Atenção!`,
        description: "Escolha um valor de 1 a 5",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      })
    else onChangeScore({ [value]: level.toString() })
  }

  const handleCheck = (isActive) => {
    setLevel(0)
    setActive(isActive)
  }

  useEffect(() =>{
    handleScore(level)
  }, [level])


  return (
    <div className={`Score ${isActive ? 'active' : ''}`}>
      <div className="check">
        <p className="label">{label}</p>
        <Checkbox isDisabled={disabled} onChange={() => handleCheck(!isActive)} name={name} value={value} />
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
          <button className="btn dec" disabled={!isActive} onClick={() => {if (level > 0) setLevel(level - 1)}}>
            <Icon name="triangle-down" />
          </button>
          <span className="level">{level}</span>
          <button className="btn inc" disabled={!isActive} onClick={() => {if (level < 5) setLevel(level + 1)}}>
            <Icon name="triangle-down" />
          </button>
        </div>
      </div>
    </div>
  );
}
