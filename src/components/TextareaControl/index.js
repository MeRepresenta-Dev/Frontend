import React from 'react'
import {
  FormLabel,
  Textarea
} from '@chakra-ui/core'

import { Field } from 'react-final-form'

import Control from '../../components/Control'
import Error from '../../components/ErrorInput'

const AdaptedTextarea = ({ input, meta, ...rest }) => (
  <Textarea {...input} {...rest} isInvalid={meta.error && meta.touched} />
)

export default function TextareaControl({ name, label }) {
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field
        name={name}
        component={AdaptedTextarea}
        placeholder={label}
        id={name}
      />
      <Error name={name} />
    </Control>
  )
}