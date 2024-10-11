import styled from "styled-components";

const Login = () => {
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
            Don't have an account ? 
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
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh; // Full viewport height
  width: 94.5vw;
  background-color: var(--background-color); // Background color
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
`;

const Button = styled.button`
  background-color: #64d895;
  border-radius: 12px;
  padding: 8px 16px;
  border: none;
  width: 100%;
  max-width: 370px;
  .button-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    background-color: #57c987;
  }

  &:active {
    transform: scale(0.98);
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
    width: 33px;
    height: 42px;
    position: absolute;
    left: 0.7px;
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
    padding: 12px 12px 12px 40px; // Padding adjusted for the icon
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
`;

export default Login;
