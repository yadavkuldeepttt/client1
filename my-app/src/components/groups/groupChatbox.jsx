import React from "react";
import { IoCheckmarkDoneOutline, IoSearchOutline } from "react-icons/io5";
import { RiFolderOpenLine } from "react-icons/ri";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";

import styled from "styled-components";
import MessageBar from "../chat/messageBar";
import ImageMessage from "../chat/imageMessage";
import { IoMdArrowBack } from "react-icons/io";
import { useGroup } from "../context/groupContext";

const GroupChatbox = () => {
  const {
    groups,
    activeGroup,
    setActiveGroup,
    activeGroupMobile,
    setActiveGroupMobile,
    isMobile,
  } = useGroup();

  console.log(
    groups?.length ? groups : "Groups is undefined at initial render",
    "groups data"
  );

  const currentGroup = groups?.[activeGroup] || null;
  const currentGroupMobile = groups?.[activeGroupMobile] || null;
  let totalMembers;
  let onlineMembers;
  let currentData;

  if (isMobile) {
    // Calculate total members and the count of online members
    totalMembers = currentGroupMobile.contacts.length;
    onlineMembers = currentGroupMobile.contacts.filter(
      (contact) => contact.status === "online"
    ).length;
    currentData = currentGroupMobile;
  } else {
    // Calculate total members and the count of online members
    totalMembers = currentGroup.contacts.length;
    onlineMembers = currentGroup.contacts.filter(
      (contact) => contact.status === "online"
    ).length;
    currentData = currentGroup;
  }

  return (
    <>
      <MainContent>
        {/* top header */}
        <div className="top-header">
          {/* top header left */}
          <div className="top-header-left">
            {isMobile && (
              <GoBackMobileIcon onClick={() => setActiveGroupMobile(null)}>
                <IoMdArrowBack className="icon" />
              </GoBackMobileIcon>
            )}
            <img className="i" src="/assets/Layer_1.png" alt="User Avatar" />
            <div className="top-header-item-details">
              <div className="top-header-item-name">
                {currentData.groupName || "Group"}
              </div>
              <div className="top-header-item-message">
                {totalMembers} members, {onlineMembers} online
              </div>
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
        {/* Chatting Box */}
        <div className="chatting-box">
          {currentData.contacts.map((contact, index) => (
            <div style={{ position: "relative" }} key={contact.id}>
              {index % 2 === 0 ? (
                // Incoming message style
                <div className="incoming">
                  <div className="incoming-user">
                    <FaUserCircle className="icon" />
                    <span>{contact.name}</span>
                  </div>

                  <div className="incoming-message">{contact.message}</div>
                  <div className="incoming-message-time">
                    <span>10:00 PM</span>
                  </div>
                  <img src="/assets/Vector 8.png" className="incoming-vector" />
                </div>
              ) : (
                // Outgoing message style
                <div className="outgoing">
                  {contact.imageMessage ? (
                    // Render the ImageMessage component if imageMessage exists
                    <ImageMessage
                      src={contact.imageMessage}
                      alt="Image Message"
                    />
                  ) : (
                    ""
                  )}
                  <div className="outgoing-message">{contact.message}</div>
                  <div className="outgoing-message-time">
                    <IoCheckmarkDoneOutline className="icon" />

                    <span>10:00 PM</span>
                  </div>
                  <img
                    src="/assets/Vector 9.png"
                    className={`${
                      contact.imageMessage
                        ? "outgoing-vector-image"
                        : "outgoing-vector"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
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
    flex: 1;
    overflow-y: auto;
    height: 100%;
    padding-bottom: 3rem !important;
    display: flex;
    padding: 20px;
    padding-right: 0;
    flex-direction: column;
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
      padding: 10px 20px;
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
      .incoming-user {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        .icon {
          font-size: 13px;
        }
        span {
          font-family: "poppins";
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08rem;
        }
      }
      .incoming-message {
        //styleName: Caption/large/regular;
        font-size: 12px;
        font-weight: 500;
        line-height: 22px;
        margin-top: 0.2rem;
        text-align: left;
        color: #ffff;
      }
      .incoming-message-time {
        display: flex;
        margin-top: 0.5rem;
        justify-content: flex-end;
        gap: 0.3rem;
        align-items: center;
        font-size: 12px;
      }
    }
    .incoming-vector {
      position: absolute;
      top: 72px;
      left: 0;
    }
    .outgoing {
      max-width: 70%;
      height: auto;
      padding: 15px 20px;
      border-radius: 17px;
      background: #d4d4d4;
      color: black;
      font-size: 16px;
      line-height: 1.5;
      opacity: 1;
      float: right;
      align-self: flex-end; /* Aligns message to the right */
      margin-right: 1rem;
      /* Optional: Drop shadow for a floating effect */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      .outgoing-message {
        //styleName: Caption/large/regular;
        font-size: 12px;
        font-weight: 500;
        line-height: 22px;
        text-align: right;
        color: black;
      }
      .outgoing-message-time {
        margin-top: 0.5rem;
        display: flex;
        justify-content: flex-end;
        gap: 0.3rem;
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
      top: 65px;
      right: 16px;
    }
    .outgoing-vector-image {
      position: absolute;
      bottom: -11px;
      right: 16px;
    }
  }

  @media (max-width: 768px) {
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
    .chatting-box {
      .incoming {
        margin-bottom: 0.7rem;
      }
      .outgoing {
        margin-bottom: 0.7rem;
      }
      .outgoing-vector-image{
        bottom: 0px;
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
export default GroupChatbox;
