import axios from 'axios';
import React, { useState, useContext } from "react"; //hooks
import { useNavigate } from 'react-router-dom';
import Container from "../common/Container";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import LoginForm from "./LoginForm";
import {AuthContext} from '../Providers/AuthProvider'

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
    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate(); //helps us programmaticaly move user 
    

    // we updating the form depending on which input field make it change

    const updateForm = (field, value) => {//function will accept the field we're updating(id or pass) and what the new value is gonna be
        setQuery({
            //we will use the spread operator ... it will take all the current data inside query, extract them and put in a new object (...query)
            ...query,
            [field]: value //value with the same key will replace it with a new data
            // value of the field becomes the name of the object property
        })
    }

    const onSubmit = async () => { //async/await means that all other code will continue to run
        // user will continue to use website, website won't freeze
        console.log('submit', query.id);
        const data = query;
        try {
            const res = await axios.get(`http://localhost:8080/api/students/${query.id}`)
            //but all code below this line will continue to wait until upper code is finished
           
            setAuth({id: res.data.id, name: res.data.name }) //user info stored in AuthProvider
            navigate('/');
        } catch (error) { //if axios call fails
            console.error(error.response ? error.response.data : error.message)
            //ternary operator, err.response - condition, if response key exist inside message
            //display that items data field, otherwise print out error.message
        }
    }

    return (
        <Container>
            <LoginForm onSubmit={onSubmit} query={query} updateForm={updateForm} />

        </Container>
    )
}

export default Login;