import React from 'react'
import Logo from '../../assets/pokemon-logo.png'

import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`

const Pokemon = styled.img`
    width: 433px;
    height: 188px;
    margin: 30px 0 50px 0;
`

export default function Header() {
    return (
        <Wrapper>
            <Pokemon src={Logo} className="Logo" alt="Logo Pokemon" />
        </Wrapper>
    )
}

