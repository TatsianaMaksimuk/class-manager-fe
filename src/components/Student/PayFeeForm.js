import React from "react";
import Container from '../common/Container';
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const PayFeesForm = (props) => {
    const handleChange = (e) =>{
        props.updateForm(e.target.id, e.target.value)
    }

    return(
        <Container>
            <Form onSubmit={props.onSubmit} style={{margin: '1em'}}>
                <InlineInputContainer>
                    <Input 
                    name="amount"
                    id = "amount"
                    placeholder = "amount"
                    value={props.query.amount}
                    onChange = {handleChange}
                    required
                    />
                </InlineInputContainer>
                <Button disabled = {props.submitting}>
                    submit
                </Button>
            </Form>
        </Container>
    )
}

export default PayFeesForm