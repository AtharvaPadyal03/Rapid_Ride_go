import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const UserProtectedWrapper = ({ children }) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            console.log(token)
            console.log('No token found, redirecting to login...');
            navigate('/login');
        }
    },[token]); 

    if (!token) {
        return null; 
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;
