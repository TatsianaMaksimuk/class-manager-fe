import React from "react";
import {Routes, Route} from 'react-router-dom';
//Routes is a wrapper class, what inside is gonna be changed based on what's in URL
import Container from "../common/Container";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Self from "../Student/Self";
import Students from "../Student/Students";

const AppRouter = () => {

    //Page plan for a school website/app:
    //Home
    //Login (Auth)
    //Students
    //MyPage
    //optional teacher page
    //then we're creating placeholder components
    return (
        <Container>
            <h1>AppRouter</h1>
            <Routes>
                <Route path = "/" element ={<Home/>}/>
                <Route path = "/login" element ={<Login/>}/>
                <Route path = "/profile" element ={<Self/>}/>
                <Route path = "/students" element ={<Students/>}/>

            </Routes>
        </Container>
    )
}

export default AppRouter;