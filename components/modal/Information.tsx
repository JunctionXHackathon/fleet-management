"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Battery from "./Battery";
import GPS from "./GPS";
import UAV from "./UAV";

export default function Details() {
  return (
    <Card>
      <CardBody className="modal_container md:gap-0 gap-4">
        <Battery />
        <GPS />
        <UAV />     
      </CardBody>
    </Card>
  );
}
