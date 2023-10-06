"use client"
import AddArea from "@/components/area/add.area";
import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";
import { useState } from "react";


export default function Home() {
  const [isAdd, setIsAdd] = useState(false);

  const Map = dynamic(
    () => import('@/components/map/map'),
    { ssr: false }
  )


  return (
    <div className="dashboard">
      <Navbar setIsAdd={setIsAdd}/>
      {isAdd && <div className="w-full text-rose-500 grid grid-cols-12">
          <p className="border border-rose-500 m-3 p-2 rounded-md col-end-11 col-span-4">Please choose two points on the map</p>
      </div>}
      <div className=" w-full h-[700px]">
        <Map isAdd={isAdd} setIsAdd={setIsAdd} />
      </div>
    </div>
  );
}