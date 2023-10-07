import React from 'react'
import qst from "../../public/question.svg"
import armed from "../../public/armedUav.png"
import marker from "../../public/markerIcon.png"
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

export default function MapInfo() {
  return (
  
                <Tooltip 
                        showArrow
                        placement="top"
                        content={
                                <div className="px-1 py-2 flex flex-col gap-2 font-montserrat">
                                        <div className="flex flex-row gap-3 justify-start items-center">           
                                        <Image
                                                width={"35"}
                                                src={armed}
                                                alt=""
                                        />
                                         <p>Armed UAV</p>
                                        </div>
                                        <div className="flex flex-row gap-3 justify-start items-center">     
                                           <Image
                                               width={"35"}
                                                src={marker}
                                                alt=""
                                        />
                                           <p>Unarmed UAV</p>
                                        </div>
                                 
                                </div>
                              }
                        classNames={{
                        base: "py-2 px-4 shadow-xl text-black bg-white",
                        arrow: "bg-white",
                        }}
                >
                <div className="map-info flex w-14 h-14 absolute m-5 z-50 right-0 bottom-0 rounded-full border-3 border-stone-800 items-center justify-center bg-[#FFF700]">
                        <Image
                                src={qst}
                                alt=""
                        />
                  </div>
         </Tooltip>
               
  )
}
