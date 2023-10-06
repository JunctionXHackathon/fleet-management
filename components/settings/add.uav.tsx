import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react";
import { UAVS } from "./data";
import supabase from "@/supabase";
import { icon } from "leaflet";

interface IModal{
        uavData: UAVS;
        setUavData: (uav: UAVS) => void;
        isModalOpen: boolean;
        setIsModalOpen: (isOpen: boolean) => void;
        setUAVS: (uav: UAVS[]) => void;
}


export default function ModalUAV({uavData, setUavData, isModalOpen, setIsModalOpen, setUAVS}: IModal) {

         async function getData() {
        
                let { data, error } = await supabase
                .from('UAV')
                .select('*')

                if (data) {
                        setUAVS(data)
                      
                }         
        }

        async function updateUAV(id: number) {
                
                const { data, error } = await supabase
                .from('UAV')
                .update({topic: uavData.topic, stream_url: uavData.stream_url})
                .eq('id', id)
                .select()
                if (error) {
                      console.log(error)  
                }
                if (data) {
                        getData() 
                }

        }

        async function insertNewUAV() {
                
                const { data, error } = await supabase
                .from('UAV')
                .insert([{'topic': uavData.topic, 'stream_url': uavData.stream_url}])
                .select()

                if (data) {
                        getData() 
                }

        }

       async function save() {
          
                let { data, error } = await supabase
                .from('UAV')
                .select("*")
                .eq('id', uavData.id)
                console.log(uavData.id)

                console.log(data)

              if (Array.isArray(data) && data.length > 0) {
                        updateUAV(uavData.id)
                        console.log('here')
                }
                else{
                        insertNewUAV()
                        console.log('there')
                }



        }

  return (
    <div className="flex flex-col gap-2">
      <Modal
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
              <div className="flex flex-col text-white gap-4 p-4">
              <Input
                type="text"
                variant="flat"
                value={uavData.topic}
                onChange={(e) => {
                        const newValue = e.target.value;
                setUavData({
                ...uavData,
                topic: newValue,
                });
                }}
                label="Topic"
                placeholder="Enter the UAV topic"
                />
                <Input
                type="text"
                variant="flat"
                value={uavData.stream_url}
                onChange={(e) => {
                        const newValue = e.target.value;
                setUavData({
                ...uavData,
                stream_url: newValue,
                });
                }}
                label="Stream"
                placeholder="Enter the UAV stream url"
                />

                </div> 
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#FFF700] text-black" onPress={()=>{
                        save()
                        onClose()
                        }}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
