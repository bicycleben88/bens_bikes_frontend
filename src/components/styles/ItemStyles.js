import styled from 'styled-components';

const ItemStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    position: relative;
    background-color: white;
    box-shadow: ${props => props.theme.boxS};
    text-align: center;
    img {
        width: 200px;
        align-self: center;
        height: 133px;
    }
    h3 {
        font-weight: 2500;
    }
    a {
        color: ${props => props.theme.black}
    }
    a:hover{
        text-decoration: underline;
    }
    @media (max-width: 1100px) {
        width: 50%;
        margin: 1rem;
    } 
`;

export default ItemStyles;