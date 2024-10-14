// groupContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const groupsData = [
    {
      id: "rwe4j3n2n32n232454dfkd",
      groupName: "Designer",
      contacts: [
        {
          id: 1,
          name: "Alberte Robert",
          message: "Let's catch up soon!",
          status: "online",
        },
        {
          id: 2,
          name: "Lisa Williams",
          message: "Are you free this weekend?",
          status: "offline",
        },
        {
          id: 3,
          name: "Lisa Williams",
          message: "Are you free this weekend?",
          status: "offline",
        },
        {
          id: 4,
          name: "Lisa Williams",
          message: "images",
          status: "offline",
          imageMessage: "/assets/Mask group.png",
        },
      ],
    },
    {
      id: "sjwi32323n2n3j2n3232",
      groupName: "General",
      contacts: [
        {
          id: 3,
          name: "John Smith",
          message: "Meeting at 10 AM tomorrow.",
        },
        {
          id: 4,
          name: "Samantha Green",
          message: "Project updates needed by EOD.",
        },
      ],
    },
    {
      id: "we4p3343434l3mn4k3j4vg3",
      groupName: "Reporting",
      contacts: [
        {
          id: 3,
          name: "John Smith",
          message: "Meeting at 10 AM tomorrow.",
        },
        {
          id: 4,
          name: "Samantha Green",
          message: "Project updates needed by EOD.",
        },
      ],
    },
    // Add more groups as needed
  ];

// Create context
const GroupContext = createContext();

// Context provider component
export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeGroupMobile, setActiveGroupMobile] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Fetch groups data on component mount
  useEffect(() => {
    const fetchContacts = () => {
      setGroups(groupsData);
    };

    fetchContacts();
  }, []);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GroupContext.Provider value={{ groups, activeGroup, setActiveGroup, activeGroupMobile, setActiveGroupMobile, isMobile }}>
      {children}
    </GroupContext.Provider>
  );
};

// Custom hook for using context
export const useGroup = () => useContext(GroupContext);
