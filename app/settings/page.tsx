"use client"
import React, { useEffect, useState } from "react";
import {Button, Input} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import ModalUAV from "@/components/settings/add.uav";
import TableUAV from "@/components/settings/uav.table";
import supabase from "@/supabase";
import { UAVS } from "@/components/settings/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "@/components/navbar";

interface Params{
        mqtt_host: string,
        mqtt_port: number
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uavs, setUAVS] = useState<UAVS[]>([]);

  useEffect(() => {
        const getUAVData = async () => {
      
        let { data, error } = await supabase
        .from('UAV')
        .select('*')

        if (data) {
                setUAVS(data)
                console.log(data)
        }

}
getUAVData();

}, [])

  const initialUAV: UAVS = {
        stream_url: "",
        id: 0,
        topic: ""
  }


  const [uavData, setUavData] = useState<UAVS>(initialUAV)

  const [params, setParams] = useState<Params>();
  const [isAdd, setIsAdd] = useState(false);


  useEffect(() => {
          const getParams = async () => {
        
          let { data, error } = await supabase
          .from('params')
          .select('*')

          if (data) {
                setParams(data[0])
                  console.log(data)
          }
          if (error) {
                console.log(error)
          }

  }
  getParams();
  
  }, [])




  return ( <div className="settings-container flex flex-col">
           <Navbar setIsAdd={setIsAdd}/>
            <Card className="w-full p-5">
                <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                        <p className="text-lg">Settings</p>
                        </div>
                </CardHeader>
                <Divider/>
                <CardBody className="gap-4">
                <div className="flex flex-col gap-4 p-4">
                        <p className="text-md text-gray-300">BOKER</p>
                        <div className="flex flex-col">
                        <div className="flex gap-4">
                                <p className="text-base text-default-500">Host:</p>
                                <p className="text-base">{params?.mqtt_host}</p>
                        </div>
                        <div className="flex gap-4">
                                <p className="text-base text-default-500">Port:</p>
                                <p className="text-base">{params?.mqtt_port}</p>
                        </div>
                        </div>
                </div>
                <Divider /> 
                <TableUAV uavs={uavs} setUAVS={setUAVS} setUavData={setUavData} setIsModalOpen={setIsModalOpen}/>

                <div className="add-btn w-1/4 flex items-end">
                        <ModalUAV setUAVS={setUAVS} isModalOpen={isModalOpen} uavData={uavData} setUavData={setUavData} setIsModalOpen={setIsModalOpen}/>
                        <Button className="bg-[#FFF700] text-black" startContent={<FontAwesomeIcon icon={faPlus} />} onClick={()=> {setUavData(initialUAV); setIsModalOpen(true)}}>Create</Button>
                </div>
                
                
                </CardBody>
                </Card>
               
    </div>
  );
}
