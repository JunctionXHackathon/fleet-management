"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Information from "../components/modal/Information";
import Stream from "../components/modal/Stream";
import MavLinkMessages from "@/components/modal/MavLinkMessages";
import '../styles/globals.css'

interface modalProps {
  id: string | number;
}

export default function Modal({ id }: modalProps) {

  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col py-10 px-2 md:px-16">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="information" title="Information">
          <Information />
        </Tab>
        <Tab key="video" title="Live-Stream">
          <Stream />
        </Tab>
        <Tab key="text" title="MAVLInk Messages">
          <MavLinkMessages />
        </Tab>
      </Tabs>
      
    </div>
  );
}
