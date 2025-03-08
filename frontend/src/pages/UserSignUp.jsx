import React, { useContext,useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[firstname,setFirstname] = useState('')
  const[lastname,setLastname] = useState('')  
  const {user,setUser} = useContext(UserDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email: email,
        password: password,
        fullname:{
          firstname: firstname,
          lastname: lastname
        }
      };
  
      const url = `${import.meta.env.VITE_BASE_URL}/user/register`;
      const response = await axios.post(url, newUser, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 201) {
        setUser(response.data.user);
        cookies.set('token',response.data.token,{path:'/'});
        navigate('/home');
      }
  
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };
  

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
          <input
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base  placeholder:text-base'
            type="text" 
            required 
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            name="firstname" 
            id="lastname" 
            placeholder='First name'
          />
          <input
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-base'
            type="text" 
            required 
            name="lastname" 
            id="lastname" 
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            placeholder='Last name'
          />
        </div>

        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
          type="email" 
          required 
          name=""
          value={email}
          onChange={(e)=>setEmail(e.target.value)} 
          id="" 
          placeholder='email@example.com'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
          type="password" 
          value={password}
          name="" 
          onChange={(e)=>setPassword(e.target.value)}
          id="" 
          placeholder='password'
        />
        <button
          className='bg-[#111] text-white font-semi mb-3 rounded px-4 py-2 w-full'
        >Create Account</button>
      </form>
      <p className='text-center'>Already have account?<Link to='/login' className='text-blue-600'>Login here</Link>
        </p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default UserSignUp
