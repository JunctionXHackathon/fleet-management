"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import Battery from "./Battery";
import GPS from "./GPS";
import UAV from "./UAV";

interface Info {
  onremove: () => void;
}

export default function Details(props: Info) {
  return (
    <Card className="modal">
      <CardBody className="modal_container md:gap-0 gap-4">
        <Battery />
        <GPS />
        <UAV />
      </CardBody>
      <br />
      <div className="flex justify-end relative bottom-6 right-6">
        <button className="btn close" onClick={props.onremove}>
          CLOSE
        </button>
      </div>
    </Card>
  );
}
