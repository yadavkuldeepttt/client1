import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  const [activeChat, setActiveChat] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
     if(!isMobile){
      setActiveChat(0);
     }
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate fetching data
    const fetchChats = () => {
      setChats(chatData);
    };

    fetchChats();
  }, []);

  return (
    <Container>
      {isMobile ? (
        activeChat !== null ? ( // Mobile view: show Chatbox if there's an active chat
          chats.length > 0 && (
            <Chatbox
              chats={chats}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
              isMobile={isMobile}
            />
          )
        ) : (
          // Mobile view: show message sidebar if no active chat
          <div className="message-sidebar">
            <div className="maintitle">MESSAGES</div>

            {/* Search Bar */}
            <div className="searchbar">
              <input type="text" placeholder="Search messages and names" />
            </div>

            {/* Chat List */}
            <div className="chatlist">
              {chats.map((chat, chatIndex) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chatIndex)}
                  className={`chat-item ${
                    activeChat === chatIndex ? "active" : ""
                  }`}
                >
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
                    <div className="chat-item-time">{chat.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        // Desktop view: show both message sidebar and Chatbox
        <>
          <div className="message-sidebar">
            <div className="maintitle">MESSAGES</div>

            {/* Search Bar */}
            <div className="searchbar">
              <input type="text" placeholder="Search messages and names" />
            </div>

            {/* Chat List */}
            <div className="chatlist">
              {chats.map((chat, chatIndex) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chatIndex)}
                  className={`chat-item ${
                    activeChat === chatIndex ? "active" : ""
                  }`}
                >
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
                    <div className="chat-item-time">{chat.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {chats.length > 0 ? (
            <Chatbox chats={chats} activeChat={activeChat} />
          ) : (
            <div>No chats available</div>
          )}
        </>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .message-sidebar {
    flex: 1;
    background: var(--message-sidebar);
    padding: 20px 14px;
    display: flex;
    max-width: 21vw;
    height: 100vh;
    flex-direction: column;

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
      flex: 1;
      overflow-y: auto;
      margin-bottom: 30px;
      padding: 8px;
      &::-webkit-scrollbar {
        width: 5px;
      }

      .chat-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding: 8px 7px;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          background: var(--green-color);
          color: black;
        }

        &.active {
          background-color: var(--green-color);
          border-left: 5px solid var(--green-color);
        }

        .chat-item-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;

          img {
            width: 32px;
            height: 33px;
            margin-top: 0.25rem;
          }

          .chat-item-name {
            font-size: 15px;
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
        margin: 10px 0;
        border-radius: 7px;
        border: none;
        background: #ffffff3d;
        outline: none;
        font-size: 11px;
        color: #333;
      }

      input::placeholder {
        font-size: 11px;
        letter-spacing: 0.09rem;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 600px) {
    .message-sidebar {
      max-width: 100vw;
      padding: 0px 10px 10px;

      .maintitle {
        display: none;
      }

      .chatlist {
        padding: 0px;
      }

      .searchbar {
        input {
          margin-top: 0px;
        }
      }
    }
  }
`;

export default MessageSection;
