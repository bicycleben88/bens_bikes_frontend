import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: ${(props) => props.theme.black};
  }
`;

export default PaginationStyles;
