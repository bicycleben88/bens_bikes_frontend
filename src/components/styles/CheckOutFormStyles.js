import styled from "styled-components";

const CheckOutFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  .StripeElement,
  .error {
    padding: 5px;
  }
  .error {
    margin: 0;
  }
`;

export default CheckOutFormStyles;
