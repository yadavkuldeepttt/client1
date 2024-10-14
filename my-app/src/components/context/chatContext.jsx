// ChatContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// chatData.js
const chatData = [
    {
      id: 1,
      name: "John",
      message: "Hey! How are you?",
      avatar: "/assets/Layer_1.png",
      time: "12min",
      unreadCount: 2,
    },
    {
      id: 2,
      name: "Designer",
      message: "Yes, this is so cool!",
      avatar: "/assets/Layer_1.png",
      time: "12min",
      unreadCount: 2,
    },
    // Add more objects as needed
  ];

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(chatData);
  const [activeChat, setActiveChat] = useState(0);
  const [activeChatMobile, setActiveChatMobile] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveChatMobile(null);
    }
  }, [isMobile]);

  return (
    <ChatContext.Provider value={{ chats, setChats, activeChat, setActiveChat, activeChatMobile, setActiveChatMobile, isMobile }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for using the context
export const useChat = () => useContext(ChatContext);
