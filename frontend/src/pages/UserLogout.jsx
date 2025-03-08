import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const UserLogout = () => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    const navigate = useNavigate()
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    }).then((response)=>{
        console.log(response)   
        cookies.remove('token', { path: '/' });
        navigate('/')
    })

    return (
    <div>
        User Logged out
    </div>
    )
}

export default UserLogout
