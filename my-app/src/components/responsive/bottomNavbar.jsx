import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";

function BottomNavbar({ activeSection, setActiveSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
    <Container>
      {activeSection === "groups" ? (
        <NavItem
          active={activeSection === "messages"}
          onClick={() => handleNavClick("messages")}
        >
          <AiOutlineMessage className="icon" />
          <span>Chats</span>
        </NavItem>
      ) : (
        <NavItem
          active={activeSection === "groups"}
          onClick={() => handleNavClick("groups")}
        >
          <FiUsers className="icon" />
          <span>Groups</span>
        </NavItem>
      )}
      <NavItem
        active={activeSection === "myProfile"}
        onClick={() => handleNavClick("myProfile")}
      >
        <FaRegUser className="icon" />
        <span>Profile</span>
      </NavItem>
      <NavItem      active={activeSection === "register"}
        onClick={() => handleNavClick("register")}>
        <CiGlobe className="icon" />
        <span>Updates</span>
      </NavItem>
      {/* <NavItem>
        <CgUserList className="icon" />
        <span>Contacts</span>
      </NavItem> */}
      <NavItem
        active={activeSection === "settings"}
        onClick={() => handleNavClick("settings")}
      >
        <GoGear className="icon" />
        <span>Settings</span>
      </NavItem>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 2px 0;
  background-color: var(--sidebar-bg-color);
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  align-items: center;
  padding: 10px 15px;
  color: ${(props) => (props.active ? "#64D895" : "#5c5c5c")};
  cursor: pointer;
  &:hover {
    color: #64d895;
  }
  .icon {
    font-size: 23px;
  }
  span {
    font-size: 13px;
    letter-spacing: 0.06rem;
  }
  @media (max-width: 600px) {
    .icon {
      font-size: 20px;
    }
  }
`;

export default BottomNavbar;
