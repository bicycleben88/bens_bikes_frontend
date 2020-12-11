import styled from 'styled-components';

const Logo = styled.h1`
    font-size: 5rem;
    text-align: right;
    padding-right: 1.5rem;
    margin: 0;
    a {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 1rem;
        color: ${props => props.theme.lightBlue};
    }
    @media (max-width: 700px) {
        text-align: center;
    }
`;

export default Logo;