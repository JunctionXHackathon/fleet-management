"use client";

import { Link } from "@nextui-org/link";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import {Navbar} from "@/components/navbar";
import mainDrone from '../assets/objects/mainDrone.png'

const aquire = localFont({
  src: "../public/fonts/Aquire.otf",
  variable: "--font-aquire",
});

export default function Home() {
  return (
    <div className={`${aquire.className}`}>
      <Navbar setIsAdd={()=>{}} />
      <div className="flex flex-col justify-center items-center text-center gap-10 pt-0 md:pt-10">
        <motion.p className="font-semibold text-4xl md:text-7xl"
					variants={{
						hidden: {opacity: 0, y: -100},
						visible: {opacity: 1, y: 0}
					}}
					initial='hidden'
					animate='visible'
					transition={{duration: 0.35, delay: 0.1}}
				>
					SPREAD YOUR WINGS
				</motion.p>
				<motion.div
					variants={{
						hidden: {opacity: 0, y: 100},
						visible: {opacity: 1, y: 0}
					}}
					initial='hidden'
					animate='visible'
					transition={{duration: 0.35, delay: 0.1}}
				>
						<Image src={mainDrone} alt={"sqd"}/>
				</motion.div>
      </div>
    </div>
  );
}
