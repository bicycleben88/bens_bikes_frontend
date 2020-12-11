import styled from 'styled-components';

const Badge = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: darkorange;
    position: absolute;
    text-align: center;
    top: -3px;
    right: 3px;
    vertical-align: middle;
    line-height: 0px;
    p {
        font-size: 1rem;
        font-weight: 900;
        color: ${props => props.theme.lightBlue};
    }
`;

export default Badge;