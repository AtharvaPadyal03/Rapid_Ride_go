import React, { useRef,useState } from 'react'
import {Link} from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopUpPannel,setridePopUpPannel] = useState(true)
  const [confirmRidePopUpPannel,setconfirmRidePopUpPannel] = useState(false)

  const ridePopUpPannelRef = useRef(null)
  const confirmRidePopUpPannelRef = useRef(null)
  
  useGSAP(function(){
    if(ridePopUpPannel){
      gsap.to(ridePopUpPannelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPannelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopUpPannel])

  useGSAP(function(){
    if(confirmRidePopUpPannel){
      gsap.to(confirmRidePopUpPannelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPannelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopUpPannel])
  
  return (
    <div className='h-screen'>

        <div className='fixed flex p-6 top-0 items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
          <Link to='/captain-logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-line"></i>
          </Link>
        </div>

        <div className='h-3/5 w-screen'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif " alt="" />
        </div>

        <div className='h-2/5 p-6'>
            <CaptainDetails/>
        </div>

        <div ref={ridePopUpPannelRef} className='fixed z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
            <RidePopUp setridePopUpPannel={setridePopUpPannel} setconfirmRidePopUpPannel={setconfirmRidePopUpPannel}/>
        </div>

        <div ref={confirmRidePopUpPannelRef} className='fixed h-screen z-10 bottom-0 bg-white px-3 py-6 pt-12 w-full translate-y-full'>
            <ConfirmRidePopUp setconfirmRidePopUpPannel={setconfirmRidePopUpPannel} setridePopUpPannel={setridePopUpPannel}/>
        </div>
    </div>
  )
}

export default CaptainHome
