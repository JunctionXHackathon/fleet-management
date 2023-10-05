import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Stream() {

  // handle clicking the screenshot button
  function handleScreenshot() {
    console.log('screenshot clicked')
  }

  // handle clicking the record button
  function handleRecord() {
    console.log('record clicked')
  }

  return (
    <Card>
      <CardBody className="flex flex-col gap-4">
      <iframe height='425' src="https://www.youtube.com/embed/CEMPq_r8UYQ?si=InQqEeCoB3Vcjukm" allowFullScreen></iframe>
      <div className="flex gap-4 justify-end">
        <button className="btn screenshot" onClick={handleScreenshot}>Screenshot</button>
        <button className="btn record" onClick={handleRecord}>Record</button>
      </div>
      <div className="flex justify-end">
        <button className="btn close">Return</button>
      </div>
      </CardBody>
    </Card>
  );
}
