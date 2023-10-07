import { Card, CardBody, CardHeader, user } from "@nextui-org/react";
import Link from "next/link";

interface Str {
  onremove: () => void;
}

export default function Stream(props: Str) {
  return (
    <Card className="modal">
      <CardBody className="flex flex-col gap-4">
        <iframe
          height="425"
          src="https://www.youtube.com/embed/CEMPq_r8UYQ?si=InQqEeCoB3Vcjukm"
          allowFullScreen
        ></iframe>
        <div className="flex justify-end">
          <button className="btn close" onClick={props.onremove}>
            CLOSE
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
