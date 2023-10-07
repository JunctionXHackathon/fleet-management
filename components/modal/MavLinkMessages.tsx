import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

interface Mav {
  onremove: () => void
}

export default function MavLinkMessages(props: Mav) {
  // dummy
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello there",
    },
    {
      id: 2,
      message: "Hello world, this is another message",
    },
    {
      id: 3,
      message: "One extra message from here",
    },
  ]);
  return (
    <Card className="modal">
      <CardBody className="flex flex-col gap-4">
        <div
          className="battery flex flex-col gap-4 md:m-4 p-6 rounded-3xl text-white
          max-h-[500px] overflow-y-scroll"
        >
          <p className="font-bold text-xl"> Recent Messages: </p>
          {messages.map((msg) => {
            return (
              <p className="text-md" key={msg.id}>
                {" "}
                - {msg.message}{" "}
              </p>
            );
          })}
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
