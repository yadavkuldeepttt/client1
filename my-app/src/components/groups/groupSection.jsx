import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FiUsers } from "react-icons/fi";
import GroupChatbox from "../common/groupChatbox";

const groupsData = [
  {
    id:'rwe4j3n2n32n232454dfkd',
    groupName: "Designer",
    contacts: [
      {
        id: 1,
        name: "Alberte Robert",
        message: "Let's catch up soon!",
        status:'online',
      },
      {
        id: 2,
        name: "Lisa Williams",
        message: "Are you free this weekend?",
        status:'offline',

      },
    ],
  },
  {
    id:'sjwi32323n2n3j2n3232',
    groupName: "General",
    contacts: [
      {
        id: 3,
        name: "John Smith",
        message: "Meeting at 10 AM tomorrow.",
      },
      {
        id: 4,
        name: "Samantha Green",
        message: "Project updates needed by EOD.",
      },
    ],
  },
  {
    id:'we4p3343434l3mn4k3j4vg3',
    groupName: "Reporting",
    contacts: [
      {
        id: 3,
        name: "John Smith",
        message: "Meeting at 10 AM tomorrow.",
      },
      {
        id: 4,
        name: "Samantha Green",
        message: "Project updates needed by EOD.",
      },
    ],
  },
  // Add more groups as needed
];

const GroupSection = () => {
  const [groups, setGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(0); // Initially, no group is active

  useEffect(() => {
    // Simulate fetching data
    const fetchContacts = () => {
      setGroups(groupsData);
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
            <div className="maintitle">GROUPS</div>
            <FiUsers
              className="icon"
              style={{ fontSize: "20px", color: "#64d895" }}
            />
          </div>{" "}
          {/* Search Bar */}
          <div className="searchbar">
            <input type="text" placeholder="search groups" />
          </div>
          {/* Chat List */}
          <div className="contacts-list">
            {/* Your contact items will go here */}
            {groups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                onClick={() => setActiveGroup(groupIndex)}
                className={`group-section ${
                  activeGroup === groupIndex ? "active" : ""
                }`}
              >
                <h2 className="group-name">{group.groupName}</h2>
                {/* Add more contact items as needed */}
              </div>
            ))}
          </div>
        </div>
        {/* chatbox */}
        {groups.length > 0 && <GroupChatbox groups={groups} activeGroup={activeGroup} />}

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
    padding: 20px; /* Add some padding */
    display: flex;
    max-width: 25vw;
    height: 100vh;
    flex-direction: column; /* Arrange items vertically */
    .maintitle {
      font-family: "poppins";
      font-size: 21px;
      font-weight: 500;
      letter-spacing: 0.09rem;
      line-height: 36px;
      text-align: left;
      color: #64d895;
    }
    .contacts-list {
      flex: 1; /* Take up remaining space */
      overflow-y: auto; /* Allow scrolling if content overflows */
      margin-bottom: 20px; /* Space below contact list */
      padding: 8px; /* Padding inside the contact list */
      .group-section {
        padding: 10px;
        border-radius: 7px;
        &.active {
          background-color: var(--group-section-active); /* Change background color for active group */
          border-left: 5px solid #64d895; /* Add a left border for the active group */
        }
        &:hover {
          background: #64d895;
          color: black;
        }
        .group-name {
          font-size: 15px;
          font-weight: 700;
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

export default GroupSection;
