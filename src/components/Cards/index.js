import React from 'react'
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Card = styled.div`
  border: rgba(255, 255, 255, .1) 3px solid;
  border-radius: 12px;
  box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.2);
  padding: 1rem;
  height: 10rem;
  transition: 0.5s ease;

  &:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
}

  img {
  width: 60px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px rgb(108, 68, 252), 0px 0px 0px 7px rgba(107, 74, 255, 0.5);
  }

  .title {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    margin-top: -70px;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.05em;
    color: #FFF;
  }

  .profile-info {
    width: 100%;
    margin-top: -20px;
    padding-bottom: 40px;
    transition: all .3s;
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .profile-info-item{
    padding: 10px 0;
    min-width: 90px;
  }

  .profile-info-number{
    font-weight: 700;
    font-size: 24px;
    color: rgb(13, 58, 92);
  }

  button {
    background: linear-gradient(45deg, rgb(108, 68, 252), #0e71c8);
    box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);
    border: none;
    font-weight: 700;
    font-size: 16px;
    margin: 15px auto 0;
    padding: 10px 40px;
    min-width: 200px;
    border-radius: 50px;
    min-height: 45px;
    color: #fff;
    cursor: pointer;
    transition: all .3s;
    outline: none !important;

    &:hover {
    box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
    text-decoration: none;
    border: 0;
    }
  }
`

export default function Cards() {
    return (
        <div>
            <CardWrapper>
              <Card>
                <img
                    src="https://bityli.com/87rXK"
                    alt="img pokemon"
                />
                <p className="title">Titulo</p>

                <div className="profile-info">
                    <div className="profile-info-item">
                    <div className="profile-info-number">1598</div>
                    <div>Followers</div>
                    </div>

                    <div className="profile-info-item">
                    <div className="profile-info-number">1598</div>
                    <div>Followers</div>
                    </div>

                    <div className="profile-info-item">
                    <div className="profile-info-number">1598</div>
                    <div>Followers</div>
                    </div>

                    <button>detalhes</button>
                </div>
              </Card>
              <Card>TWO</Card>
              <Card>THREE</Card>
              <Card>FOUR</Card>
              <Card>FIVE</Card>
              <Card>SIX</Card>
              <Card>SEVEN</Card>
              <Card>EIGHT</Card>
              <Card>NINE</Card>
              <Card>TEN</Card>
              <Card>ELEVEN</Card>
              <Card>TWELVE</Card>
            </CardWrapper>
            
        </div>
    )
}
