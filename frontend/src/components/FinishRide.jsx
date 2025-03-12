import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
    <h5 
      onClick={()=>{
        props.setFinishRidePannel(false)
      }} className='absolute top-6 right-6 text-xl opacity-1'>
      <i className="ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
    
    <div className='flex items-center justify-between mt-4 p-3 border-2 border-yellow-400 rounded-lg '>
        <div className='flex items-center gap-3 '>
          <img className='h-12 w-12  rounded-full object-cover' src="https://picsum.photos/200/300" alt="" />
          <h2 className='text-lg font-medium'>Atharva Padyal</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 Kms</h5>
    </div>
  
    <div className='flex flex-col gap-2 justify-between items-center'>
      <div className='w-full mt-5'>
          <div className='flex items-center gap-3 p-3 border-b-2 border-gray-400'>
            <h3 className='text-3xl'><i className="ri-map-pin-user-fill"></i></h3>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talav, Ahemdabad</p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-3 border-b-2 border-gray-400'>
            <h3 className='text-3xl'><i className="ri-map-pin-time-fill"></i></h3>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talav, Ahemdabad</p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-3'>
            <h3 className='text-3xl'><i className="ri-money-rupee-circle-line"></i></h3>
            <div>
              <h3 className='text-lg font-medium'>₹199.3</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>
      </div>
      <form>

      </form>
      <div className='mt-6 w-full'>
            <Link 
              to='/captain-home'
              className='mt-5 flex justify-center w-full bg-green-600 text-white text-lg font-semibold p-2 rounded-lg'>
              Finish Ride
            </Link>
            <p className='text-center text-red-500 mt-10 text-xs'>Click on finish ride if you have completed the payment</p>
      </div>
    </div>
    </div>
  )
}

export default FinishRide
