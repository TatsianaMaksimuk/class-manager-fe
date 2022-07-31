import React from "react";
import {Routes, Route} from 'react-router-dom';
//Routes is a wrapper class, what inside is gonna be changed based on what's in URL
import Container from "../common/Container";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Self from "../Student/Self";
import Students from "../Student/Students";
import Navbar from "../Navbar/Navbar";
import PayFees from "../Student/PayFees";

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
            <Navbar />
            {/* <h1>AppRouter</h1>  */}
            {/* this stays unchanged because this is out of route system, it will be displayed regardless of url */}
            <Routes>
                {/* which component loads changes depending on url */}
                <Route path = "/" element ={<Home/>}/> 
                <Route path = "/login" element ={<Login/>}/>
                <Route path = "/profile" element ={<Self/>}/>
                <Route path = "/students" element ={<Students/>}/>
                <Route path = "/payfees" element ={<PayFees/>}/>


            </Routes>
        </Container>
    )
}

export default AppRouter;