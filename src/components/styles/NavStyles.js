import styled from 'styled-components';
import Nav from '../Nav';

const NavStyles = styled.nav`
    display: flex;
    justify-content: flex-end;
    a {
        padding: .5rem 1rem;
        border-left: 1px solid ${props => props.theme.lightBlue};
        font-size: 2rem;
        color: ${props => props.theme.lightBlue};
        text-transform: uppercase;
    }
    a:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 700px) {
        justify-content: center
    }
`;
 
export default NavStyles;