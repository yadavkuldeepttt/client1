import { IoSearchOutline } from "react-icons/io5";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import styled from "styled-components";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MessageBar from "../chat/messageBar";
import { IoMdArrowBack } from "react-icons/io";

const Chatbox = ({ chats, activeChat, isMobile,activeChatMobile,setActiveChatMobile }) => {
  
  console.log(activeChatMobile,"active chat mobile");
  console.log(activeChat,"active chat");
  
  
  console.log(
    chats?.length ? chats : "Groups is undefined at initial render",
    "chats data"
  );

  const currentChat = chats?.[activeChat] || null;
  const currentChatMobile = chats?.[activeChatMobile] || null;
  


  return (
    <>
      <MainContent>
        {/* top header */}
        <div className="top-header">
          {/* top header left */}
          <div className="top-header-left">
            {isMobile && (
              <GoBackMobileIcon   onClick={()=>setActiveChatMobile(null)}>
                <IoMdArrowBack
                  className="icon"
                
                />
              </GoBackMobileIcon>
            )}
            <img className="i" src="/assets/Layer_1.png" alt="User Avatar" />
            <div className="top-header-item-details">
              <div className="top-header-item-name">{isMobile ? currentChatMobile.name : currentChat.name}</div>
              {!isMobile && (
                <div className="top-header-item-message">
                  12w982s23u29jn2j32
                </div>
              )}
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
                <span>10:00 PM</span>
              </div>
            </div>
            <img src="/assets/Vector 8.png" className="incoming-vector" />
          </div>
          <div style={{ position: "relative" }}>
            <div className="outgoing">
              <div className="outgoing-message">Yes, this is so cool!</div>
              <div className="outgoing-message-time">
                <IoCheckmarkDoneOutline className="icon" />
                <span>10:00 PM</span>
              </div>
            </div>
            <img src="/assets/Vector 9.png" className="outgoing-vector" />
          </div>
        </div>

        {/* chat bottom */}
        <MessageBar />
      </MainContent>
    </>
  );
};

const MainContent = styled.div`
  flex: 2; /* Take up two parts of the container */
  display: flex;
  height: 100vh;
  flex-direction: column; /* Arrange items vertically */
  background-color: #fff; /* White background for main content */
  border-left: 1px solid #64d895;
  .top-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--message-sidebar);
    padding: 10px 15px;
    border-bottom: 2px solid #384f4f63;

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
        cursor: pointer;
        &:hover {
          color: var(--icon-hover-color);
        }
      }
    }
  }
  .chatting-box {
    display: flex;
    flex: 1;
    padding-bottom: 3rem !important;
    padding: 20px;
    overflow: auto;
    flex-direction: column;
    padding-right: 0;
    background: linear-gradient(
      to right bottom,
      var(--gradient-home2) 31%,
      var(--gradient-home1) 40%,
      var(--gradient-home3)
    );
    &::-webkit-scrollbar {
      width: 5px;
    }

    .incoming {
      max-width: 70%;
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
        gap: 0.2rem;
        align-items: center;
        font-size: 12px;
      }

    }
    .incoming-vector {
      position: absolute;
      top: 77px;
      left: 0;
    }

    .outgoing {
      max-width: 50%;
      height: auto;
      padding: 15px 20px;
      border-radius: 17px;
      background: #d4d4d4;

      color: black;
      font-size: 16px;
      line-height: 1.5;
      opacity: 1;
      align-self: flex-end;
      float: right;
      margin-right: 1rem;
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
        gap: 0.2rem;
        align-items: center;
        font-size: 12px;
        .icon {
          font-weight: bold;
          color: var(--home-main-color);
        }
      }
    }
    .outgoing-vector {
      position: absolute;
      top: 56px;
      right: 16px;
    }
  }

  @media (max-width: 600px) {
    .top-header {
      .top-header-left {
        img {
          width: 30px;
          height: 30px;
        }
      }
      .top-header-right {
        .icon {
          font-size: 17px;
        }
      }
    }
    border-left: none;
  }
`;

const GoBackMobileIcon = styled.div`
  display: none; /* Hide by default */

  /* Show only on mobile screens */
  @media (max-width: 768px) {
    display: flex; /* Show back icon */
    align-items: center;

    .icon {
      color: var(--text-color);
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: var(--button-hover-color);
      }
    }
  }
`;

export default Chatbox;
