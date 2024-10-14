import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiUsers } from "react-icons/fi";
import GroupChatbox from "./groupChatbox";
import GroupSidebar from "./groupSidebar";
import { useGroup } from "../context/groupContext";

const GroupSection = () => {
  const {
    groups,
    activeGroup,
    activeGroupMobile,
    isMobile,
  } = useGroup();

  return (
    <>
      <Container>
        {isMobile ? (
          activeGroupMobile === null ? ( // Mobile view: show Chatbox if there's an active chat
            // Mobile view: show group sidebar if no active chat
            <GroupSidebar />
          ) : (
            groups.length > 0 && <GroupChatbox />
          )
        ) : (
          // Desktop view: show both message sidebar and Chatbox
          <>
            <GroupSidebar />
            {groups.length > 0 ? (
              <GroupChatbox groups={groups} activeGroup={activeGroup} />
            ) : (
              <div>No group available</div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

`;

export default GroupSection;
