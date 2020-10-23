import React from 'react'
import './styles.css'
import {
    Box,
    Button,
    Heading,
    Radio,
    Text,
  } from '@chakra-ui/core'

const Modal = ({children}) => {
    return (<div className="modal">
        <div className="container">
            <Button className="close">
                Continuar
            </Button>
                <div className="content">
                    {children}
                </div>
        </div>
    </div>
    );
}

export default Modal;