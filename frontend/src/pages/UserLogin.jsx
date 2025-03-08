import React,{ useState , useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import Cookies from "universal-cookie";


const UserLogin = () => {
  const cookies = new Cookies();
  const [email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const userData = {email:email,password:password}  
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData)
    setEmail('')
    setPassword('')

    if(response.status===200){
      const data = response.data
      const token = data.token
      setUser(data.user)
      cookies.set("token", token, { path: "/" });
      navigate('/home')
    }
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
