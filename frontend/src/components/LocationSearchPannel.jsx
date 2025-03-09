import React from 'react'

const LocationSearchPannel = (props) => {

  const sampleLocations = [
    {
      id: 1,
      address: "Juhu Beach, Mumbai, Maharashtra, India"
    },
    {
      id: 2,
      address: "Bandra-Worli Sea Link, Mumbai, Maharashtra, India"
    },
    {
      id: 3,
      address: "Marine Drive, Mumbai, Maharashtra, India"
    },
    {
      id: 4,
      address: "Colaba Causeway, Mumbai, Maharashtra, India"
    },
    {
      id: 5,
      address: "Dharavi, Mumbai, Maharashtra, India"
    }
  ]

  return (
    <div>
      {
        sampleLocations.map((location,idx)=>{
          return(
            <div key={idx} onClick={
              ()=>{
                props.setVehicalPannel(true)
                props.setPanel(false)
              }
            } className='border-2 p-3 rounded-xl border-gray-100 flex items-center justify-start gap-5 my-2 active:border-black'>
              <h2 className='bg-[#eee] px-3 py-2 rounded-full flex justify-center items-center'><i className="ri-map-pin-fill text-xl"></i></h2>
              <h4 className='font-medium'>
               {location.address}
              </h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPannel
