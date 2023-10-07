import React, { useState } from "react";
import Image from "next/image";
import uav from "../../assets/icon/UAV.png";
import aim from "../../assets/icon/aim.png";
import health from "../../assets/icon/health.png";
import air from "../../assets/icon/air.png";

export default function UAV() {
  // dummy data
  const [UAV, setUAV] = useState({
    inFlight: true,
    armed: false,
    state: "working",
    messages: "message1",
    health: "good",
    flightMode: "normal",
  });

  return (
    <div className="UAV flex flex-col gap-4 bg-opacity-50 md:m-4 p-6 rounded-3xl">
      <p className="font-bold text-xl"> UAV Status: </p>
      <div className="flex gap-2 items-center">
        <Image alt="" src={uav}></Image>
        <p>
          UAV is in Air:
          <span className="font-semibold">
            {" "}
            {UAV.flightMode ? "Yes" : "No"}{" "}
          </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Image alt="" src={aim}></Image>
        <p>
          UAV is Armed:
          <span className="font-semibold"> {UAV.armed ? "Yes" : "No"} </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Image alt="" src={health}></Image>
        <p>
          System Health Status:
          <span className="font-semibold"> {UAV.health} </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
      <Image alt="" src={air}></Image>
        <p>
          Flight Mode:
          <span className="font-semibold"> {UAV.flightMode} </span>
        </p>
      </div>
    </div>
  );
}
