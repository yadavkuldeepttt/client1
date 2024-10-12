import styled from "styled-components";

import MessageSection from "../components/messages/messageSection";
import ContactSection from "../components/contacts/contactSection";
import ProfileSection from "../components/myProfile/profileSection";
import GroupSection from "../components/groups/groupSection";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "./home";
import SettingSection from "../components/settings/settingSection";

const Main = ({ activeSection }) => {
  
  return (
    <MainContent>
      {activeSection === "messages" && <MessageSection  />}
      {activeSection === "contacts" && <ContactSection  />}
      {activeSection === "myProfile" && <ProfileSection  />}
      {activeSection === "groups" && <GroupSection  />}
      {activeSection === "settings" && <SettingSection  />}
      {activeSection === "login" && <Login/>}
      {activeSection === "globe" && <Register/>}
      {activeSection === "home" && <Home/>}
     </MainContent>
  );
};

const MainContent = styled.div`
  flex: 1;

  display: flex;
  width: 94.8vw;
  flex-direction: column;
`;

export default Main;
