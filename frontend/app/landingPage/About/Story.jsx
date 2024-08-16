import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Story() {
  return (
    <>
      {" "}
      <div className="w-full border-[1px] border-black border-b-0 rounded-md h-2 mt-4 rounded-b-none"></div>
      <div className=" my-10 flex flex-col gap-y-10">
        <div className="flex flex-row justify-center">
          <div className="p-2 px-6 border-[2px] border-black rounded-full font-semibold text-sm">
            Story
          </div>
        </div>
        <div className=" text-xl max-[750px]:text-base">
          While hiking with friends, we envisioned an app that connects hikers,
          allowing them to share trails, create events, and socialize in one
          place. Instead of using separate apps for these activities, our app
          would integrate everything. Additionally, it would feature AI to
          identify animals and plants from photos and provide information on
          flora, fauna, and tourist attractions along the routes.
        </div>
        <div className="flex flex-row justify-between font-semibold">
          {" "}
          <div>Where it began</div>
          <div className="flex flex-row items-center font-medium cursor-pointer hover:font-semibold hover:underline underline-offset-4">
            <LocationOnIcon sx={{ fontSize: 18 }} />
            <div>Dog trail, B.C.</div>
          </div>
          
        </div>
        <div className="flex flex-row justify-evenly w-full">
            <img className="w-[31%] rounded-md object-cover" src="/landing/dogtrail2.jpg" alt="" />
            <img className="w-[31%] rounded-md object-cover" src="/landing/dogtrail.webp" alt="" />
            <img className="w-[31%] rounded-md object-cover" src="/landing/dogtrail3.jpg" alt="" />
          </div>
      </div>
    </>
  );
}
