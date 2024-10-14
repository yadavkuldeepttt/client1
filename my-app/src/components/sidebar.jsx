// Sidebar.js
import styled from "styled-components";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { CgUserList } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { BsBrightnessHigh } from "react-icons/bs";
import { useSection } from "./context/sectionContext";
import { CiGlobe } from "react-icons/ci";

const Sidebar = ({toggleTheme,toggleContextMenuProvider}) => {
  const { activeSection, setActiveSection } = useSection();
 

  return (
    <SidebarContainer>
      {/* {isMobile &&
      (activeSection === "messages" || activeSection === "groups") ? (
        <Logo>
          <img
            className="chain-image"
            src="/assets/Isolation_Mode.png"
            alt="Chatchain Logo"
          />
        </Logo>
      ) : (
        !isMobile && ( */}
          <Logo
            active={activeSection === "home"}
            onClick={() => setActiveSection("home")}
          >
            <img
              className="chain-image"
              src="/assets/Isolation_Mode.png"
              alt="Chatchain Logo"
            />
          </Logo>


      <div className="sidebar-icons">
        <NavItem
          active={activeSection === "myProfile"}
          onClick={() => setActiveSection("myProfile")}
        >
          <FaRegUser className="icon" />
        </NavItem>
        <NavItem
          active={activeSection === "messages"}
          onClick={() => setActiveSection("messages")}
        >
          <AiOutlineMessage className="icon" />
        </NavItem>
        <NavItem
          active={activeSection === "groups"}
          onClick={() => setActiveSection("groups")}
        >
          <FiUsers className="icon" />
        </NavItem>
        <NavItem
          active={activeSection === "contacts"}
          onClick={() => setActiveSection("contacts")}
        >
          <CgUserList className="icon" />
        </NavItem>
        <NavItem
          active={activeSection === "settings"}
          onClick={() => setActiveSection("settings")}
        >
          <GoGear className="icon" />
        </NavItem>
      </div>
      <div className="sidebar-icons">
        <NavItem
          active={activeSection === "register"}
          onClick={() => setActiveSection("register")}
        >
          <CiGlobe className="icon" />
        </NavItem>
        <NavItem onClick={toggleTheme}>
          <BsBrightnessHigh className="icon" />
        </NavItem>
        <NavItem>
          <FaRegUserCircle
            className="icon"
            active={activeSection === "login"}
            onClick={() => setActiveSection("login")}
          />
        </NavItem>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
   width: 70px;
  background-color: var(--sidebar-bg-color);
  color: white;
  display: flex;
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    background: var(--message-sidebar);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 7px 20px;
 
  }
`;
const Logo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 30px;
    height: 35px;
  }
  @media (max-width: 768px) {
    margin-bottom:0px;
  }
`;

const NavItem = styled.div`
  display: flex;
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
  @media (max-width: 600px) {
    .icon {
      font-size: 16px;
    }
    padding: 0px;
    color: var(--text-color);
    margin-bottom: 0.3rem;
  }
  @media (max-width: 768px) {
  }
`;


export default Sidebar;
