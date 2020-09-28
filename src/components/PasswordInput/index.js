import React from 'react'

import {
  FormLabel,
  Input,
} from '@chakra-ui/core'

import Control from '../Control'

export default function PasswordInput({ name, label }) {
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        pr="4.5rem"
        id={name}
        type="password"
        placeholder={label}
      />
    </Control>
  );
}