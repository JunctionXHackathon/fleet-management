"use client"

// @ts-ignore
import {Connector} from "mqtt-reactjs-hooks";

export default function MqttWrapper({paramsData, children}: any) {
  return(
    <div>{children}</div>
    // <Connector brokerUrl={`${paramsData.params?.mqtt_host}:${paramsData.params?.mqtt_port}`}>
    //   {children}
    // </Connector>
  )
}