import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState,useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import axios from 'axios'
import Cookies from 'universal-cookie'

const UserSignUp = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')  
  const [vehicalColor, setVehicalColor] = useState('');
  const [vehicalPlate, setVehicalPlate] = useState('');
  const [vehicalCapacity, setVehicalCapacity] = useState('');
  const [vehicalType, setVehicalType] = useState('');

  const {captain,setCaptain} = useContext(CaptainDataContext)

  const navigate = useNavigate()
  const cookies = new Cookies()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const captainData = {
      email:email,
      password:password,
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      vehical:{
        color:vehicalColor,
        plate:vehicalPlate,
        capacity:vehicalCapacity,
        vehicalType:vehicalType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData)
    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      cookies.set('token',data.token,{path:'/'})
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
    setFirstname('')  
    setLastname('')
    setVehicalCapacity('')
    setVehicalColor('')
    setVehicalPlate('') 
    setVehicalType('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-4 mb-5'>
          <div>
            <h3 className='text-lg font-medium mb-2'>First Name</h3>
            <input
              className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-base placeholder:text-base'
              type="text" 
              required 
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
              name="firstname" 
              id="firstname" 
              placeholder='First name'
            />
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>Last Name</h3>
            <input
              className='bg-[#eeeeee] w-full rounded px-4 py-2 border text-base placeholder:text-base'
              type="text" 
              required 
              name="lastname" 
              id="lastname" 
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
              placeholder='Last name'
            />
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>Email</h3>
            <input 
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
              type="email" 
              required 
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder='email@example.com'
            />
          </div>
          <div>
            <h3 className='text-lg font-medium mb-2'>Password</h3>
            <input 
              className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='password'
            />
          </div>
        </div>

        <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
        <div className='grid grid-cols-2 gap-4'>
        <input 
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
          type="text" 
          required 
          value={vehicalColor}
          onChange={(e)=>setVehicalColor(e.target.value)}
          placeholder='Vehicle Color'
        />
        <input 
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-base placeholder:text-base'
          type="text" 
          required 
          value={vehicalPlate}
          onChange={(e)=>setVehicalPlate(e.target.value)}
          placeholder='Vehicle Plate Number'
        />
        <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base'
          type="number" 
          required 
          value={vehicalCapacity}
          onChange={(e)=>setVehicalCapacity(e.target.value)}
          placeholder='Vehicle Capacity'
        />
        <select 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base'
          value={vehicalType}
          onChange={(e)=>setVehicalType(e.target.value)}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
        </select>
        </div>
        
        <button
          className='bg-[#111] text-white font-semi mb-3 rounded px-4 py-2 w-full'
        >Create Captain Account</button>
      </form>
      <p className='text-center'>Already have account?<Link to='/captain-login' className='text-blue-600'>Login here</Link>
        </p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default UserSignUp
