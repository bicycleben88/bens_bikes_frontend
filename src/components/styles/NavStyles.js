import styled from "styled-components";

const NavStyles = styled.nav`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background-color: transparent;
  }
  a,
  button {
    padding: 0.5rem 1rem;
    border-left: 1px solid ${(props) => props.theme.lightBlue};
    font-size: 2rem;
    color: ${(props) => props.theme.lightBlue};
    text-transform: uppercase;
    position: relative;
  }
  a:hover,
  button:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export default NavStyles;
