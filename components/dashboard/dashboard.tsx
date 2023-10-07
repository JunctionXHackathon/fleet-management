"use client"
import {Tables} from "@/lib/database.types";
import {useEffect, useMemo, useState} from "react";
import {socket} from "@/socket";
import {IUAVPacket, IUAVPacketRx} from "@/types";
import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";


interface IDashboardProps {
  params: Tables<"params"> | undefined;
  UAVs: Tables<"UAV">[] | undefined;
  areas: Tables<"area">[] | undefined;
}





export default function Dashboard({params: paramsProp, UAVs: UAVsProp, areas: areasProp}: IDashboardProps) {

   const [isAdd, setIsAdd] = useState(false);


   const Map = useMemo(() => dynamic(
        () => import('@/components/map/map'),
        { ssr: false }
      ), [])

  const [isConnected, setIsConnected] = useState(socket.connected);

  const [params, setParams] = useState(paramsProp);
  const [UAVs, setUAVs] = useState(UAVsProp);
  const [areas, setAreas] = useState(areasProp);

  const [uavsData, setUavsData] = useState<IUAVPacket[]>([])


  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMsgEvent(packet: IUAVPacketRx) {

      // check if UAV with same /topic exists
      // if it exists, override it with new data
      // if not, add new one to the array

      const {battery, gps, status, deviceTopic} = packet

      setUavsData((prev) => {
        let copyPrev = [...prev]
        const index = copyPrev.findIndex(currentPacket => currentPacket.deviceTopic === packet.deviceTopic)

        if (!packet.deviceTopic) {
          
        }

       

        if (index >= 0) {
          const currUavData = copyPrev[index]

          // copyPrev[index] = {...currUavData, ...packet}

          if (battery) {
            copyPrev[index].battery = {...copyPrev[index].battery, ...battery}
          }

          if (gps) {
            copyPrev[index].gps = {...copyPrev[index].gps, ...gps}
          }

          if (status) {
            copyPrev[index].status = {...copyPrev[index].status, ...status}
          }

        } else {


          const newPacket: IUAVPacket = {
            status: {
              armed: undefined,
              health: undefined,
              mav_msg: undefined,
              in_air: undefined,
              state: undefined,
              fm: undefined
            },
            gps: {
              abs: undefined,
              lat: undefined,
              lon: undefined,
              rel: undefined,
              fx: undefined,
              ns: undefined
            },
            deviceTopic,
            battery: {
              vl: undefined,
              id: undefined,
              pt: undefined
            }
          }

          copyPrev.push({...newPacket, ...packet})

        }

        return copyPrev

      })

    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('msg', onMsgEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('msg', onMsgEvent);
    };
  }, []);


  return  <div className="dashboard">
  <Navbar setIsAdd={setIsAdd}/>
  {isAdd && <div className="w-full text-rose-500 grid grid-cols-12">
      <p className="border border-rose-500 m-3 p-2 rounded-md col-end-11 col-span-4">Please choose two points on the map</p>
  </div>}
  <div className=" w-full h-[700px]">
    <Map areas={areas} uavs={UAVs} uavsData={uavsData} isAdd={isAdd} setIsAdd={setIsAdd} />
  </div>
</div>
}