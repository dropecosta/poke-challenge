import React from "react";
import styled from "styled-components";

import Cards from "../Cards"
import Pagination from "../Pagination"

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1020px) {
    padding: 0 30px;
  }
`;



export default function Main() {
  return (
    <Container>
      <Cards />
      <Pagination />
    </Container>
  );
}
