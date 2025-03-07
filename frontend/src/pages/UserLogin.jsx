import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {
  const [email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const [user,setUser] = useState({})  

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({email:email,password:password})
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <form action="" onSubmit={handleSubmit}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email" 
          required 
          name="" 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          id="" 
          placeholder='email@example.com'
        />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type="password" 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          name="" 
          id="" 
          placeholder='password'
        />
        <button
          className='bg-[#111] text-white font-semi mb-3 rounded px-4 py-2 w-full'
        >Login</button>
      </form>
      <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'> Create new Account</Link></p>
      </div>
      <div>
        <Link
          to={'/captain-login'}
          className='bg-[#E5D54B] text-white flex items-center justify-center font-semi mb-7 rounded px-4 py-2 w-full'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
