import React, { useState } from "react";
import Container from "../common/Container";
import LoginForm from "./LoginForm";

//Login component will trap the login data and do the actions: sending login data to backend and getting the user data
//This componen will handle the behavior and then we will create an actual login form component that will display the form
// query is a const, we cant change the value, we will create a new instance of this item for the next render.
//setQuery will give us newQuery object
//we can access id through []:  query['id'] == query.id / query[id]!==query.id
// {...query} - creates new object and copies conteent of an existing object there
// let field = 'id';
// query.field -> will try to  find field in an object
// query[field] -> returns query.id
// field = 'password'
// query[field] -> returns query.password

const Login = () => {
    const [query, setQuery] = useState({
        id: "",
        password: "",
    })

    // we updating the form depending on which input field make it change

    const updateForm = (field, value) => {//function will accept the field we're updating(id or pass) and what the new value is gonna be
        setQuery({
            //we will use the spread operator ... it will take all the current data inside query, extract them and put in a new object (...query)
            ...query,
            [field]: value //value with the same key will replace it with a new data
            // value of the field becomes the name of the object property
        })
    }

    const onSubmit = () => {
        console.log('submit');
    }

    return (
        <Container>
            <LoginForm onSubmit={onSubmit}/>
        </Container>
    )
}

export default Login;