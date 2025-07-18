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
      <img className='w-16 mb-10' src="data:image/png;base64,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" alt="" />
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
