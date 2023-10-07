import supabase from '@/supabase';
import React, { useState } from 'react'
import { Area } from './data';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link, RadioGroup, Radio} from "@nextui-org/react";


interface Rectangles {
        bounds: number[][];
        color: string
}

interface IAddRec{
        bounds:  number[][]; 
        setBounds: ([])=> void;
        rectangles: Rectangles[]; 
        setRectangles: ([]) => void;
        setIsAdd: (add: boolean) => void;
        isAdd: boolean
}

export default function AddArea({bounds, setIsAdd, isAdd, setBounds, rectangles, setRectangles}: IAddRec) {

        const {isOpen, onOpen, onOpenChange} = useDisclosure();

        const [areaData, setAreaData] = useState<Area>({
                name: "",
                is_forbidden: false,
                max_altitude: 0,
                min_altitude: 0,
                vertices: JSON.stringify(bounds)
        })

        async function insertArea() {

                const newArea: Area = {
                        name: areaData.name,
                        is_forbidden: areaData.is_forbidden,
                        max_altitude: areaData.max_altitude,
                        min_altitude: areaData.min_altitude,
                        vertices: JSON.stringify(bounds)
                }

                setAreaData(newArea)

                const { data, error } = await supabase
                .from('area')
                .insert(newArea)
                .select()

                setIsAdd(false)

        }
        async function createRec() {
                console.log(bounds)
                if(bounds.length == 2){
                        const newRectangle = {
                                id: rectangles.length + 10,
                                bounds: bounds,
                                color: 'black', 
                              };
                              setRectangles([...rectangles, newRectangle]);
                              insertArea()
                              console.log(rectangles)
                              
                }
                console.log(rectangles)
        }

  return (
        <>
        {isAdd && <div className="flex gap-3 top-20 right-10 absolute">
                <Button onPress={onOpen} variant="bordered" color="warning">Add</Button>
                <Button color='danger' onPress={()=>{setBounds([]); setIsAdd(false);}}>Close</Button> 
                </div>
        }
        <Modal 
        className='z-50'
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Additional Info</ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Area Name"
                    placeholder="Enter area name"
                    variant="bordered"
                    value={areaData.name}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setAreaData({
                        ...areaData,
                        name: newValue,
                        });
                }} 
                  />
                  <div className="flex flex-row gap-3">
                        <RadioGroup
                                label="Is this area forbidden?"
                                color='warning'
                                value={areaData.is_forbidden.toString()}
                                onChange={(event)=>{
                                        const forb = event.target.value
                                        setAreaData({
                                                ...areaData,
                                                is_forbidden: forb==="true",
                                        });
                                }}
                                orientation="horizontal"
                        >
                                <Radio value="true">True</Radio>
                                <Radio value="false">False</Radio>
                        </RadioGroup>
                        </div>
                  <Input
                    label="Max Altitude"
                    placeholder="eg. 100"
                    type="number"
                    variant="bordered"
                    value={areaData.max_altitude.toString()}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setAreaData({
                        ...areaData,
                        max_altitude: parseInt(newValue),
                        });}}
                  />
                <Input
                    label="Min Altitude"
                    placeholder="eg. 50"
                    type="number"
                    variant="bordered"
                    value={areaData.min_altitude.toString()}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setAreaData({
                        ...areaData,
                        min_altitude: parseInt(newValue),
                        });
                }} 
                  />
                </ModalBody>
                <ModalFooter>
                <Button color='danger' onPress={()=>{setBounds([]); setIsAdd(false); onClose}}>Close</Button> 
               <Button className='yellow' onPress={()=>{createRec(); setBounds([]); setIsAdd(false); onClose}}>Add Area</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}
