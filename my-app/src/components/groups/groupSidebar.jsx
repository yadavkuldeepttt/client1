// GroupSidebar.js
import React from "react";
import { FiUsers } from "react-icons/fi";
import styled from "styled-components";
import { useGroup } from "../context/groupContext";

const GroupSidebar = () => {
  const {
    groups,
    activeGroup,
    setActiveGroup,
    activeGroupMobile,
    setActiveGroupMobile,
    isMobile,
  } = useGroup();

  return (
    <SidebarContainer>
      <div
        className="mobileResponsive"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="maintitle">GROUPS</div>
        <FiUsers className="icon" style={{ fontSize: "20px", color: "#64d895" }} />
      </div>{" "}
      {/* Search Bar */}
      <div className="searchbar">
        <input type="text" placeholder="search groups" />
      </div>
      {/* Chat List */}
      <div className="groups-list">
        {groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            onClick={() => isMobile ? setActiveGroupMobile(groupIndex) : setActiveGroup(groupIndex)}
            className={`group-section ${
              (isMobile ? activeGroupMobile : activeGroup) === groupIndex ? "active" : ""
            }`}
          >
            <h2 className="group-name">{group.groupName}</h2>
          </div>
        ))}
      </div>
    </SidebarContainer>
  );
};

// Styled Components for Sidebar
const SidebarContainer = styled.div`
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
  .groups-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 8px;
    .group-section {
      padding: 10px;
      border-radius: 7px;
      cursor: pointer;
      &.active {
        background-color: var(--green-color);
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
  .searchbar {
    input {
      width: 100%;
      padding: 10px 12px;
      gap: 8px;
      margin: 10px 0;
      border-radius: 7px;
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

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0px 10px 10px 10px;
    background: linear-gradient(
        to right bottom,
        var(--gradient-home2) 31%,
        var(--gradient-home1),
        var(--gradient-home3)
      );
    .mobileResponsive {
      .icon {
        display: none;
      }
    }
    .maintitle {
      display: none;
    }
    .groups-list {
      padding: 2px;
    }
    .searchbar {
      padding-top: 0px;
      input {
        margin-top: 0px;
        background: var(--message-sidebar);
      }
    }
  }
`;

export default GroupSidebar;
