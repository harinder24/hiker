import React from 'react'
import Offer from "./Offer"
export default function Features() {
  return (
    <>
    <div className="min-h-[70svh] relative  flex flex-row justify-center ">
      <img
        src="/landing/services.jpg"
        className="w-screen h-[70svh] object-cover flex flex-row justify-center items-start"
        alt="Nature image"
      />
      <div className=" absolute top-0 w-[1400px] max-[1400px]:w-full h-full flex flex-col justify-between">
        <div className=" flex-1 flex flex-col  text-8xl font-bold w-fit  text-center p-10 max-[750px]:p-4 max-[750px]:text-6xl">
          <div className="w-fit">WHAT</div>
          <div className="w-fit">WE Offer</div>
        </div>
        <div className=" text-[#eee] text-semibold text-base flex flex-row justify-end ">
          <div className="w-[400px] p-4">
            Find nearby trails for quick adventure or join an hiking event to meet new people. Find local species and register in trail with our AI.
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-row justify-center items-center lightGreenGradient overflow-hidden">
      <div className=" w-[1400px] max-[1400px]:w-full h-full flex flex-col px-10 max-[750px]:px-4"><Offer/></div>
    </div>
    
  </>
  )
}
