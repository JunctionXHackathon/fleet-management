"use client"
// import '@/mqtt-patch'; // First import
import {Tables} from "@/lib/database.types";
import * as mqtt from 'mqtt/dist/mqtt.min'
import {useCallback, useEffect, useState} from "react";
import {MqttClient} from "mqtt";

interface IDashboardProps {
  params: Tables<"params"> | undefined;
  UAVs: Tables<"UAV">[] | undefined;
  areas: Tables<"area">[] | undefined;
}


const mqttOptions: mqtt.IClientOptions = {
  "host": "13.38.173.241",
  "port": 1883,
  "clientId": "icodegfx",
  "username": "icodegfx",
  "protocol": "mqtt"
}




export default function Dashboard({params: paramsProp, UAVs: UAVsProp, areas: areasProp}: IDashboardProps) {

  const [params, setParams] = useState(paramsProp);
  const [UAVs, setUAVs] = useState(UAVsProp);
  const [areas, setAreas] = useState(areasProp);


  const [mqttClient, setMqttClient] = useState<MqttClient>();



  return <div>test</div>
}