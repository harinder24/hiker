import React from 'react'

import JoinUs from "./JoinUs";
import Location from "./Location";
export default function Home() {
  return (
    <div className="min-h-[100svh] relative mt-[-50px] flex flex-row justify-center ">
    <img
      src="/landing/landing-top.jpg"
      className="w-screen h-[100svh] object-cover justify-center items-center"
      alt="Nature image"
    />
    <div className=" absolute top-0 w-[1400px] max-[1400px]:w-full h-full flex flex-row text-[#eee]">
      <div className="flex-1 px-10 flex flex-col justify-center gap-y-4 max-[450px]:px-4">
        <div className="font-bold text-4xl max-[1200px]:text-3xl max-[1000px]:text-2xl max-[750px]:text-3xl max-[550px]:text-2xl mb-2">Let's find your next adventure</div>
        <Location/>
      </div>
      <div className="w-[500px] p-4 max-[750px]:hidden flex flex-col justify-center max-[1050px]:w-[400px] max-[850px]:w-[350px]">
        <div className="flex flex-col justify-center p-4 gap-y-4  rounded-lg">
         <JoinUs/>
        </div>
    
      </div>
    </div>
  </div>
  )
}
