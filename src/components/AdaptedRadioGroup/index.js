import React from 'react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  RadioGroup,
} from '@chakra-ui/core'

export default function AdaptedRadioGroup({ input, meta, label, children }) { 
  return (
    <FormControl isInvalid={meta.touched && meta.invalid} my={4}>
      <FormLabel htmlFor={input.name}>{label}</FormLabel>
      <RadioGroup {...input}>{children}</RadioGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}
