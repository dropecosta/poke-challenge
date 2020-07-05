import React from 'react'
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #342866;
  padding: 20px;
  text-align: center;
  
  .copyright{
    font-size: 9.5px;
    color: #867abc;
    letter-spacing: 3.2px;
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
