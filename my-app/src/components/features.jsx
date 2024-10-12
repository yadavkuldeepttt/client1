import React from "react";
import styled from "styled-components";

// Sample partners data
const features = [
  {
    title: "Encryption",
    image: "/assets/Layer_1 (1).png",
    text: "Chatchain stores encrypted messages, decrypted upon wallet connection.",
  },
  {
    title: "Security",
    image: "/assets/Group 14.png", // Replace with your image URL
    text: "Messages are transactions with custom memos; use a burner wallet with 0.1 CHAIN for months.",
  },
  {
    title: "Video Calls",
    image: "/assets/Group 15.png", // Replace with your image URL
    text: "Video call your friends wallet to wallet, using WebRTC just like WhatsApp.",
  },
  {
    title: "Pictures",
    image: "/assets/Layer_1 (2).png", // Replace with your image URL
    text: "Post images stored on-chain storages like Arweave or IPFS..",
  },
  {
    title: "Audio Calls ",
    image: "/assets/Group 20.png", // Replace with your image URL
    text: "Chatchain stores encrypted messages, decrypted upon wallet connection.",
  },
  {
    title: "Payments ",
    image: "/assets/Vector.png", // Replace with your image URL
    text: "Chatchain stores encrypted messages, decrypted upon wallet connection.",
  },
];

// fearures component
const Features = () => {
  return (
    <Container>
      <div className="features-section">
        <div className="features-heading">
          <h4>Features</h4>
        </div>
        <div className="features-heading2">
          <h2>CHATCHAIN FEATURES</h2>
        </div>
        <div className="features-text">
          <span>
            Chatchain is a user-friendly protocol that allows users to
            communicate <br /> from wallet to wallet or between multiple
            wallets.
          </span>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item"
              style={{ margin: "10px" }}
            >
              <div>
                <img src={feature.image} />
              </div>
              <div className="feature-item-details">
                <h5>{feature.title}</h5>
                <span>{feature.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.nav`
  margin-top: 3rem;
  padding:30px 20px;
  display: flex;
  width: 94.5vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .features-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .features-heading {
      font-family: "Poppins";
      h4 {
        color: var(--home-main-color);
        letter-spacing: 0.09rem;
      }
    }
    .features-heading2 {
      font-family: 'Terminator';

      h2 {
        color: var(--home-main-color);
        font-size: 20px;
      }
    }
    .features-text {
      text-align: center;
      font-size: 11px;
    }
    .features-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      max-width: 60vw;
      .feature-item {
        width:230px;
        height:20vh;
        padding:15px;
        border: 2px solid var(--home-green-color);
        background-color: var(--background-color);
        border-radius: 22px;
        display: flex;
        flex-direction: row;
        gap:1rem;
        align-items: center;
        cursor: pointer;
        transition: background 0.5s ease-in-out;
        &:hover{
          background: var(--home-hover-color)
        }
        img {
          width: 55px;
          height: 55px;
        }
        .feature-item-details {
          display: flex;
          flex-direction: column;
          gap:1rem;
          span{
            font-size: 9px;
          }
        }
      }
    }
  }
`;

export default Features;
