import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import styled from "styled-components";

const Chatbox = () => {
  return (
    <>
      <MainContent>
        {/* top header */}
        <div className="top-header">
          {/* top header left */}
          <div className="top-header-left">
            <img className="i" src="/assets/Layer_1.png" alt="User Avatar" />
            <div className="top-header-item-details">
              <div className="top-header-item-name">John</div>
              <div className="top-header-item-message">12w982s23u29jn2j32</div>
            </div>
          </div>
          {/* top header right */}
          <div className="top-header-right">
            <IoSearchOutline className="icon" />
            <RiFolderOpenLine className="icon" />
            <FaRegUser className="icon" />
            <IoEllipsisHorizontal className="icon" />
          </div>
        </div>
        {/* chatting box */}
        <div className="chatting-box">
          <div style={{ position: "relative" }}>
            <div className="incoming">
              <div className="incoming-message">
                Can you believe it?? We are chatting with encrypted messages
                based on blockchain technology. No one has access to our
                messages except me and you!!
              </div>
              <div className="incoming-message-time">
                <FiClock />
                <span>10:00</span>
              </div>
            </div>
            <img src="/assets/Vector 8.png" className="incoming-vector" />
          </div>
          <div style={{ position: "relative" }}>
            <div className="outgoing">
              <div className="outgoing-message">Yes, this is so cool!</div>
              <div className="outgoing-message-time">
                <FiClock />
                <span>10:00</span>
              </div>
            </div>
            <img src="/assets/Vector 9.png" className="outgoing-vector" />
          </div>
        </div>

        {/* chat bottom */}
        <div className="chat-bottom">
          <div className="message-bar">
            <input type="text" placeholder="Type Message" />
          </div>
          <div className="icons">
            <BsEmojiSmile />
            <IoIosAttach />
            <div className="send-icon">
              <BsFillSendFill className="icon2" />
            </div>
          </div>
        </div>
      </MainContent>
    </>
  );
};

const MainContent = styled.div`
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
  .chatting-box {
    height: 100%;
    max-height: 80vh;
    display: flex;
    padding: 20px;
    padding-right: 0;
    background: linear-gradient(
      to right bottom,
      var(--gradient-home2) 40%,
      var(--gradient-home1),
      var(--gradient-home3)
    );

    .incoming {
      width: 100%;
      max-width: 715px;
      padding: 15px 20px;
      border-radius: 17px;
      background: #45b57f;
      color: #fff;
      font-size: 16px;
      line-height: 1.5;
      opacity: 1;
      display: inline-block;
      margin-bottom: 10px;
      /* Positioning for the incoming message */
      align-self: flex-start; /* Aligns message to the left */
      /* Optional: Drop shadow for a floating effect */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      .incoming-message {
        //styleName: Caption/large/regular;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        text-align: left;
        color: #ffff;
      }
      .incoming-message-time {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        align-items: center;
        font-size: 14px;
      }
    }
    .incoming-vector {
      position: absolute;
      top: 83px;
      left: 0;
    }

    .outgoing {
      width: 100%;
      max-width: 184px;
      height: auto;
      padding: 15px 20px;
      border-radius: 17px;
      background: #d4d4d4;

      color: black;
      font-size: 16px;
      line-height: 1.5;
      opacity: 1;
      align-self: flex-end;
      margin: auto 0;
      margin-top: 7rem;
      /* Optional: Drop shadow for a floating effect */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      .outgoing-message {
        //styleName: Caption/large/regular;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        text-align: left;
        color: black;
      }
      .outgoing-message-time {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        align-items: center;
        font-size: 14px;
      }
    }
    .outgoing-vector {
      position: absolute;
      top: 173px;
      right: 0;
    }
  }
  .chat-bottom {
    background: var(--message-sidebar);
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 10px 25px;
    .message-bar {
      input {
        background: var(--message-bar-input);
        width: 55vw;
        padding: 10px 12px;
        gap: 8px;
        margin: 10px 0;
        border-radius: 7px;
        opacity: 0px;
        outline: none;
        border: none;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      font-size: 20px;
      cursor: pointer;

      .send-icon {
        background: linear-gradient(360deg, #61a4e7 0%, #a6fdb9 100%);
        padding: 7px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        .icon2 {
          color: #ffff;
        }
      }
    }
  }
`;

export default Chatbox;
