import { Card, CardBody, CardHeader, user } from "@nextui-org/react";
import Link from "next/link";
export default function Stream() {
  return (
    <Card className="modal">
      <CardBody className="flex flex-col gap-4">
        <iframe
          height="425"
          src="https://www.youtube.com/embed/CEMPq_r8UYQ?si=InQqEeCoB3Vcjukm"
          allowFullScreen
        ></iframe>
        <div className="flex justify-end">
          <Link href='/' className="btn close">Return</Link>
        </div>
      </CardBody>
    </Card>
  );
}
