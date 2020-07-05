import React from "react";
import styled from "styled-components";
import Logo from "../../assets/pokemon-logo.png";

const HeaderWrapper = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;

  img {
    width: 433px;
    height: 188px;
    margin: 60px 0;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <img src={Logo} className="Logo" alt="Logo Pokemon" />
    </HeaderWrapper>
  );
}
