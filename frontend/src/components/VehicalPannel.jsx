import React from 'react'

const VehicalPanel = (props) => {
  return (
    <div>
        <h5 
              onClick={()=>{
                props.setVehicalPannel(false)
              }} className='absolute top-6 right-6 text-xl opacity-1'>
                <i className="ri-arrow-down-wide-line"></i>
              </h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehical</h3>
        
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehicalPannel(false)
        }} className='flex w-full p-3 items-center mb-2 justify-between bg-gray-100 hover:border-black border-2 rounded-xl'>
            <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill">4</i></span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-gray-600 text-xs '>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹192.05</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehicalPannel(false)
        }}
        className='flex w-full p-3 items-center mb-2 justify-between bg-gray-100 hover:border-black border-2 rounded-xl'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberMoto <span><i className="ri-user-fill">1</i></span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-gray-600 text-xs '>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.05</h2>
        </div>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.setVehicalPannel(false)
        }}
        className='flex w-full p-3 items-center mb-2 justify-between bg-gray-100 hover:border-black border-2 rounded-xl'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill">3</i></span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-gray-600 text-xs '>Affordable, Autorikshaw rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹112.05</h2>
        </div>
    </div>
  )
}

export default VehicalPanel
