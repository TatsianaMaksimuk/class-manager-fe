import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import homesplash from "../../assets/homesplash.jpg"


const Home = () => {
    return (
        <Container>
            <Splash image={homesplash}>
            <h1>Welcome to Class Manager</h1>
            </Splash>
       </Container>
    )
}

export default Home;