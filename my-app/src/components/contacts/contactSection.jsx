import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chatbox from "../chat/chatbox";
import { FaEllipsisVertical } from "react-icons/fa6";
import { RiFolderOpenLine } from "react-icons/ri";
import { CgUserList } from "react-icons/cg";

const contactsData = [
  {
    id: 1,
    name: "Alberte Robert",
    message: "323jjn423239439snddfeqw3",
  },
  {
    id: 2,
    name: "Lisa Williams",
    message: "2d9gbs9d9sdf2df98db9df89",
  },
  // Add more contact objects as needed
];

const ContactSection = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchContacts = () => {
      setContacts(contactsData);
    };

    fetchContacts();
  }, []);

  return (
    <>
      <Container>
        <div className="contact-sidebar">
          {/* Logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
          <div className="maintitle">CONTACTS</div>
          <CgUserList   style={{ fontSize: "20px", color: "#64d895" }}/>
          </div>
          {/* Search Bar */}
          <div className="searchbar">
            <input type="text" placeholder="search users" />
          </div>

          {/* Chat List */}
          <div className="contacts-list">
            {/* Your contact items will go here */}
            {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          <div className="contact-item-left">
            <div className="contact-item-details">
            <div className="contact-item-name-abbr">{contact.name.split(" ")[0].charAt(0)}</div>
              <div className="contact-item-name">{contact.name}</div>
              <div className="contact-item-message">{contact.message}</div>
            </div>
          </div>
          <div className="contact-item-right">
            <RiFolderOpenLine className="icon" />
            <FaEllipsisVertical className="icon" />
          </div>
        </div>
      ))}
        
            {/* Add more contact items as needed */}
          </div>
        </div>

        {/* chatbox */}
        <Chatbox />
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .contact-sidebar {
    flex: 1; /* Take up one part of the container */
    background: var(--message-sidebar);
    padding: 20px 12px; /* Add some padding */
    display: flex;
    max-width: 21vw;
    height: 100vh;
    flex-direction: column; /* Arrange items vertically */
    .maintitle {
      font-family: "Terminator";
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.09rem;
      line-height: 36px;
      text-align: left;
      color: var(--button-green-color);
    }
    .contacts-list {
      flex: 1; /* Take up remaining space */
      overflow-y: auto; /* Allow scrolling if content overflows */
      margin-bottom: 20px; /* Space below contact list */
      padding: 8px 5px; /* Padding inside the contact list */
      .contact-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        padding: 10px 5px;
        border-radius: 10px;
        .contact-item-left {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.6rem;
          img {
            width: 32px;
            margin-top: 0.25rem;
            height: 33px;
          }

          .contact-item-name {
            font-size: 15px;
            line-height: 28px;
            font-weight: bold;
            color: var(--contact-item-name);
          }
          .contact-item-name-abbr{
            color: #64D895;
             font-weight: 700;
          }
          .contact-item-message {
            font-size: 11px;
          }
        }
        .contact-item-right {
          display: flex;
          gap:0.6rem;
          font-size: 16px;
          .icon{
            cursor: pointer;
            &:hover{
              color:var(--icon-hover-color);
            }
          }
          }
        }
      }
    }
    .searchbar {
      input {
        width: 100%;
        padding: 10px 12px;
        gap: 8px;
        margin: 10px 0;
        border-radius: 7px;
        opacity: 0px;
        outline: none;
        border: none;
        background: #ffffff3d;
      }
      ::placeholder {
        font-size: 11px;
        letter-spacing: 0.09rem;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
    }
  
`;

export default ContactSection;
