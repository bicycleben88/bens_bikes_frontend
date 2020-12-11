import styled from 'styled-components';

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
    .carousel{
        align-self: flex-end;
        img {
            width: 1000px;
            height: 600px;
        }
    }
`;

export default ItemsContainer;