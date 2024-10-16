import React from "react";
import styled from "styled-components";

// fearures component
const Footer = () => {
  return (
    <Container>
      <div className="footer-section">
        <div className="footer1">
          <div>
            <h2>
              UNLOCK THE FUTURE <br /> OF COMMUNICATION <br /> WITH CHATCHAIN
            </h2>
          </div>
          <div className="footer1-buttons">
            <ButtonLearn>Learn More</ButtonLearn>
            <ButtonChain> Chatchain app</ButtonChain>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2-detail">
            <h2>
            CHATCHAIN: REDEFINING COMMUNICATION <br/> ON 
            CHAIN BLOCKCHAIN
            </h2>
            <span>
              Empowering communication on the Chain blockchain - Chatchain,
              where Web3 meets seamless text, voice, and video interactions.
              Experience the future with low gas fees, on-chain storage, and
              top-notch privacy.
            </span>
          </div>
          <div className="footer1-buttons">
            <Button>Buy Chatchain on Jupiter</Button>
          </div>
        </div>
        <div className="rights">
        © 2024 Chatchain. All rights reserved.
        </div>
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.nav`
  margin-top: 3rem;
  padding: 30px 20px;
  display: flex;
  width: 94.5vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .footer-section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer1 {
      max-width: 80vvw;
      width: 60vw;
      height: 200px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      border-radius: 30px;
      opacity: 0px;
      background: linear-gradient(90deg, var(--home-green-color) 0%, var(--home-blue-color) 100%);
      h2{
        font-family: 'Terminator';
      }
    }
    .footer1-buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
    .footer2 {
      width: 94.5vw;
      border-top: 1px solid var(--home-main-color);
      border-bottom: 1px solid var(--home-main-color);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding:35px 30px;
      margin: 4rem 0;
      background: var(--background-color);
      h2 {
        font-family: 'Terminator';
        color: var(--home-main-color);
      }
      .footer2-detail{
        display: flex;
        flex-direction: column;
        width:50vw;
        span{
            font-size: 13px;
            margin-top:0.6rem;
        }
      }
    }
    .rights{
        text-align: center;

    }
  }
`;

const ButtonLearn = styled.button`
  padding: 10px 20px;
  background: #141414;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: #333333; /* Darker shade on hover */
  }
  &:focus{
    outline: none;
  }
`;
const ButtonChain = styled.button`
  padding: 10px 15px;
  background: #ffffff3d;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 11px;
  font-weight: 500;

  &:hover {
    background: var(--home-hover-color); /* Darker shade on hover */
  }
  &:focus{
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: var(--home-green-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: var(--home-hover-color); /* Darker shade on hover */
  }
  &:focus{
    outline: none;
  }
`;
export default Footer;
