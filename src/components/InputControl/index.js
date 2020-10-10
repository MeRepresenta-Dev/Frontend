import React from 'react'
import {
  FormLabel,
  Input,
} from '@chakra-ui/core'

import Control from '../Control'
import Error from '../ErrorInput'

import { useField } from 'react-final-form'

export default function InputControl({ name, label , type, maxlength}) {
  const { input, meta } = useField(name)
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
        type={type}
        maxLength={maxlength}
      />
      <Error name={name} />
    </Control>
  )
}
