import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Pokemons } from "../../api/card";
import Card from "../Card";
import Pagination from "../Pagination";

const CardContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 50px;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 50px;
  }
  @media (max-width: 599px) {
    padding: 0 30px;
  }
`;

const Cards = () => {
  const [data, setData] = useState([]);

  const getPokemons = async ({ url }) => {
    const response = await Pokemons({ url });
    setData(response);
  };

  useEffect(() => {
    getPokemons({});
  }, []);

  const updatePagination = ({ url }) => {
    getPokemons({ url });
  };

  return (
    <div>
      <CardContainer>
        {data?.results?.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </CardContainer>
      <Pagination data={data} handleGet={updatePagination} />
    </div>
  );
};

export default Cards;
