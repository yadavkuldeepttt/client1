import React from "react";
import styled from "styled-components";

// About component
const About = () => {
  return (
    <Container>
      <div className="about-section">
        <div className="about-image">
          <img src="/assets/Union.png" />
        </div>

        <div className="about-details">
          <label>About</label>
          <div className="about-details-heading">CHATCHAIN</div>
          <div className="about-details-text">
            Chatchain is a communication protocol on the Chain blockchain,
            offering text, voice, and video calls similar to Web2, but in a Web3
            environment. It utilizes Chain's low gas fees and stores messages
            and group chats on-chain. Privacy is a priority, with encrypted
            interactions and peer-to-peer audio/video calls via WebRTC to
            enhance security.
          </div>
          <div className="about-details-list">
            <ul>
              <li>Versatile Communication Protocol</li>
              <li>Efficient Utilization of Chain's Features</li>
              <li>Security and Privacy Emphasis</li>
            </ul>
          </div>
          <div className="about-details-buttons">
            <Button>Learn More</Button>
            <ButtonDapp>Dapp</ButtonDapp>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.nav`
  padding: 20px;
  display: flex;
  width: 94.5vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .about-section {
    display: flex;
    justify-content: center;
    gap: 7rem;
    padding: 15px;
    align-items: center;
    .about-image {
      img {
        width: 300px;
        max-width: 300px;
        height: auto;
      }
    }
    .about-details {
      width: 30vw;
      label {
        color: var(--home-main-color);
        font-weight: 600;
        font-size: 12px;
      }
      .about-details-heading {
        font-family: 'Terminator';
        font-size: 20px;
        font-weight: 600;
        color: var(--home-main-color);
        letter-spacing: 0.09rem;
      }
      .about-details-text {
        margin: 10px 0;
        font-size: 12px;
      }
      .about-details-list {
        padding: 15px 23px;
        ul li {
          color: var(--home-main-color);
          font-size: 13px;
        }
      }
      .about-details-buttons {
        display: flex;
        gap: 0.6rem;
        align-items: center;
        ButtonDapp {
          background: transparent;
        }
      }
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #a6fdb9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: var(--home-hover-color); /* Darker shade on hover */
  }
  &:focus{
    outline: none;
  }
`;
const ButtonDapp = styled.button`
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: var(--home-hover-color); /* Darker shade on hover */
    border: 1px solid var(--border-color);
  }
  &:focus{
    outline: none;
  }
`;

export default About;
