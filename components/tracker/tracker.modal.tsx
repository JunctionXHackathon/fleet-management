"use client"
import React, { useMemo } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import { UAVS } from "../settings/data";
import supabase from "@/supabase";
import { icon } from "leaflet";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface IModal{
        uavData: UAVS;
        setUavData: (uav: UAVS) => void;
        isModalOpen: boolean;
        setIsModalOpen: (isOpen: boolean) => void;
        setUAVS: (uav: UAVS[]) => void;
}


export default function TrackerModal({uavData, setUavData, isModalOpen, setIsModalOpen, setUAVS}: IModal) {

        const Map = useMemo(() => dynamic(
                () => import('@/components/tracker/tracker.map'),
                { ssr: false }
              ), [])

         async function getData() {
        
                let { data, error } = await supabase
                .from('UAV')
                .select('*')

                if (data) {
                        setUAVS(data)
                }         
        }


  return (
    <div className="flex flex-col gap-2">
      <Modal
        size="5xl"
        backdrop="opaque"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                UAV
              </ModalHeader>
              <ModalBody>
              <div className="flex flex-row text-white gap-4 p-4">
              <Card className="max-w-[600px]">
                <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                        <p className="text-md">Flight Tracker</p>
                        </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                        <Map />
                </CardBody>
        </Card>
        <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                        <p className="text-md">UAV Info</p>
                        </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                        <div className="flex flex-col">
                                <div className="flex text-sm gap-2">
                                        <p className="text text-gray-400">Topic </p>
                                        <p>{uavData.topic} </p>
                                </div>
                                <div className="flex text-sm gap-2">
                                        <p className="text text-gray-400">Stream </p>
                                        <p>{uavData.stream_url} </p>
                                </div>
                        </div>
                </CardBody>
        </Card>
                </div> 
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button startContent={<FontAwesomeIcon icon={faDownload} />} className="bg-[#FFF700] text-black" onPress={()=>{
                        onClose()
                        }}>
                  Export
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
