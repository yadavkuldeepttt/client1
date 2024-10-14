import { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/main";
import styled from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactFloatingIcon from "./components/responsive/contactFloatingIcon";
import BottomNavbar from "./components/responsive/bottomNavbar";
import ContextMenu from "./components/responsive/contextMenu";
import { useChat } from "./components/context/chatContext";
import Sidebar from "./components/sidebar";
import { useSection } from "./components/context/sectionContext";
import { useGroup } from "./components/context/groupContext";
import TopMenuMobile from "./components/responsive/topMenuMobile";

function App() {
  const { activeSection, setActiveSection } = useSection();
  const { activeChatMobile, isMobile } = useChat();
  const { activeGroupMobile } = useGroup();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  };

  const toggleContextMenuProvider = () => {
    setShowContextMenu((prev) => !prev);
  };

  const closeContextMenu = () => {
    setShowContextMenu(false);
  };

  const menuOptions = [
    { label: "Login", onClick: () => setActiveSection("login") },
    { label: "Settings", onClick: () => setActiveSection("settings") },
  ];

  return (
    <>
      {/* Conditionally render Sidebar only if not on Login or Register */}
      {activeSection !== "login" && activeSection !== "register" && (
        <Container onClick={closeContextMenu}>
          {isMobile ? (
            // Only show TopMenuMobile when in messages or groups
            activeSection === "messages" || activeSection === "groups" ? (
              // Ensure that no chat or group is currently active
              activeChatMobile === null &&
              activeGroupMobile === null && (
                <TopMenuMobile
                  toggleTheme={toggleTheme}
                  toggleContextMenuProvider={toggleContextMenuProvider}
                />
              )
            ) : null // Don't render anything for other sections
          ) : (
            // Render Sidebar for non-mobile screens
            <Sidebar
              toggleTheme={toggleTheme}
              toggleContextMenuProvider={toggleContextMenuProvider}
            />
          )}

          {/* main content */}
          <Main />

          {/* Context Menu for mobile screen */}
          {showContextMenu && (
            <ContextMenu options={menuOptions} onClose={closeContextMenu} />
          )}
        </Container>
      )}

      {/* Mobile screen layout */}
      {activeSection === "messages" || activeSection === "groups"
        ? // Only show icons if no chat or group is selected
          activeChatMobile === null &&
          activeGroupMobile === null && (
            <>
              <ContactFloatingIcon />
              <BottomNavbar />
            </>
          )
        : ""}

      {/* Directly render Main component if on Login or Register */}
      {activeSection === "login" && <Login />}
      {activeSection === "register" && <Register />}
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

export default App;
