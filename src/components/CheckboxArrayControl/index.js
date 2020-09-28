import React from 'react'
import {
  Checkbox
} from '@chakra-ui/core'

import { useField } from 'react-final-form'

export default function CheckboxArrayControl({ name, value, children }) {
  const {
    input: { checked, ...input },
    meta: { error, touched }
  } = useField(name, {
    type: 'checkbox', // important for RFF to manage the checked prop
    value // important for RFF to manage list of strings
  })
  return (
    <Checkbox {...input} isChecked={checked} isInvalid={error && touched}>
      {children}
    </Checkbox>
  )
}
