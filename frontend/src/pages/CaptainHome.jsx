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
          <img className='w-16' src="data:image/png;base64,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" alt="" />
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
