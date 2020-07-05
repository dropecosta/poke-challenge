import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalWraper = styled.div`
  .modal-overlay {
    display: -webkit-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 30px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    box-shadow: inset 0 0 30px #fff, inset 10px 0 50px #6c44fc,
      inset -10px 0 50px #0ff, inset 10px 0 300px #6c44fc,
      inset -10px 0 300px #0ff, 0 0 50px #fff, -10px 0 50px #6c44fc,
      10px 0 50px #0ff;

    .header-modal {
      display: flex;

      .title {
        text-transform: uppercase;
        color: #ffffff;
        position: relative;
        top: -30px;
        left: 20px;
      }
      img {
        width: 60px;
        transform: translateY(-50%);
        border-radius: 50%;
        box-shadow: 0px 5px 50px 0px #6c44fc,
          0px 0px 0px 7px rgba(255, 255, 255, 0.5);
      }
      .close {
        border: none;
        width: 48px;
        height: 48px;
        position: absolute;
        top: 20px;
        right: 30px;

        border: 2px solid #fff;
        background-color: transparent;
        letter-spacing: 0.2px;
      }
    }

    .row {
      display: flex;
      flex-direction: row;

      .moves {
        margin-top: 30px;

        .moves-item-title {
          color: #342866;
          text-transform: uppercase;
        }

        .tag-moves {
          padding: 5px 20px;
          background: #342866;
          color: #fff;
          font-size: 10.2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-block;
          margin: 3px 2px;
          border-radius: 2px;
        }
      }
    }

    .stats {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      @media (max-width: 700px) {
        flex-direction: column;
      }

      .stats-item {
        display: flex;
        flex-direction: column;
      }

      .stat-item-title {
        width: 100px;
        border: none;
        padding: 10px 10px;
        background: #342866;
        color: #fff;
        font-size: 0.6em;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        margin: 3px 2px;
        border-radius: 2px;

        @media (max-width: 1024px) {
          width: 80%;
        }
      }

      .stat-item-value {
        font-weight: normal;
        clear: both;
        font-weight: normal;
        color: #342866;
        padding-left: 10px;
      }
    }
  }
`;

const Modal = ({ data }) => {
  const [pokemon, setPokemon] = useState(data);

  useEffect(() => {
    setPokemon(data);
  }, [data]);

  const handleClose = () => setPokemon(null);

  if (pokemon?.id) {
    return (
      <ModalWraper>
        <div className="modal-dialog">
          <div className="header-modal">
            <img src={pokemon?.sprites?.front_default} alt={data?.name} />
            <h3 className="title">{pokemon?.name}</h3>
            <button className="close" onClick={handleClose}>
              <svg viewBox="0 0 20 20">
                <path
                  fill="#FFFFFF"
                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                />
              </svg>
            </button>
          </div>

          <div className="row">
            <div className="stats">
              {pokemon?.stats?.map((s, i) => (
                <div className="stats-item" key={i}>
                  <span className="stat-item-title">{s?.stat?.name}</span>
                  <span className="stat-item-value">{s?.base_stat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="moves">
              <div>
                <span className="moves-item-title">Moves</span>
              </div>
              <div>
                {pokemon?.moves?.map((m, i) => (
                  <span className="tag-moves" key={i}>
                    {m?.move?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-overlay"></div>
      </ModalWraper>
    );
  }
  return "";
};

export default Modal;
