import React, { useState } from "react";
import Image from "next/image";
import gps from "../../assets/icon/gps.png";
import satellite from "../../assets/icon/satellite.png";
import location from "../../assets/icon/location.png";

interface IGPS {
  gps: any
}

export default function GPS(props: IGPS) {
  
  const {abs, fx, lat, lon, ns, rel} = props.gps

  return (
    <div className="GPS flex flex-col gap-4 bg-opacity-50 md:m-4 p-6 rounded-3xl">
      <p className="font-bold text-xl"> GPS Data: </p>

      <div className="flex gap-2 items-center">
        <Image alt="" src={gps}></Image>
        <p>
          GPS Fixation:
          <span className="font-semibold"> {fx ? "Yes" : "No"} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={satellite}></Image>
        <p>
          Number of Satellites:
          <span className="font-semibold"> {ns ? ns : 0} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Latitude:
          <span className="font-semibold"> {lat ? lat : 'unrecorded'} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Longtitude:
          <span className="font-semibold"> {lon ? lon : 'unrecorded'} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Absolute Altitude:
          <span className="font-semibold"> {abs ? abs : 'unrecorded'} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Relative Altitude:
          <span className="font-semibold"> {rel ? rel : 'unrecorded'} </span>
        </p>
      </div>
    </div>
  );
}
