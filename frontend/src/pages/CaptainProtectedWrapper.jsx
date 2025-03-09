import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const navigate = useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
        axios.get(`${import.meta.env.VITE_API_URL}/captain/profile`, {
            headers:{
                Authorization: `Bearer ${token}`
    
            }
        }).then((response)=>{
            if(response.status === 200){
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        }).catch((error)=>{
            console.log(error);
            cookies.remove('token');
            navigate('/captain-login');
        })
    
    },[token]); 
    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    if (!token) {
        return null; 
    }

    return <>{children}</>;
};

export default CaptainProtectedWrapper;
