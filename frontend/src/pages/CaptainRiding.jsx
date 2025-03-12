import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import FinishRide from '../components/FinishRide'


const CaptainRiding = () => {

    const [finishRidePannel,setFinishRidePannel] = useState(false)
    const finishRidePannelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePannel){
            gsap.to(finishRidePannelRef.current,{
            transform:'translateY(0)'
            })
        }else{
            gsap.to(finishRidePannelRef.current,{
            transform:'translateY(100%)'
            })
        }
    },[finishRidePannel])
  return (
    <div className='h-screen relative'>
        <div className='fixed flex p-6 top-0 items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/captain-logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
        </div>

        <div className='h-4/5 w-screen'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif " alt="" />
        </div>

        <div className='h-1/5 p-6 bg-gray-100 flex items-center relative justify-between'
            onClick={()=>{
                setFinishRidePannel(true)
            }}
        >
            <h5 
                onClick={()=>{
                
                }} className='absolute top-3 right-6 text-xl opacity-1'>
                <i className="ri-arrow-up-wide-line"></i>
            </h5>
            <h4 className='text-xl font-semibold'>4 KMs away</h4>
            <button className='bg-green-400 text-white font-semibold px-10 py-3 rounded-lg'>Complete Ride</button>
        </div>

        <div ref={finishRidePannelRef} className='fixed h-screen z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
            <FinishRide setFinishRidePannel={setFinishRidePannel}/>
        </div>
    </div>
  )
}

export default CaptainRiding
