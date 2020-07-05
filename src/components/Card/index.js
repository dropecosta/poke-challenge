import React, { useState } from "react";
import styled from "styled-components";
import { Pokemon } from "../../api/card";
import Modal from "../Modal";
import imgPokemon from "../../assets/pokebola.png";

const CardWrapper = styled.div`
  border: rgba(255, 255, 255, 0.1) 2px solid;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 20px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  }

  img {
    width: 60px;
    transform: translateY(-50%);
    border-radius: 50%;
    box-shadow: 0px 5px 50px 0px #6c44fc,
      0px 0px 0px 7px rgba(255, 255, 255, 0.5);
  }

  .title {
    text-align: right;
    text-transform: uppercase;
    margin-top: -70px;
    margin-right: 10px;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.8px;
    color: #fff;
  }

  button {
    border: 2px solid #fff;
    background-color: transparent;
    letter-spacing: 0.2px;
    font-size: 12px;
    text-transform: uppercase;
    margin: 15px auto 0;
    padding: 10px 40px;
    width: 100%;
    color: #fff;
    cursor: pointer;
    outline: none !important;
    &:hover {
      text-decoration: none;
    }
  }

  button.outline {
    border: 0.1875rem solid #ea4c89;
    background-color: transparent;
    color: #ea4c89;
  }
  button.outline:focus,
  button.outline:hover {
    border-color: #ea4c89;
    color: #ea4c89;
  }
  button.outline:active {
    border-color: #ea4c89;
    color: #ea4c89;
  }
`;

const Card = ({ data }) => {
  const [details, setDetails] = useState(null);

  const handleGetDetails = async () => {
    const { url } = data;
    const response = await Pokemon({ url });
    setDetails(response);
  };

  return (
    <div>
      <CardWrapper>
        <img src={imgPokemon} alt={data?.name} />
        <p className="title">{data?.name}</p>
        <div className="profile-info">
          <button onClick={handleGetDetails}>Details</button>
        </div>
      </CardWrapper>
      <Modal data={details} />
    </div>
  );
};

export default Card;
