import styled from "styled-components";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GrFormEdit } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";
import { useChat } from "../context/chatContext";
import Chatbox from "../messages/chatbox";
import GoBackMobileIcon from "../responsive/goBackMobileIcon";

const SettingSection = () => {
  const { chats, activeChat, isMobile } = useChat();
  return (
    <>
      <Container>
        <div className="setting-sidebar">
          <div className="topHeader">
            {isMobile && <GoBackMobileIcon />}
            <div className="maintitle">SETTINGS</div>
            <FaEllipsisVertical className="icon" />
          </div>

          <div className="setting-section">
            {/* avatar and name */}
            <div className="setting-header">
              <div className="setting-avatar">
                <img src="/assets/Layer_1.png" className="avatar" />
                <div className="edit">
                  <GrFormEdit className="icon" />
                </div>
              </div>
              <div className="setting-name">John Smith</div>
            </div>
            <div className="setting-main">
              <div className="setting-main-top">
                <h5>Personal Info</h5>
                <Button>
                  <div className="button-text"> Edit</div>
                </Button>
              </div>
              {/* proifle personal detail */}
              <div className="setting-detail">
                <div className="setting-detail-item">
                  <label>Name</label>
                  <span>John Smith</span>
                </div>
                <div className="setting-detail-item">
                  <label>E-mail</label>
                  <span>abc@123.com</span>
                </div>
                <div className="setting-detail-item">
                  <label>Time</label>
                  <span>11:40 AM</span>
                </div>
                <div className="setting-detail-item">
                  <label>Location</label>
                  <span>California, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* dropdowns */}
          <div className="dropdowns">
            <div className="dropdown">
              <span>Privacy</span>
              <GoChevronDown className="icon" />
            </div>
            <div className="dropdown">
              <span>Security</span>
              <GoChevronDown className="icon" />
            </div>
            <div className="dropdown">
              <span>Help</span>
              <GoChevronDown className="icon" />
            </div>
          </div>
        </div>

        {/* chatbox */}
        {/* chatbox */}
        {!isMobile && <Chatbox chats={chats} activeChat={activeChat} />}
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .setting-sidebar {
    flex: 1; /* Take up one part of the container */
    background: var(--message-sidebar);
    padding: 20px; /* Add some padding */
    display: flex;
    max-width: 21vw;
    height: 100vh;
    flex-direction: column; /* Arrange items vertically */
    .topHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .maintitle {
      font-family: "Terminator";
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.06rem;
      line-height: 36px;
      text-align: left;
      color: var(--button-green-color);
    }
    .setting-section {
      display: flex;
      flex-direction: column;

      .setting-header {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        .setting-avatar {
          position: relative;
          .avatar {
            width: 65px;
            height: 65px;
            border-radius: 63;
            margin-bottom: 10;
            float: "right";
          }
          .edit {
            position: absolute;
            bottom: 7px;
            right: 0;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            border-radius: 20px;
            background: var(--green-color);
            color: #fff;
            .icon {
              font-size: 16px;
            }
          }
        }
        .setting-name {
          font-size: 15px;
          line-height: 28px;
          font-weight: bold;
          color: var(--chat-item-name);
        }
        .setting-active-status {
          font-size: 12px;
          display: flex;
          gap: 0.3rem;
          align-items: center;
          font-weight: 500;
          .dot {
            width: 8px;
            height: 8px;
            background: var(--green-color);
            border-radius: 30px;
          }
        }
      }
      .setting-main {
        margin: 14px 10px;
        .setting-main-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .setting-detail {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          .setting-detail-item {
            display: flex;
            flex-direction: column;
            label {
              font-size: 12px;
              font-weight: 500;
            }
            span {
              font-size: 13px;
              font-weight: 600;
            }
          }
        }
      }
    }
    .dropdowns {
      margin-top: 1.5rem;
      .dropdown {
        width: 100%;
        border-radius: 9px;
        background: #fff;
        padding: 8px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.7rem;
        span,
        .icon {
          font-size: 12px;
          font-weight: 600;
          color: #141414;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .setting-sidebar {
      background: var(--background-color);
      max-width: 100vw;
      padding: 0px 10px 10px 10px;
      .topheader {
        margin-top: 0.3rem ;
      }
      .dropdowns {
        .dropdown{
          background:#f0f0f0;
        }
      }
    
    }
  }
`;

const Button = styled.button`
  background-color: var(--button-green-color);
  border-radius: 8px;
  padding: 1px 16px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  .button-text {
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: black;
  }
  &:hover {
    background-color: var(--button-hover-color);
  }

  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
`;

export default SettingSection;
