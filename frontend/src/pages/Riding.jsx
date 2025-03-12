import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-smile-line"></i>
        </Link>
        <div className='h-1/2 w-screen'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif " alt="" />
        </div>
        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Salman bhai</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-between items-center'>
                <div className='w-full mt-5'> 
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
            </div>
            <button className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>
                Confirm
            </button>
        </div>
    </div>
  )
}

export default Riding
