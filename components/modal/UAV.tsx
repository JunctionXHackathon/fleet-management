import React, { useState } from "react";


export default function UAV() {

  // dummy data
  const [UAV, setUAV] = useState({
    inFlight: true,
    armed: false,
    state: 'working',
    messages: 'message1',
    health: 'good',
    flightMode: 'normal'
  })

  return (
    <div className="UAV flex flex-col gap-4 bg-gray-300 bg-opacity-50 md:m-4 p-6 rounded-xl">
      <p className="font-bold text-lg"> UAV Status: </p>
      <p>
        {" "}
        <span className="font-semibold"> UAV is in Air: </span>{" "}
        {UAV.flightMode ? "Yes" : "No"}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> UAV is Armed: </span>{" "}
        {UAV.armed ? "Yes" : "No"}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> MAVLink Messages: </span>{" "}
        {UAV.messages}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> System Health Status: </span>{" "}
        {UAV.health}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Flight Mode: </span> {UAV.flightMode}{" "}
      </p>
    </div>
  );
}
