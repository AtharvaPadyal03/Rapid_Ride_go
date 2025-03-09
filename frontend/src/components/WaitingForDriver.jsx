import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <div 
      onClick={()=>{
        props.setVehicalFound(false)
      }} 
      className='absolute top-5 right-0.5 text-xl w-full flex items-center justify-center'>
      <i className="ri-arrow-down-wide-line"></i>
    </div>
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
    </div>
  </div>
  )
}

export default WaitingForDriver
