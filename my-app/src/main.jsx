import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChatProvider } from "./components/context/chatContext.jsx";
import { SectionProvider } from "./components/context/sectionContext.jsx";
import { GroupProvider } from "./components/context/groupContext.jsx";

createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <GroupProvider>
      <SectionProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </SectionProvider>
    </GroupProvider>
  </ChatProvider>
);
