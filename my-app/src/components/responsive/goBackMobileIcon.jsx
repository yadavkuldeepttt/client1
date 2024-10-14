// components/GoBackMobileIcon.js
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { useSection } from "../context/sectionContext";

const GoBackMobileIcon = () => {
  const { setActiveSection } = useSection();

  return (
    <Container>
      <IoMdArrowBack className="icon" onClick={() => setActiveSection("messages")} />
    </Container>
  );
};

const Container = styled.div`
  /* Show only on mobile screens */
  @media (max-width: 768px) {
    display: flex; /* Show back icon */
    align-items: center;

    .icon {
      color: var(--text-color);
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: var(--button-hover-color);
      }
    }
  }
`;

export default GoBackMobileIcon;
