"use client";

import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import Details from "./Information";
import Stream from "./Stream";

interface modalProps {
  id: string | number;
}

export default function Modal({ id }: modalProps) {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col px-2 md:px-16">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="photos" title="Information">
          <Details />
        </Tab>
        <Tab key="music" title="Live-Stream">
          <Stream />
        </Tab>
      </Tabs>
    </div>
  );
}
