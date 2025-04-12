import React,{useState,useRef,useContext} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios'
import Cookies from 'universal-cookie'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'
import VehicalPannel from '../components/VehicalPannel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';

const Home = () => {
  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panel,setPanel] = useState(false)
  const pannelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const vehicalPannelRef = useRef(null)
  const ConfirmRideRef = useRef(null)
  const LookingForDriverRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehicalPannel,setVehicalPannel] = useState(false)
  const [ConfirmRidePanel,setConfirmRidePanel] = useState(false)
  const [vehicalFound,setVehicalFound] = useState(false)
  const [waitingForDriverPanel,setWaitingForDriverPanel] = useState(false)


  const submitHandler = (e)=>{
    e.preventDefault()
  }

  
  useGSAP(function(){
    if(panel){
      gsap.to(pannelRef.current,{
        height:'70%',
        padding:24
      })
      gsap.to(pannelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(pannelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(pannelCloseRef.current,{
        opacity:0
      })
    }
  },[panel])

  useGSAP(function(){
    if(vehicalPannel){
      gsap.to(vehicalPannelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicalPannelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicalPannel])

  useGSAP(function(){
    if(ConfirmRidePanel){
      gsap.to(ConfirmRideRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ConfirmRideRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ConfirmRidePanel])

  useGSAP(function(){
    if(vehicalFound){
      gsap.to(LookingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(LookingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicalFound])

  useGSAP(function(){
    if(waitingForDriverPanel){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitingForDriverPanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif " alt="" />
      </div>
      <div className='flex flex-col justify-end absolute h-screen top-0 w-full'>
          <div className='h-[30%] p-5 bg-white relative'>
              <h5 
              ref={pannelCloseRef}
              onClick={()=>{
                setPanel(false)
              }} className='absolute top-0 left-3 text-xl opacity-0'>
                <i className="ri-arrow-down-wide-line"></i>
              </h5>
              <h4 className='text-2xl font-semibold'>Find a trip</h4>
              <form onSubmit={(e)=>{
                submitHandler(e)
              }}>
                <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-600 rounded-full'></div>
                <input 
                  className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-6' 
                  type="text" 
                  placeholder='Add a pick-up location' 
                  name='pickup' 
                  value={pickup}
                  onChange={(e)=>setPickup(e.target.value)}
                  onClick={()=>{
                    setPanel(true)
                  }}
                />
                <input 
                  className='bg-[#eee] px-10 py-2 text-lg rounded-lg w-full mt-4' 
                  type="text" 
                  placeholder='Enter your destination' 
                  name='dopoff' 
                  value={destination}
                  onChange={(e)=>setDestination(e.target.value)}
                  onClick={()=>{
                    setPanel(true)
                  }}
                />
              </form>
          </div>
          <div ref={pannelRef} className='bg-white h-0'>
                  <LocationSearchPannel setVehicalPannel={setVehicalPannel} setPanel={setPanel}/>
          </div>
      </div>

      <div ref={vehicalPannelRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
          <VehicalPannel setVehicalPannel={setVehicalPannel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={ConfirmRideRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicalFound={setVehicalFound}/>
      </div>
      <div ref={LookingForDriverRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
        <LookingForDriver setVehicalFound={setVehicalFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel}/>
      </div>
    </div>
  )
}

export default Home
