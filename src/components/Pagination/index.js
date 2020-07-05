import React from 'react'
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 30px 0 60px;

  button {
    border: 2px solid #342866;
    background: transparent;
    font-weight: 700;
    font-size: 0.8em;
    text-transform: uppercase;
    margin: 15px auto 0;
    min-width: 200px;
    border-radius: 4px;
    min-height: 45px;
    color: #342866;
    cursor: pointer;
    transition: all .3s;
    outline: none !important;
    padding: 0.6em 1.2em;

    &:hover {
      box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
      background: #342866;
      color: #FFFFFF;
      text-decoration: none;
    }
  }
`
const Pagination = ({ data, handleGet }) => {
    const handleOnPress = (url) => handleGet({ url });
  
    return (
      <PaginationWrapper>
        <button
          disabled={!data?.previous}
          onClick={() => handleOnPress(data?.previous)}
        >
          Prev page
        </button>
        <button
          disabled={!data?.next}
          onClick={() => handleOnPress(data?.next)}
        >
          Next page
        </button>
      </PaginationWrapper>
    );
  };
  
  export default Pagination;