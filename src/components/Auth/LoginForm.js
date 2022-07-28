import React from 'react';
import Container from '../common/Container';
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";

const LoginForm = (props) =>{
    return(
        <Container>
            <Form onSubmit={props.onSubmit}>


            </Form>
        </Container>
    )
}
export default LoginForm;