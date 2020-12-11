import React from 'react';
import Form from '../components/Form';

const Login = (props) => {
    const logInUser = (user) => {
        console.log(user)
    };
    
    return(
       <Form 
            label="Log In"
            submit={logInUser}
       />
    )
};

export default Login;