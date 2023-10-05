import React, { useState } from "react";

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
    <div className="GPS flex flex-col gap-4 bg-gray-300 bg-opacity-50 md:m-4 p-6 rounded-xl">
      <p className="font-bold text-lg"> GPS Data: </p>
      <p>
        {" "}
        <span className="font-semibold"> GPS Fixation: </span>{" "}
        {GPS.fixation ? "Yes" : "No"}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Number of Satellites: </span>{" "}
        {GPS.satellitesNumber}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Latitude: </span> {GPS.latitude}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Longtitude: </span> {GPS.longtitude}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Absolute Altitude: </span>{" "}
        {GPS.absAltitude}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Relative Altitude: </span>{" "}
        {GPS.relAltitude}{" "}
      </p>
    </div>
  );
}
