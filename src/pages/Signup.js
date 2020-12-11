import React from 'react';
import Form from '../components/Form';

const Signup = (props) => {
    const signUpUser = (user) => {
        console.log(user)
    };
    
    return(
       <Form 
            label="Sign Up"
            submit={signUpUser}
       />
    )
};

export default Signup;