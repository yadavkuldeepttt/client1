import React from "react";
import styled from "styled-components";

// Sample partners data
const partners = [
  {
    name: "Partner 1",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 2",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 3",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 4",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 4",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 4",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
  {
    name: "Partner 4",
    image: "https://via.placeholder.com/100", // Replace with your image URL
  },
];

// About component
const PartnerSection = () => {
  return (
    <Container>
      <div className="partners-heading">
        <h4>Partners</h4>
      </div>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item" style={{ margin: "10px" }}>
            {/* <img src={partner.image}  /> */}
            {/* <h3>{partner.name}</h3> */}
          </div>
        ))}
      </div>
    </Container>
  );
};

// Styled components
const Container = styled.nav`
  margin-top: 3rem;

  padding: 3rem 20px;
  display: flex;
  width: 94.5vw;
  border-top: 1px solid #49dd69;
  border-bottom: 1px solid #49dd69;
  background: var(--sidebar-bg-color);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .partners-heading {
    font-family: "Poppins";
    h4 {
      color: #49dd69;
    }
  }
  .partners-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    max-width: 46vw;
    .partner-item {
      width: 90px;
      height: 90px;

      border-radius: 22px;

      background: #384f4f;
    }
  }
`;

export default PartnerSection;
