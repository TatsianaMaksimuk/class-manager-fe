import axios from 'axios';
import React, { useState, useEffect } from 'react'; //to make a component start with this line
import Button from '../common/Button'
const Test = () => {
    //creating a state:
    //array
    //counter - name of the state, it gonna store the value of the current state;
    //setCounter - name of the function that will allow you to change the state; you're going to call it to update what's stored in a counter variable
    //inside the () we put the starting value of what's stored in counter (counter starts in 0)
    const [counter, setCounter] = useState(0); //- state

    const [schools, setSchools] = useState({});

    const increaseCounter = () => {
        setCounter(counter + 1); //counter is const, but Setcounter doesn't assign a new value, it
        //recreates the function and makes new instance/copy of the counter(component) with a new value and it runs through everything again
        //it will compare new version to previous version and will decide if there's anything to display
    }
    //When set counter triggers, its going to take the current counter, increase it by one
    //and it's going to recall the whole function (component test)

    useEffect(() => {
        // useEffect will trigger this function inside () when the component loads
        //useEffect is not asynchronous
        const getSchools = async () => {
            const res= await axios.get("http://localhost:8080/api/schools/")
            console.log(res.data);
        }
        getSchools();

    }, []) // [] so this function runs only once onload, not every time the counter change andcomponent rerenders 

    return (
        <div>

            <h1>Test Component</h1>
            <p>{counter}</p>
            { /*  in jsx the content of {} is read as JS code */}
            <Button onClick={increaseCounter}>
                Increase
            </Button>
            {/* Every time button is clicked, state is changed, changing state triggers react to epdate the component */}
        </div>
    )
}

export default Test; 