import styled from 'styled-components';

const ShowStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 800px;
        max-height: 600px;
    }
    h1{
        font-size: 4rem;
    }
    h4 {
        font-size: 2rem;
        text-align: center;
    }
    a {
        color: ${props => props.theme.black}
    }
`;

export default ShowStyles;