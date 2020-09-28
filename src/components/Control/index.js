import React from 'react'

import {
  FormControl,
} from '@chakra-ui/core'

import { useField } from 'react-final-form'


export default function Control({ name, ...rest }) {
  const {
    meta: { error, touched }
  } = useField(name, { subscription: { touched: true, error: true } })
  return <FormControl {...rest} isInvalid={error && touched} />
}
