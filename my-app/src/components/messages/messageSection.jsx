import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import Chatbox from "../chat/chatbox";

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
const MessageSection = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchChats = () => {
      setChats(chatData);
    };

    fetchChats();
  }, []);
  return (
    <>
      <Container>
        <div className="message-sidebar">
          {/* Logo */}

          <div className="maintitle">MESSAGES</div>
          {/* Search Bar */}
          <div className="searchbar">
            <input type="text" placeholder="search messages and names" />
          </div>

          {/* Chat List */}
          <div className="chatlist">
            {/* Your chat items will go here */}
            {chats.map((chat) => (
              <div key={chat.id} className="chat-item">
                <div className="chat-item-left">
                  <img className="i" src={chat.avatar} alt="User Avatar" />
                  <div className="chat-item-details">
                    <div className="chat-item-name">{chat.name}</div>
                    <div className="chat-item-message">
                      {chat.message} ({chat.unreadCount})
                    </div>
                  </div>
                </div>
                <div className="chat-item-right">
                  <div className="chat-item-message">{chat.time}</div>
                </div>
              </div>
            ))}
            {/* Add more chat items as needed */}
          </div>
        </div>

        {/* main content- message display */}
        <Chatbox/>
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .message-sidebar {
    flex: 1; /* Take up one part of the container */
    background: var(--message-sidebar);
    padding: 20px 14px; /* Add some padding */
    display: flex;
    max-width: 21vw;
    height: 100vh;
    flex-direction: column; /* Arrange items vertically */
    .maintitle {
      font-family: "Terminator";
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.09rem;
      line-height: 36px;
      text-align: left;
      color: var(--button-green-color);
    }
    .chatlist {
      flex: 1; /* Take up remaining space */
      overflow-y: auto; /* Allow scrolling if content overflows */
      margin-bottom: 20px; /* Space below chat list */
      padding: 8px; /* Padding inside the chat list */
      .chat-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding:8px 7px ;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
          background: #64d895;
          color: black;
        }
        .chat-item-left {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.6rem;
          img {
            width: 32px;
            margin-top: 0.25rem;
            height: 33px;
          }

          .chat-item-name {
            font-size: 15px;
            line-height: 28px;
            font-weight: bold;
            color: var(--chat-item-name);
          }
          .chat-item-message {
            font-size: 11px;
          }
        }
        .chat-item-right {
          font-size: 11px;
        }
      }
    }
    .searchbar {
      input {
        width: 100%;
        padding: 10px 12px;
        gap: 8px;
        margin: 10px 0;
        border-radius: 7px;
        opacity: 0px;
        outline: none;
        border: none;
        background: #ffffff3d;
      }
      ::placeholder {
        font-size: 11px;
        letter-spacing: 0.09rem;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }
  }

  .mainContent {
    flex: 2; /* Take up two parts of the container */
    display: flex;
    flex-direction: column; /* Arrange items vertically */
    background-color: #fff; /* White background for main content */
    .top-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: var(--message-sidebar);
      padding: 10px 15px;
      border-bottom: 2px solid #384f4f;
      border-left: 1px solid #64d895;
      .top-header-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.6rem;
        img {
          width: 32px;
          margin-top: 0.25rem;
          height: 33px;
        }
        .top-header-item-name {
          font-size: 15px;
          line-height: 28px;
          font-weight: bold;
          color: var(--chat-item-name);
        }
        .top-header-item-message {
          font-size: 11px;
        }
      }
      .top-header-right {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        .icon {
          font-size: 22px;
        }
      }
    }
  
  }
`;

export default MessageSection;
