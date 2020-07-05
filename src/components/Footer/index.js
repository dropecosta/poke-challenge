import React from 'react'
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #342866;
  padding: 20px;
  text-align: center;
  
  .copyright{
    font-size: 0.6em;
    color: #867abc;
    letter-spacing: .2em;
    text-transform: uppercase;
  }
;`

export default function Footer() {
    return (
        <FooterWrapper className="footer">
            <p className="copyright">Made by Pedro Reis © 2020</p>
        </FooterWrapper>
    )
}
