// Sidebar.js
import styled from "styled-components";

import { BsBrightnessHigh } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";

import { useSection } from "../context/sectionContext";
import { useChat } from "../context/chatContext";
import GoBackMobileIcon from "./goBackMobileIcon";

const TopMenuMobile = ({ toggleTheme, toggleContextMenuProvider }) => {
  const { activeSection, setActiveSection } = useSection();
  const { isMobile } = useChat();

  return (
    <TopHeader>
      {isMobile &&
      (activeSection === "messages" || activeSection === "groups") ? (
        <Logo>
          <img
            className="chain-image"
            src="/assets/Isolation_Mode.png"
            alt="Chatchain Logo"
          />
        </Logo>
      ) : (
        !isMobile && (
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
        )
      )}

      {isMobile &&
        activeSection !== "messages" &&
        activeSection !== "groups" && (
          <GoBackMobileIcon/>
        )}

      {/* mobile screen */}
      <div className="mobile-screen-menubutton">
        <NavItem onClick={toggleTheme}>
          <BsBrightnessHigh className="icon" />
        </NavItem>

        {/* Context Menu Trigger */}
        <NavItem
          onClick={(e) => {
            e.stopPropagation();
            toggleContextMenuProvider();
          }}
        >
          <FaEllipsisVertical className="icon" />
        </NavItem>
      </div>
    </TopHeader>
  );
};

const TopHeader = styled.div`
  width: 70px;
  display: flex;
  background: var(--top-menu-mobile);
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color:var(--text-color);
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 7px 20px;
    .mobile-screen-menubutton {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
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
    margin-bottom: 0px;
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



export default TopMenuMobile;
