"use client"
import {Tables} from "@/lib/database.types";
import {useEffect, useState} from "react";
import {socket} from "@/socket";
import {IUAVPacket, IUAVPacketRx} from "@/types";

interface IDashboardProps {
  params: Tables<"params"> | undefined;
  UAVs: Tables<"UAV">[] | undefined;
  areas: Tables<"area">[] | undefined;
}





export default function Dashboard({params: paramsProp, UAVs: UAVsProp, areas: areasProp}: IDashboardProps) {

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
      // console.log(value)

      // check if UAV with same /topic exists
      // if it exists, override it with new data
      // if not, add new one to the array

      const {battery, gps, status, deviceTopic} = packet

      setUavsData((prev) => {
        let copyPrev = [...prev]
        const index = copyPrev.findIndex(currentPacket => currentPacket.deviceTopic === packet.deviceTopic)

        if (!packet.deviceTopic) {
          console.log(packet)
        }

        console.log(index)

        if (index >= 0) {
          // console.log("index", index)
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


  return <div>test</div>
}