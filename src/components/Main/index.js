import React from "react";
import styled from "styled-components";

import Cards from "../Cards"

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <Container>
      <Cards />
    </Container>
  );
}

export default Main
