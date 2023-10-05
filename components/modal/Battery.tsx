import React, { useState } from "react";
import { Progress } from "@nextui-org/react";


export default function Battery() {

  // dummy data
  const [battery, setBattery] = useState({
    id: 123456789,
    level: 70,
    powerSupply: true,
  })

  return (
    <div className="battery flex flex-col gap-4 bg-gray-300 bg-opacity-50 md:m-4 p-6 rounded-xl">
      <p className="font-bold text-xl"> Battery Information: </p>
      <Progress
        size="sm"
        radius="sm"
        classNames={{
          base: "max-w-md",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        label="Level"
        value={battery.level}
        showValueLabel={true}
      />

      <p>
        {" "}
        <span className="font-semibold"> ID: </span> {battery.id}{" "}
      </p>
      <p>
        {" "}
        <span className="font-semibold"> Power Supply: </span>{" "}
        {battery.powerSupply ? "Yes" : "No"}{" "}
      </p>
    </div>
  );
}
