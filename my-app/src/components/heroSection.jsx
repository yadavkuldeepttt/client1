import React from "react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

// HeroSection component
const HeroSection = () => {
  return (
    <Container>
      <div className="buttons">
        <Button>Sign In</Button>
        <Button>Sign In</Button>
        <Button>Sign In</Button>
      </div>
      <div className="hero-section-heading">
        <span>CHATCHAIN</span>- CHAIN COMMUNICATION <br /> PROTOCOL
      </div>
      <div className="hero-section-text">
        <span>
          Elevate Your Conversations: Seamless Communication on the Chain
          Blockchain with ChatChain
        </span>
      </div>
      <div className="hero-section-link">
      <ButtonChat><span>Chatchain Dapp</span> <FaLongArrowAltRight /> </ButtonChat>
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.nav`
  margin-top: 2.8rem;
  display: flex;
  width: 94.5vw;
  padding:20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .buttons {
    display: flex;
    align-items: center;
    gap: 6rem;
    Button {
      font-weight: 600;
      font-size: 13px;
    }
  }
  .hero-section-heading {
    font-family: "Terminator";
    margin-top: 2.5rem;
    font-size: 59px;
    font-weight: 500;
    line-height: 74px;
    letter-spacing: 0.1rem;
    text-align: center;
    span {
      color: var(--home-main-color);
    }
  }
  .hero-section-text {
    font-size: 16px;
    font-weight: 400;
    margin-top: 1rem;
    line-height: 28px;
    text-align: left;
  }
  .hero-section-link{
     margin-top:3rem
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
const ButtonChat = styled.button`
  padding: 10px 15px;
  background: linear-gradient(270deg, #67EDDC 0%, #6099E8 100%);
  border: none;
  display: flex;
  align-items: center;
  gap:0.2rem;
  border-radius: 5px;
  cursor: pointer;
  color: #0a0a0a;
  font-size: 12px;
  font-weight: 600;

  &:hover {
    background: linear-gradient(270deg, #6099E8 0%, #67EDDC 100%);
  }
  &:focus{
    outline: none;
  }
`;
export default HeroSection;
