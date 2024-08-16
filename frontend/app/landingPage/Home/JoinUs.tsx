import React from "react";

export default function JoinUs() {
  return (
    <>
      <div>
        Hiking offers a chance to reconnect with nature, providing a refreshing
        escape from daily routines and urban environments.
      </div>
      <div>
        It presents an opportunity to immerse oneself in the beauty of natural
        landscapes, fostering a sense of adventure and exploration while
        promoting physical health and mental rejuvenation through outdoor
        exercise and scenic vistas.
      </div>
      <button className="h-14 mt-8 rounded-md border-[2px] w-[160px] px-6 text-sm font-semibold border-inherit">
        Join us
      </button>
    </>
  );
}
export function JoinUsWrap(){
 return(
  <div className="lightGreenGradient  w-full  flex-row justify-center py-10 hidden max-[750px]:flex">
    <div className="max-w-[500px] px-10 max-[450px]:px-4 gap-y-4 border-black flex flex-col">
    <JoinUs/>
    </div>
  </div>
 )
}
