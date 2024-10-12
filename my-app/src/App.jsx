import { useState } from "react";
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

// import Login from './components/Login'
// import Register from './components/Register'

function App() {
  const [activeSection, setActiveSection] = useState("myProfile"); // Default active section
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Conditionally render Sidebar only if not on Login or Register */}
      {activeSection !== "login" && activeSection !== "register" && (
        <Container>
          <Sidebar>
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
            <div>
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
            <div>
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
          </Sidebar>
          {/* main content */}
          <Main activeSection={activeSection} setActiveSection={setActiveSection} />
        </Container>
      )}

      {/* Directly render Main component if on Login or Register */}
      {activeSection === "login" && <Login  setActiveSection={setActiveSection}/>}
      {activeSection === "register" && <Register setActiveSection={setActiveSection}/>}
      
    </>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh; // Full viewport height
  background-color: #f0f0f0;
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
`;

const Logo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  .chain-image {
    width: 30px;
    height: 35px;
    margin-right: 10px;
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
`;

export default App;
