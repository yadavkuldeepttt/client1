import { BsBrightnessHigh } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import { useSection } from "../components/context/sectionContext";

const Login = () => {
  const { activeSection, setActiveSection } = useSection();

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Container>
      <div className="chain">
        <div className="chain-header">
          <img
            className="chain-image"
            src="/assets/Isolation_Mode.png"
            alt="Chatchain Logo"
          />
          <div className="chain-title">CHATCHAIN</div>
        </div>
        <div className="chain-register-title">Welcome Back!</div>
        <div className="chain-welcome-text">
          It is ON-CHAIN and DECENTRALIZED !
        </div>
        <div className="chain-card">
          <div className="chain-sub-card">
            {/* password input form */}
            <FormContainer>
              <label className="text-style">Password</label>
              <div className="input-wrapper">
                <div className="icon-div">
                  {/* <FaLock className="icon" /> */}
                  <img
                    className="icon"
                    src="/assets/Group 40.png"
                    alt="lock icon"
                  />
                </div>
                <input
                  type="password"
                  className="password-input"
                  placeholder="Enter password"
                />
              </div>{" "}
            </FormContainer>
            <Button>
              <div className="button-text">Log In</div>
            </Button>
          </div>

          {/* dont have account */}
          <div
            className="text-style"
            style={{
              textAlign: "center",
              marginTop: "1.7rem",
            }}
          >
            <span>Don't have an account ? </span>
            <span className="newWalletGenerate">
              {" "}
              Generate new wallet or import wallet
            </span>
          </div>
          {/* 2024 chainchat */}
          <div
            className="chainchat"
            style={{
              fontWeight: "550",
              textAlign: "center",

              marginTop: "1rem",
              fontSize: "15px",
            }}
          >
            © 2024 Chainchat.
          </div>
        </div>
      </div>

      {/*theme button  */}
      <NavItem onClick={toggleTheme}>
        <BsBrightnessHigh className="icon" />
      </NavItem>
      {/*go back button  */}
      <GoBack onClick={() => setActiveSection("messages")}>
        <IoMdArrowBack />
      </GoBack>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh; // Full viewport height
  width: 100vw;
  background: linear-gradient(
    to right bottom,
    var(--gradient-home2) 31%,
    var(--gradient-home1),
    var(--gradient-home3)
  );

  .chain {
    display: flex;
    flex-direction: column;
    align-items: center;
    .chain-header {
      display: flex; // Use flexbox to align items
      align-items: center; // Center items vertically
      margin-bottom: 20px;
      .chain-image {
        width: 42px;
        height: 50px;
        margin-right: 10px;
      }
      .chain-title {
        font-family: "verdana";
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0.1rem;
        font-size: 24px;
        line-height: 36px;
        color: var(--text-color);
      }
    }
    .chain-register-title {
      font-size: 17px;
      line-height: 28px;
      color: var(--text-color);
      text-align: center;
      font-style: normal;
      font-weight: 700;
    }
    .chain-welcome-text {
      font-size: 14px;
      line-height: 24px;
      color: var(--text-color);
      text-align: center;
      font-style: normal;
      font-weight: 400;
    }
    .chain-card {
      margin-top: 1rem;
      width: 100%;
      max-width: 550px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .chain-sub-card {
        background: var(--message-sidebar);
        width: 550px;
        padding: 4rem 0;
        border-radius: 12px;
        opacity: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }
    .newWalletGenerate {
      color: #64d895;
      font-weight: 500;
    }
    .chainchat {
      color: var(--text-color);
    }
  }
  @media (max-width: 768px) {
    .chain {
      .chain-header {
        margin-bottom: 15px;
        .chain-image {
          width: 40px;
          height: 42px;
          margin-right: 10px;
        }
        .chain-title {
          font-size: 21px;
        }
        .chain-welcome-text {
          font-size: 12px;
        }
      }
      .chain-card {
        .chain-sub-card {
          width: 80vw;
          padding: 2.5rem 0;
        }
        .text-style {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
const NavItem = styled.div`
  position: fixed;
  bottom: 25px;
  right: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#64D895" : "#5c5c5c")};
  color: white;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #64d895;
    transform: scale(1.1);
  }

  .icon {
    font-size: 24px;
  }
`;
const GoBack = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#f4f5f7" : "#fafafa")};
  color: black;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #64d895;
    transform: scale(1.1);
  }

  .icon {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background-color: var(--button-green-color);
  border-radius: 12px;
  padding: 8px 16px;
  border: none;
  width: 100%;
  max-width: 370px;
  .button-text {
    font-weight: 700;
    font-size: 16px;
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
    max-width: 54vw;
    width: 100%;
    padding: 12px;
  }
`;

// form container
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  width: 100%;
  max-width: 370px;

  .text-style {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 8px;
    font-family: "Arial", sans-serif;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
  }
  .icon-div {
    background: var(--icon-div);
    width: 40px;
    height: 56px;
    position: absolute;
    left: 0.6px;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    border-radius: 5px 0px 0px 5px;
    opacity: 0px;
    .icon {
      pointer-events: none; // Prevents the icon from blocking clicks on the input field
      width: 18.81px;
      height: 23px;
    }
  }

  .password-input {
    width: 100%;
    padding: 19px 12px 19px 44px; // Padding adjusted for the icon
    font-size: 16px;
    color: #333333;
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      border-color: #64d895;
      box-shadow: 0 0 5px rgba(100, 216, 149, 0.3);
      background-color: var(--background-color);
    }

    &::placeholder {
      color: #a0a0a0;
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    max-width: 60vw;
    width: 100%;
    padding: 12px;
  }
`;

export default Login;
