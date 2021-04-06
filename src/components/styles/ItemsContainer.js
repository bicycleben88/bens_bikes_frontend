import styled from "styled-components";

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    .carousel {
      display: none;
    }
  }
`;

export default ItemsContainer;
