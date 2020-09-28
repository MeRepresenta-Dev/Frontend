import React from 'react'

import {
  FormErrorMessage,
} from '@chakra-ui/core'

import { useField } from 'react-final-form'

export default function Error({ name }) {
  const {
    meta: { error }
  } = useField(name, { subscription: { error: true } })
  return <FormErrorMessage>{error}</FormErrorMessage>
}
