import React, { useState } from 'react'
import menu from "../../public/menu.svg"
import armed from "../../public/armedUav.png"
import marker from "../../public/markerIcon.png"
import Image from 'next/image';
import { Switch, Tooltip } from '@nextui-org/react';
import { IFilter } from './map';


interface IMapFilter{
        filters: IFilter,
        setFilters: (filter: IFilter) => void
}

export default function MapFilter({filters, setFilters}: IMapFilter) {


  return (
  
                <Tooltip 
                        showArrow
                        placement="top"
                        content={
                                <div className="px-1 py-2 flex flex-col gap-2 font-montserrat">
                                        <p className='font-bold text-[16px]'>Filter: </p>
                                        <div className="flex flex-row gap-3 justify-between items-center">     
                                        <p>Armed UAVs</p>      
                                        <Switch color='warning' size="sm" isSelected={filters.armed} onValueChange={(newValue)=>{
                                                setFilters({...filters, armed: newValue})
                                        }}>
                                        </Switch>  
                                       
                                        </div>
                                        <div className="flex flex-row gap-3 justify-between items-center"> 
                                           <p>Unarmed UAVs</p>    
                                           <Switch color='warning' size="sm" isSelected={filters.unarmed} onValueChange={(newValue)=>{
                                                setFilters({...filters, unarmed: newValue})
                                        }}>
                                        </Switch>  
                                        </div>
                                        <div className="flex flex-row gap-3 justify-between items-center"> 
                                           <p>Forbidden Areas</p>    
                                           <Switch color='warning' size="sm" isSelected={filters.forbidden} onValueChange={(newValue)=>{
                                                setFilters({...filters, forbidden: newValue})
                                        }}>
                                        </Switch>  
                                        </div>
                                        <div className="flex flex-row gap-3 justify-between items-center"> 
                                           <p>Allowed Areas</p>    
                                           <Switch color='warning' size="sm" isSelected={filters.allowed} onValueChange={(newValue)=>{
                                                setFilters({...filters, allowed: newValue})
                                        }}>
                                        </Switch>  
                                        </div>
                                 
                                </div>
                              }
                        classNames={{
                        base: "py-2 px-4 shadow-xl text-black bg-white",
                        arrow: "bg-white",
                        }}
                >
                <div className="map-info flex w-14 h-14 absolute m-5 z-50 left-0 bottom-0 rounded-full border-3 border-stone-800 items-center justify-center bg-[#FFF700]">
                        <Image
                                src={menu}
                                alt=""
                        />
                  </div>
         </Tooltip>
               
  )
}
