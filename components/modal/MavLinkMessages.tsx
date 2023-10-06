import { Card, CardBody, CardHeader, user } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

export default function MavLinkMessages() {
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
        <div className="battery flex flex-col gap-4 md:m-4 p-6 rounded-3xl text-white">
        <p className="font-bold text-xl"> Recent Messages: </p>
          {
            messages.map((msg) => {
              return (
                <p className="text-md" key={msg.id}> - {msg.message} </p>
              )
            })
          }
        </div>
        <div className="flex justify-end">
          <Link href='/' className="btn close">Return</Link>
        </div>
      </CardBody>
    </Card>
  );
}
