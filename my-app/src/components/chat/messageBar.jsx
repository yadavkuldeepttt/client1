import React from "react";

import { BsEmojiSmile } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import styled from "styled-components";

const MessageBar = () => {
  return (
    <>
      <ChatBottom>
        <div className="message-bar">
          {/* <input type="text" placeholder="Type Message" /> */}
          <textarea placeholder="Type Message" rows="1" />
        </div>
        <div className="icons">
          <BsEmojiSmile className="icon" />
          <IoIosAttach className="icon" />
          <div className="send-icon">
            <BsFillSendFill className="icon2" />
          </div>
        </div>
      </ChatBottom>
    </>
  );
};

const ChatBottom = styled.div`
  background: var(--message-sidebar);
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 10px 25px 8px 25px;
  .message-bar {
    flex-shrink: 0;
    flex: 1;
    textarea {
      background: var(--message-bar-input);
      padding: 10px 12px;
      gap: 8px;
      margin: 10px 0;
      border-radius: 7px;
      opacity: 0px;
      outline: none;
      width: 100%;
      border: none;
      color: var(--text-color);
      overflow:hidden;  
      resize: none;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    font-size: 20px;
    cursor: pointer;
    .icon {
      &:hover {
        color: var(--icon-hover-color);
      }
    }
    .send-icon {
      background: linear-gradient(360deg, #61a4e7 0%, #a6fdb9 100%);
      padding: 7px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      &:hover {
        background: linear-gradient(360deg, #a6fdb9 0%, #61a4e7 100%);
      }
      .icon2 {
        color: #ffff;
      }
    }
  }
`;

export default MessageBar;
