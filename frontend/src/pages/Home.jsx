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
      <img className='w-16 absolute left-5 top-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABCFBMVEX///8AAAD/u0qx6P/R0dGlfTHo6Oj/wU0rKyv/vkvl5eUuLi54p6/Djzj3xWphTiqWekL/0nEbGxu79f+g0eYRGBujo6P/nz0qOD248f+j1ugmMjfLolcfKS2QvM/IyMhMTEzDei8+Pj41NTU0JQ+QkJCyhzZ+sLgkJCSsrKxZQhqGZCjqWE63RT1vm6L09PS4uLhwk6FMNxZsUSAXCQjlrUVeg4lNPSB4v+Z+pLQbFQz/yE+KViFiYmL+7dT8xmI2Rk1ur9MtSFemhEc/U1tJdY1AMxv0xnfSmj0oHAt6WSNEX2NUdXrFuqiXkITis1p+fn54XzNSHxttKSRpQxqONTCWbyyfYyZGjWZJAAAID0lEQVR4nO2ba3fiNhCGgYAdc8mFBEogBJaLk5ANZGFNGigtu2FTArQk3Zb+/39SzUg2NraM7TjL6Tl6vsTHskavNKORLJxIRCAQCAQCgUAgEAgEAoFAIPifEXems0NJlXqUQ3Nnmjo8SYS7XYlquoga7ciDnSppPHsF7Fu4AlWV3YiqQNt5DOykZCZeIwXV3YgakaZrcVCx6Sr0a3IXmjDMX6QkYbNI2tkExOGIgyjJVgaDWLfffncwzGsdGCj7RKvsKCtgu9fOA0UVp368KAxznHVOpdc/LitId9d5BrZabQL5/B0TFjeK81icX3MdfydN/KWuiuXJrEuKf6ccf+fS4h+/Ev5000Sm4ztkLok7ToTlb4Rzd1HRUfiiMC/dHzpyfnxAOH50LgUaUPs6bE2YwO8PnDm2/HECRzEVdj59AatsRBzR9XF4hPrVcDUlYT9yDy0fLx+PHHhk4+RYCAxAVbhZfoQDBa2+8uL4XPeSC1dhzsAkWHwFTYfcBiHg7reICnUG4kAtjw9oaHBYHm8bqGiYMxBX31cIGpzaBRsluH1ORZXsxSinXAjXgbC/HSxJkB+B3U9F4MzESbFsiCpdQOmepfgBqn39+VuYDsQF5og4b/lMLsbFU8KeBYsoKC5ais8mYOHbz1/f5sDKqLoGF9qn+/v7Z3TDGDwyJkwezryJouXRL1/e5EBMSx4oehR1FoYDK940RS/OvInaOwnBgbif3U7OY0wRTk0OzAZ0YMfYROLuoPFIwIWi/2nNQ9FrTIXkQAO2Eh/TJLQ4LRZJi1TMmdHkdlFhzUA6ZGDjEHYBsITksEWTGu+irDPQ9yamE68YxHGBOTo/P8e8OXkALgj+Rb3JgZ2RlxifF/2Kss5An5sYtxcEExe+Rb1lBnrMUQFEvcWB+ZoBNv9EwItSmcA2AZ98x9SmA/P+VBnHX/ge/HqwXC7hogABfnFapJuEIKKsDgz4GgErcQO2LLgHfihyW/MqKoQUiiH/SHIUblkmezhCJ06gKLrzLOFQ7rECfUCNJ+d+Z6CUr2fNYCA9Dwa4vkRzbsAD7EHL/QfmtrHlySj7k3Whnkf3Jt1ezIOCwXfyNUhVOHyQ9sMWBJz/DgwC1d2XIvmQ5SDdGCDfBKudj4DzuolwUWMKVTX1XbVL5NQjIC0zlA2GtosAxBiK34pDFfSgqN4NQdWILUVTVXWKBjOqmoEOK1NyS1NYWUaJOaEYt2XHcq/IGUMUpTFVYnKLXAzgAksTMpHS0IMEQ0RzUqVovRZj5aw6qKjosxJTwKdREJWAixtyR4MU+gQ1eqzMDgpnJN4yVnZR0YyCoj4bolYWUTOeKGVqMjJ7gyazqL++f//+mfxVZfmJBf5whSNFQm8K2aahybLSMiaFzVjL3DOHxiDiFTfHQjFBnhqibj9+/EhFKZler/fcmM16g26v1x30ZjN0aLQ1mx1GW73eEymbqTab2uqGMbUpJk1pUzWhZrRYjKNLUdReF3lyEBVThsMhdYZMrkyhAo4hdzS46GoOPWXYmh1qCX0cB7OM4hRxita1NLQpCh8Bh32WFW0jI8+gRY4oHoq2siw23Yzdi0rM2nm+qOgwY1u6bohBf6LkaWPTyMyWVOTVxiNcUd0EeyJHNsM5dv0Uk32Jks1GyroRmypwXuMX5G+OKJLMyfI1oxbGi3Y73W7351RXSyFlialXTRlqpGA10rWqoun5w0/IB64oMl+ouUI/rdOeU1VDmLkeNdEZU1obSVMjXYsFjqh/bm9vzaLIc1h5goYuLy/xTx/vqZ4TtqLQo1KrERysldkIR5TOWhQ6b47m+ov5vN82VD07Ln6Oolbrjq2NtEHVwLwuuIsa6O3RgSpfgpAxDdQFGFzYeukGzpdc2mRkbnRtZjLiLspobogJCjq2MArRC2jcoyg68/qG37GfYBNfTc0j6iYqsbYHfRzDqJskTy6Zecd9goOoLutK22SkoBs1hSZHVAaNrPeLU9bHNEZlbURPHaHTcOPG01DRbNcnPcH8tD+ipzoLdqO3XRTOcwMZ96R6n0bJSAdf5MfEHvivp3iBJpU2G6gqMXIHb5Ql0jPICy3Tk3ZR+OKQsQJzL0ckgPfr+MLaZAGxcHiaww3tGUqIohHoWq5N+9pQ10+qsGP79wNCXxx4n0PB3INxeUF7SWZvwXmaA/QMRFXRSIcFQX9LrSb3QL/MnEXPI+LBRU0MUZI3UfDbBO+0jNm7wg8L4LC4rGcqH+hVknoM6O5zAT8BkZrVlJUrao/WrlakJPp4wsYum/IEGtEDvV6RJDRSYH2NcmpVm/r5FX4OtUYCZ8FsTuNszlXpEQjkCPj7svE4D5hskAHo737Vmm4EU8KIY8TlSA3sbea9+SVzhdfvVyC7lcBIbm1koif4AL915/VO9c3m0mnstFcjmNwWlq6NjbXKvyb6UQ2upWwbVQBn0pTj+SS1U2dRRYzgYJUXl3rgB/pKrmn0K93uL3DTwfJBzftBKg5VoW0xQsc+FewHrStqkO7M6DZtsZ6wHsE1s+xgJOAvR3E8+sRtFNsO0z2Rr3FP4ilhbr5p5GV7VckJugaTfpINI9nyL6g1sjpbPn3rONZdG2G/reTm/b7JSDXpWovYrdT2HUkZU0Y/2wWyKSirsqxQqTvXNag7G3GvVqtEAp0N1+g4pbY/GYR6xPWLOh70u8mOxx/n/ZKNXAepxvLxu5ws49xMcv45wAUj0gPU3c5OvokWCAQCgUAgEAgEAoFAIBAIDP4DTfxlZfiJcRoAAAAASUVORK5CYII=" alt="" />
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
