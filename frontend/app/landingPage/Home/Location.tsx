"use client";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Autocomplete from "react-google-autocomplete";

export default function Location() {
  return (
    <>
      <button className="bg-green-700 hover:bg-green-800 w-fit h-14 px-4 rounded-md">
        <div className="flex flex-row items-center gap-x-2">
          <LocationOnIcon />
          <div className="text-sm font-semibold">Use current location</div>
        </div>
      </button>
      <div className="cavet  text-4xl font-semibold ml-[72px]  max-[1200px]:text-3xl max-[1000px]:text-2xl ">
        Or
      </div>
      
      <Autocomplete
      className="h-14 px-4 text-black rounded-md max-w-[400px] caret-black"
        apiKey=""
        onPlaceSelected={(place) => console.log(place)}
      />
    </>
  );
}
