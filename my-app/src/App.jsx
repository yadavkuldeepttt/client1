import { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/main";
import styled from "styled-components";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa"; // Example icons
import { AiOutlineMessage } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { CgUserList } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { FaEllipsisVertical } from "react-icons/fa6";
import ContactFloatingIcon from "./components/responsive/contactFloatingIcon";
import BottomNavbar from "./components/responsive/bottomNavbar";
import { IoMdArrowBack } from "react-icons/io";
import ContextMenu from "./components/responsive/contextMenu";

// import Login from './components/Login'
// import Register from './components/Register'

function App() {
  const [activeSection, setActiveSection] = useState("messages"); // Default active section
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContextMenu, setShowContextMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const toggleContextMenu = () => {
    setShowContextMenu((prev) => !prev);
  };

  const closeContextMenu = () => {
    setShowContextMenu(false);
  };

  const menuOptions = [
    { label: "Login", onClick: () => setActiveSection("login") },
  ];


  return (
    <>
      {/* Conditionally render Sidebar only if not on Login or Register */}
      {activeSection !== "login" && activeSection !== "register" && (
        <Container  onClick={closeContextMenu}>
          <Sidebar>
            {/* Conditional rendering based on activeSection and isMobile */}
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
                  onClick={() => handleNavClick("home")}
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
                <GoBackMobileIcon>
                  <IoMdArrowBack
                    className="icon"
                    onClick={() => setActiveSection("messages")}
                  />
                </GoBackMobileIcon>
              )}

            <div className="sidebar-icons">
              <NavItem
                active={activeSection === "myProfile"}
                onClick={() => handleNavClick("myProfile")}
              >
                <FaRegUser className="icon" />
              </NavItem>
              <NavItem
                active={activeSection === "messages"}
                onClick={() => handleNavClick("messages")}
              >
                <AiOutlineMessage className="icon" />
              </NavItem>
              <NavItem
                active={activeSection === "groups"}
                onClick={() => handleNavClick("groups")}
              >
                <FiUsers className="icon" />
              </NavItem>
              <NavItem
                active={activeSection === "contacts"}
                onClick={() => handleNavClick("contacts")}
              >
                <CgUserList className="icon" />
              </NavItem>
              <NavItem
                active={activeSection === "settings"}
                onClick={() => handleNavClick("settings")}
              >
                <GoGear className="icon" />
              </NavItem>
            </div>
            <div className="sidebar-icons">
              <NavItem
                active={activeSection === "register"}
                onClick={() => handleNavClick("register")}
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
                  onClick={() => handleNavClick("login")}
                />
              </NavItem>
            </div>
            {/* mobile screen */}
            <div className="mobile-screen-menubutton">
              <NavItem onClick={toggleTheme}>
                <BsBrightnessHigh className="icon" />
              </NavItem>

              {/* Context Menu Trigger */}
              <NavItem
                onClick={(e) => {
                  e.stopPropagation();
                  toggleContextMenu();
                }}
              >
                <FaEllipsisVertical className="icon" />
              </NavItem>
            </div>
          </Sidebar>
          {/* main content */}
          <Main
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Context Menu for mobile screen */}
          {showContextMenu && (
            <ContextMenu options={menuOptions} onClose={closeContextMenu} />
          )}
        </Container>
      )}

      {/*mobile screen layout  */}

      {/* floating icon */}
      {(activeSection === "messages" || activeSection === "groups") && (
        <ContactFloatingIcon setActiveSection={setActiveSection} />
      )}

      {/* bottom navbar */}
      {(activeSection === "messages" || activeSection === "groups") && (
        <BottomNavbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}
      {/* Directly render Main component if on Login or Register */}
      {activeSection === "login" && (
        <Login setActiveSection={setActiveSection} />
      )}
      {activeSection === "register" && (
        <Register setActiveSection={setActiveSection} />
      )}
    </>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh; // Full viewport height
  background-color: #f0f0f0;
  // Adjust layout on smaller screens
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    .sidebar-icons {
      display: none;
    }
  }
`;

const Sidebar = styled.div`
  width: 70px;
  background-color: var(--sidebar-bg-color);
  color: white;
  display: flex;
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .mobile-screen-menubutton {
    display: none;
  }

  @media (max-width: 600px) {
    background: var(--message-sidebar);
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
  .chain-image {
    width: 30px;
    height: 35px;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    .chain-image {
      width: 25px;
      height: 28px;
      margin-right: 0px;
    }
    /* Show only on mobile screens */

    display: flex; // Flex to center the logo on mobile
  }
`;

const GoBackMobileIcon = styled.div`
  display: none; /* Hide by default */

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

export default App;
