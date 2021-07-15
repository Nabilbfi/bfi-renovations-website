import React from "react"
import styled from "styled-components"

import Mastercard from "../images/payment/mastercard.svg"
import Visa from "../images/payment/visa.svg"
import Amex from "../images/payment/amex.svg"

const Flex = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }

  img {
    width: 40px;
  }
`

export default function PaymentMethods() {
  return (
    <div>
      <p className="body--small">We accept:</p>
      <Flex>
        <img src={Mastercard} alt="" />
        <img src={Visa} alt="" />
        <img src={Amex} alt="" />
      </Flex>
    </div>
  )
}
