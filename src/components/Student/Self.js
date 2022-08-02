import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../Providers/AuthProvider'
import BorderCard from "../common/BorderCard"
import axios from 'axios';


const Self = () => {

    const [auth, setAuth] = useContext(AuthContext)
    const [student, setStudent] = useState([])

    useEffect(() => {
        const getStudent = async() =>{
            try{
                const studentRes = await axios.get(`http://localhost:8080/api/students/${auth.id}`)
                setStudent(studentRes.data)
            }
            catch(error){
                console.error(error.response ? error.response.data : error.message)

            }
        }
        getStudent()
    })

    return (
        <BorderCard>
            <h1>
            {student.name}
            </h1>
            
        </BorderCard>
    )

}

export default Self;