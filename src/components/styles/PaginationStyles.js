import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  a {
    color: ${(props) => props.theme.black};
  }
`;

export default PaginationStyles;
