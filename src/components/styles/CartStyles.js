import styled from "styled-components";

const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid darkorange;
  width: 400px;
  height: 600px;
  position: relative;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.offwhite};
  transform: translateX(100%);
  transition: transform 0.2s;
  ul {
    flex: 1;
    overflow-x: auto;
  }
  .close-btn {
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: darkorange;
    border: none;
  }
  .close-btn:hover {
    cursor: pointer;
  }
  .checkout {
    border: none;
    background-color: darkorange;
  }
  .checkout:hover {
    cursor: pointer;
  }
  ${(props) => props.open && `transform: translateX(0)`}
`;

export default CartStyles;
