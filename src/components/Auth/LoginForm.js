import React from 'react';
import Container from '../common/Container';
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = (props) => {

    const handleChange = (e) =>{
        props.updateForm(e.target.id, e.target.value)
    }
    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{margin: '1em'}}>
                <InlineInputContainer>
                    <Input
                        name="id"
                        id="id"
                        placeholder="Student Id"
                        value={props.query.id} 
                        //the value of this textfield will always showcase the value of props.query.id
                        onChange = {handleChange} //e stands for event, e.target gonna make id, e.value what a changed value is going to be
                        required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={props.query.password} 
                        onChange = {handleChange} 
                        required
                        type="password"//dots instead of letters appear because of this (validation)
                    />
                </InlineInputContainer>
                <Button>
                    Submit
                </Button>

            </Form>
        </Container>
    )
}
export default LoginForm;