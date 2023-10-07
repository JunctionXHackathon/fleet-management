"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Information from "@/components/modal/Information";
import Stream from "@/components/modal/Stream";
import MavLinkMessages from "@/components/modal/MavLinkMessages";
import "@/styles/globals.css";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const aquire = localFont({
  src: "../../public/fonts/Aquire.otf",
  variable: "--font-aquire",
});

interface InfoModal {
  onRemove: () => void
}

export default function InfoModal(props: InfoModal) {
  const [selected, setSelected] = React.useState("photos");

  return (
    <>
      <motion.div
        className={`${aquire.className} flex w-full flex-col py-10 px-8 md:px-40
          -mt-[600px]`}
        variants={{
          hidden: {opacity: 0, size: -100},
          visible: {opacity: 1, size: 0}
        }}
        initial='hidden'
        animate='visible'
        transition={{duration: 0.35, delay: 0.1}}
      >
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="information" title="Information">
            <Information onremove={props.onRemove} />
          </Tab>
          <Tab key="video" title="Live-Stream">
            <Stream onremove={props.onRemove} />
          </Tab>
          <Tab key="text" title="MAVLInk Messages">
            <MavLinkMessages onremove={props.onRemove} />
          </Tab>
        </Tabs>
      </motion.div>
    </>
  );
}
