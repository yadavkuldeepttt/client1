import React from "react";
import styled from "styled-components";

// Styled components
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  gap:9rem;
  margin-left: 3.5rem;
`;

const Logo = styled.img`
  width: 30px; /* Adjust the size of the logo */
  height: auto;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px; /* Space between nav items */
  color: var(--nav-item-color); /* Text color */
  cursor: pointer;
  letter-spacing: 0.09rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline; /* Underline on hover */
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #A6FDB9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #0A0A0A;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #57d974; /* Darker shade on hover */
  }
`;

// Navbar component
const Navbar = () => {
  return (
    <NavContainer>
      <Logo src="/assets/Isolation_Mode.png" alt="Logo" />{" "}
      {/* Update with your logo path */}
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Contact</NavItem>
      </NavItems>
      <Button>Sign In</Button>
    </NavContainer>
  );
};

export default Navbar;
