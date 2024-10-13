import styled from "styled-components";
import { CgUserList } from "react-icons/cg";

function ContactFloatingIcon({setActiveSection}) {
  
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
    <NavItem onClick={()=>handleNavClick("contacts")}>
      <CgUserList className="icon" />
    </NavItem>
  );
}

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 10px;
  background-color: var(--button-green-color);
  border-radius: 50%;
  color: black;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 15%;
  right: 4%;
  z-index: 1000;
  display: none;  /* Initially hidden */
  &:hover {
    background-color: var(--home-main-color);
  }

  .icon {
    font-size: 23px;
  }

  span {
    font-size: 13px;
    letter-spacing: 0.06rem;
  }

  /* Show only on mobile screens */
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default ContactFloatingIcon;
