import styled from "styled-components";

const Register = () => {
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
        <div className="chain-register-title">Register</div>
        <div className="chain-welcome-text">
          Welcome to the first onchain decentralized chat app.
        </div>
        <div className="chain-card">
          <div className="chain-sub-card">
            <Button>
              <div className="button-text">Import Wallet</div>
            </Button>
            <div style={{ fontWeight: "600" }}>Or</div>
            <Button>
              <div className="button-text">Generate New Wallet</div>
            </Button>
          </div>
          <div
            style={{
              fontWeight: "550",
              textAlign: "center",
              marginTop: "1.7rem",
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
  background: linear-gradient(
      to right bottom,
      var(--gradient-home2) 31%,
      var(--gradient-home1),
      var(--gradient-home3)
    );   .chain {
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

    .chainchat {
      color: var(--text-color);
    }
  }
`;

const Button = styled.button`
  background-color: #64d895;
  border-radius: 12px;
  padding: 16px;
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
    background-color: #57c987;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Register;
