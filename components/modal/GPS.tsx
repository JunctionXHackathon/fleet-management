import React, { useState } from "react";
import Image from "next/image";
import gps from "../../assets/icon/gps.png";
import satellite from "../../assets/icon/satellite.png";
import location from "../../assets/icon/location.png";

export default function GPS() {
  // dummy data
  const [GPS, setGPS] = useState({
    fixation: false,
    satellitesNumber: 6,
    latitude: 17.5,
    longtitude: 20,
    absAltitude: 10,
    relAltitude: 45,
  });

  return (
    <div className="GPS flex flex-col gap-4 bg-opacity-50 md:m-4 p-6 rounded-3xl">
      <p className="font-bold text-xl"> GPS Data: </p>

      <div className="flex gap-2 items-center">
        <Image alt="" src={gps}></Image>
        <p>
          GPS Fixation:
          <span className="font-semibold"> {GPS.fixation ? "Yes" : "No"} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={satellite}></Image>
        <p>
          Number of Satellites:
          <span className="font-semibold"> {GPS.satellitesNumber} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Latitude:
          <span className="font-semibold"> {GPS.latitude} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Longtitude:
          <span className="font-semibold"> {GPS.longtitude} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Absolute Altitude:
          <span className="font-semibold"> {GPS.absAltitude} </span>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <Image alt="" src={location}></Image>
        <p>
          Relative Altitude:
          <span className="font-semibold"> {GPS.relAltitude} </span>
        </p>
      </div>
    </div>
  );
}
