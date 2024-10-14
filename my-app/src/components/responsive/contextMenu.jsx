// ContextMenu.js
import styled from "styled-components";

const ContextMenu = ({ options, onClose }) => {
  return (
    <MenuContainer onClick={(e) => e.stopPropagation()}>
      {options.map((option, index) => (
        <div
          className="menuItem"
          key={index}
          onClick={() => {
            option.onClick();
            onClose();
          }}
        >
          {option.label}
        </div>
      ))}
    </MenuContainer>
  );
};

// Styled Components
const MenuContainer = styled.div`
  position: fixed;
  top: 6%;
  right: 25px;
  width: 150px;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  .menuItem {
  padding  : 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--sidebar-bg-color);
    }
  }
`;

export default ContextMenu;
