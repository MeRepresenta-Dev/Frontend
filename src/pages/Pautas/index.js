import React from "react"
import { useForm, useStep } from "react-hooks-helper"

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

import "./styles.css"

const steps = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
]

const defaultData = {
  firstName: "Jane",
  lastName: "Doe",
  nickName: "Jan",
  address: "200 South Main St",
  city: "Anytown",
  state: "CA",
  zip: "90505",
  email: "email@domain.com",
  phone: "+61 4252 454 332"
}

const CadastroPautas = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step

  const props = { formData, setForm, navigation };

  switch (id) {
    case 1:
      return <Step1 {...props} />
    case 2:
      return <Step2 {...props} />
    case 3:
      return <Step3 {...props} />
    default:
      return null
  }
};

export default CadastroPautas
