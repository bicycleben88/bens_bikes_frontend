import styled from "styled-components";

const CheckOutFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  .StripeElement,
  .error {
    padding: 5px;
  }
  .message {
    margin: 0;
    padding-left: 5px;
    font-size: 13px;
    color: red;
  }
`;

export default CheckOutFormStyles;
