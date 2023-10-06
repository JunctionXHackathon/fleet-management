import React, { useState } from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import energy from '../../assets/icon/energy.png'


export default function Battery() {

  // dummy data
  const [battery, setBattery] = useState({
    id: 123456789,
    level: 70,
    powerSupply: true,
  })

  return (
    <div className="battery flex flex-col gap-4 md:m-4 p-6 rounded-3xl">
      <p className="font-bold text-xl"> Battery Information: </p>
      <Progress
        size="sm"
        radius="sm"
        classNames={{
          base: "max-w-md",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-red-500 to-yellowish",
          label: "tracking-wider font-medium text-default-600 text-white",
          value: "text-foreground/60 text-white",
        }}
        label="Level"
        value={battery.level}
        showValueLabel={true}
      />

      <p>
        ID: <span className="font-semibold"> {battery.id} </span>
      </p>
      <div className="flex gap-2">
        <Image alt={""} src={energy}/>
        <p>
          Power Supply: <span className="font-semibold">
          {battery.powerSupply ? "Yes" : "No"}</span>
        </p>
      </div>
    </div>
  );
}
