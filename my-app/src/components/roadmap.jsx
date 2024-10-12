import React from "react";
import styled from "styled-components";

// Sample partners data
const roadmap = [
  {
    title: "Phase 1",
    list: [
      "Website Development",
      "Whitepaper creation",
      "Social Media Verification",
    ],
  },
  {
    title: "Phase 2",
    list: [
      "Website Development",
      "Whitepaper creation",
      "Social Media Verification",
    ],
  },

];

// fearures component
const Roadmap = () => {
  return (
    <Container>
      <div className="roadmap-section">
        <div className="roadmap-heading2">
          <h2> ROADMAP</h2>
        </div>

        <div className="roadmap-list">
          {roadmap.map((feature, index) => (
            <div
              key={index}
              className={`feature-item ${index % 2 === 0 ? "left" : "right"}`}
              style={{ margin: "10px" }}
            >
              <h3>{feature.title}</h3>
              <ul>
                {feature.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
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
  padding: 30px 20px;
  width: 94.5vw;

  .roadmap-section {
    padding: 20px 7rem;
    .roadmap-heading2 {
      text-align: center;
    
      h2 {
        font-family: 'Terminator';
        color: var(--home-main-color);
      }
    }

    .roadmap-list {
      padding-top: 2rem;
      display: flex;
      gap: 1rem;

      flex-direction: column;
      margin-top: 1rem;
      .feature-item {
        max-width: 400px;
        position: relative;
        max-height: 50vh;
        padding: 18px;
        border: 2px solid var(--home-green-color);
        background-color: var(--background-color);
        border-radius: 22px;
        gap: 1rem;
        cursor: pointer;
        transition: background 0.5s ease-in-out;
        &:hover{
          background: var(--home-hover-color)
        }
        ul {
          padding: 18px;
          li {
            font-size: 13px;
          }
        }
        &.left {
          margin-left: 0; /* Align to the left by default */
          align-self: flex-start;
        }

        &.right {
          margin-left: auto; /* Push it to the right */
          align-self: flex-end;
        }

        &.left::after {
          content: "";
          position: absolute;
          width: 20px; /* Diameter of the circle */
          height: 20px;
          background-color: var(--home-green-color); /* Circle color */
          border-radius: 50%;
          top: -22px; /* Position circle above the item */
          left: 223%;
          transform: translateX(-50%);
        }
        &.right::after {
          content: "";
          position: absolute;
          width: 20px; /* Diameter of the circle */
          height: 20px;
          background-color: var(--home-blue-color); /* Circle color */
          border-radius: 50%;
          top: 191px;
          right: 203%;
          transform: translateX(-50%);
        }

        &.left::before {
          content: "";
          position: absolute;
          top: 0;
          left: 222%;
          /* transform: translateX(-50%); */
          width: 3px;
          height: 60vh;
          background: linear-gradient(90deg, var(--home-green-color) 0%, var(--home-blue-color) 100%);
          z-index: 1;
        }
      }
    }
  }
`;

export default Roadmap;
