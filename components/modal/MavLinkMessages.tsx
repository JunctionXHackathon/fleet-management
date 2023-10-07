import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

interface Mav {
  onremove: () => void
  mavMessage: any
}

export default function MavLinkMessages(props: Mav) {
  return (
    <Card className="modal">
      <CardBody className="flex flex-col gap-4">
        <div
          className="battery flex flex-col gap-4 md:m-4 p-6 rounded-3xl text-white
          max-h-[500px] overflow-y-scroll"
        >
          <p className="font-bold text-xl"> Recent Messages: </p>
          {props.mavMessage ? props.mavMessage : 'There are no messages to show'}
        </div>
        <div className="flex justify-end">
          <button className="btn close" onClick={props.onremove}>
            CLOSE
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
