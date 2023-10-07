import React, { useState } from "react";
import Image from "next/image";
import uav from "../../assets/icon/UAV.png";
import aim from "../../assets/icon/aim.png";
import health from "../../assets/icon/health.png";
import air from "../../assets/icon/air.png";

interface IUAV {
  status: any
}

export default function UAV(props: IUAV) {
  
  const {armed, fm, health, in_air, state} = props.status

  return (
    <div className="UAV flex flex-col gap-4 bg-opacity-50 md:m-4 p-6 rounded-3xl">
      <p className="font-bold text-xl"> UAV Status: </p>
      <div className="flex gap-2 items-center">
        <Image alt="" src={uav}></Image>
        <p>
          UAV is in Air:
          <span className="font-semibold">
            {" "}
            {in_air ? "Yes" : "No"}{" "}
          </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Image alt="" src={aim}></Image>
        <p>
          UAV is Armed:
          <span className="font-semibold"> {armed ? "Yes" : "No"} </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Image alt="" src={health}></Image>
        <p>
          System Health Status:
          <span className="font-semibold"> {health ? health : 'unrecorded'} </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
      <Image alt="" src={air}></Image>
        <p>
          Flight Mode:
          <span className="font-semibold"> {fm ? fm : 'unrecorded'} </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <p>
          State:
          <span className="font-semibold"> {state ? state : 'unrecorded'} </span>
        </p>
      </div>
    </div>
  );
}
