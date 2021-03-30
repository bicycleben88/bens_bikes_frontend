import styled from "styled-components";

const OrderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.offwhite};
  font-size: 12px;
  width: 100%;
  text-align: center;
  .order-items {
    padding: 0;
    width: 80%;
    border-bottom: 2px solid darkorange;
  }
  .order-items li {
    list-style: none;
    padding: 5px;
    margin-bottom: 5px;
  }
  .order-items li img {
    width: 200px;
  }
`;

export default OrderStyles;
