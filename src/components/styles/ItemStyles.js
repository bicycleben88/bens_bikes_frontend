import styled from "styled-components";

const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  position: relative;
  background-color: white;
  box-shadow: ${(props) => props.theme.boxS};
  text-align: center;
  img {
    max-height: 200px;
    max-width: 95%;
  }
  h3 {
    text-transform: uppercase;
  }
  a {
    color: ${(props) => props.theme.black};
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default ItemStyles;
