import styled from "styled-components";
import Chatbox from "../chat/chatbox";
import { FaEllipsisVertical } from "react-icons/fa6";

const ProfileSection = () => {
  return (
    <>
      <Container>
        <div className="profile-sidebar">
          <div
            className="mobileResponsive"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="maintitle">MY PROFILE</div>
            <FaEllipsisVertical className="icon" />
          </div>

          <div className="profile-section">
            {/* avatar and name */}
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="/assets/profile.png" className="avatar" />
              </div>
              <div className="profile-name">John Smith</div>
              <div className="profile-active-status">
                <span className="dot"></span>
                <span>Online</span>
              </div>
            </div>
            <div className="profile-main">
              {/* about */}
              <div className="profile-about">
                <span>
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual.
                </span>
                <label>About</label>
              </div>
              {/* proifle personal detail */}
              <div className="profile-detail">
                <div className="profile-detail-item">
                  <label>Name</label>
                  <span>John Smith</span>
                </div>
                <div className="profile-detail-item">
                  <label>E-mail</label>
                  <span>abc@123.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* wallet button */}
          <Button>
            <div className="button-text">Connect Wallet</div>
          </Button>
        </div>

        {/* chatbox */}
        <div className="chatbox">
        <Chatbox />
        </div>
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  .profile-sidebar {
    flex: 1;
    background: var(--message-sidebar);
    padding: 20px;
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

    .profile-section {
      display: flex;
      flex-direction: column;
      align-items: center;

      .profile-header {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        .profile-avatar {
          .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 10px;
          }
        }

        .profile-name {
          font-size: 15px;
          line-height: 28px;
          font-weight: bold;
          color: var(--chat-item-name);
        }

        .profile-active-status {
          font-size: 12px;
          display: flex;
          gap: 0.3rem;
          align-items: center;
          font-weight: 500;

          .dot {
            width: 8px;
            height: 8px;
            background: var(--green-color);
            border-radius: 50%;
          }
        }
      }

      .profile-main {
        margin: 13px 10px;

        .profile-about {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.4rem;

          span {
            font-size: 12px;
            font-weight: 400;
            line-height: 24px;
            text-align: left;
          }

          label {
            font-size: 12px;
            font-weight: 700;
          }
        }

        .profile-detail {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .profile-detail-item {
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
  }

  @media (max-width: 600px) {
    .profile-sidebar {
      max-width: 100vw;
      padding: 0px 10px 10px 10px;
      .mobileResponsive {
        .icon {
          display: none;
        }
      }
      .maintitle {
        display: none;
      }
       .profile-main{
        margin: 13px;
       }
      
    }
    .chatbox{
      display: none;
    }
  }
`;

const Button = styled.button`
  background-color: var(--button-green-color);
  border-radius: 12px;
  margin-top: 1rem;
  padding: 8px 16px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;

  .button-text {
    font-weight: 700;
    font-size: 14px;
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
  @media (max-width: 600px) {
    margin-left:5px;
  }

`;

export default ProfileSection;
