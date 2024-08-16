import React from "react";

export default function Offer() {
  return (
    <>
      {" "}
      <div className="w-full border-[1px] border-black border-b-0 rounded-md h-2 mt-4 rounded-b-none"></div>
      <div className=" my-10 flex flex-col gap-y-10">
        <div className="flex flex-row justify-center">
          <div className="p-2 px-6 border-[2px] border-black rounded-full font-semibold text-sm">
            Features
          </div>
        </div>
        <div className="flex flex-row justify-between items-center h-[450px] max-[750px]:flex-col max-[750px]:h-auto">
          <ul className=" text-xl max-[750px]:text-base flex flex-col gap-y-4 ">
            <li className=" flex flex-row gap-2 ">
              <div className=" size-2 rounded-full bg-black mt-2 min-w-2"></div>
              Find best nearby trails in your local area or search trail for
              travel up ahead.
            </li>
            <li className=" flex flex-row gap-2 ">
              <div className=" size-2 rounded-full bg-black mt-2 min-w-2"></div>
              Get details of trail to find you best available route and tourist
              spot
            </li>
            <li className=" flex flex-row gap-2 ">
              <div className=" size-2 rounded-full bg-black mt-2 min-w-2"></div>Filter routes
              with flora and fauna.
            </li>
            <li className=" flex flex-row gap-2 ">
              <div className=" size-2 rounded-full bg-black mt-2 min-w-2"></div>Use our
              advance AI to identify flora and fauna
            </li>
            <li className=" flex flex-row gap-2 ">
              <div className=" size-2 rounded-full bg-black mt-2 min-w-2"></div>Create hiking
              event or join event to meet up new people.
            </li>
          </ul>
          <div className="relative pr-[200px] pl-[50px] max-[1350px]:pr-[70px] max-[750px]:rotate-[90deg] max-[750px]:my-10">
            <img
              src="/landing/hk.jpg"
              className=" absolute bottom-[-125px] size-[200px] rounded-2xl border-[2px] border-[#eee] object-cover rotate-[16deg] left-[100px] max-[750px]:rotate-[-74deg] max-[520px]:size-[150px]"
              alt=""
            />
            <img
              src="/landing/grouphiking.jpg"
              className=" size-[200px] min-w-[200px] rounded-2xl border-[2px] border-[#eee] object-cover rotate-[-12deg] max-[750px]:rotate-[-102deg] max-[520px]:size-[150px] max-[520px]:min-w-[150px]"
              alt=""
            />
            <img
              src="/landing/ai.jpg"
              className=" absolute top-[-125px] size-[200px] rounded-2xl border-[2px] border-[#eee] object-cover rotate-[6deg] left-[100px] max-[750px]:rotate-[-84deg] max-[520px]:size-[150px] max-[520px]:min-w-[150px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
