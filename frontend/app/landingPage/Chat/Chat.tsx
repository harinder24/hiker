import React from 'react'

export default function Chat() {
  return (
    <div  className='min-h-[100svh] w-full relative bg-telephone-image'>
        {/* <img src="/landing/telephone.jpg" className='absolute top-0 z-[-1] w-full h-full object-cover' alt="" /> */}
        <div className='  w-full h-full flex flex-row max-[750px]:flex-col-reverse'>
        <div className="  flex flex-col flex-1 p-10 max-[750px]:p-4 ">
          {/* <div className=" mt-4 text-md">Name</div>

            <input placeholder="Name" className="customInput  w-full px-4 mt-1" type="text" /> */}
          <div className=" mt-4 text-md text-[#eee]">Email*</div>

          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" rounded-md  border-[1px] bg-[rgba(238,238,238,0.1)]  tbg min-h-14  th resize-none caret-[#eee]  outline-0 text-[#eee]  focus-visible:border-green-700 focus-visible:shadow-[0_0px_6px_#15803d]   w-full  px-4 mt-1"
            type="email"
          />
          <div className=" mt-4 text-md  text-[#eee]">Subject*</div>

          <input
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className=" rounded-md  border-[1px] bg-[rgba(238,238,238,0.1)] text-[#eee] tbg min-h-14  th resize-none caret-gray-500  outline-0  focus-visible:border-green-700 focus-visible:shadow-[0_0px_6px_#15803d]   w-full  px-4  mt-1"
            type="text"
          />

          <div className=" mt-4 text-md text-[#eee]">Message*</div>
          <textarea
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            placeholder="What would you like to know about me?"
            className="h-[300px] rounded-lg border-[1px] bg-[rgba(238,238,238,0.1)] text-[#eee]   tbg p-2  th resize-none caret-gray-500  outline-0  focus-visible:border-green-700 focus-visible:shadow-[0_0px_6px_#15803d] max-h-[300px]"
          ></textarea>
          {/* {error && (
            <div className="w-full text-center text-xs text-[#d32f2f] bottom-[-6px] relative font-semibold">
              {error}
            </div>
          )} */}
          <button
            // onClick={submitHandler}
            className="h-14 mt-4  w-full rounded-lg bg-green-700 hover:bg-green-800 text-[#eee] font-semibold text-sm  "
          >
            Submit
          </button>
        </div>
        <div className='flex-1 p-10 max-[750px]:p-4 flex flex-row justify-center pt-20 max-[750px]:pt-4 max-[750px]:flex-grow-0 max-[750px]:pb-0 font-bold'>
          <div className='text-8xl text-[#eee] max-[750px]:text-6xl'>Contact</div>

        </div>

        </div>
    </div>
  )
}
