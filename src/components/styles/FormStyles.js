import styled from 'styled-components';

const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 400px;
    background-color: white;
    box-shadow: ${props => props.theme.boxS};
    margin: 1rem auto;
    input {
        border: none;
        text-align: center;
        width: 50%;
        border-bottom: 1px solid ${props => props.theme.boldBlue};
    }
    .submit-button {
        background-color: darkorange;
        color: ${props => props.theme.lightBlue};
        font-size: 1.5rem;
        text-decoration: none;
        border: none;
    }
    .submit-button:hover{
        cursor: pointer;
    }

`;

export default FormStyles;