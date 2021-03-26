import styled from "styled-components";

const OrderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .order-items {
    padding: 0;
  }
  .order-items li {
    list-style: none;
    border-bottom: 2px solid darkorange;
    background-color: ${(props) => props.theme.lightBlue};
    padding: 5px;
    margin-bottom: 5px;
  }
  .order-items li img {
    width: 200px;
  }
`;

export default OrderStyles;
