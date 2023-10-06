"use client";
import { useState } from "react";
import Link from "next/link";
import icon from "../assets/icon/icon.png";
import logout from "../assets/icon/logout.png";
import menu from "../assets/icon/menu.png";
import down from "../assets/icon/down-arrow.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import data from '../data/regions'
import localFont from 'next/font/local'

const aquire = localFont({
	src: '../public/fonts/Aquire.otf',
	variable: '--font-aquire'
})


export const Navbar = () => {
  // dummy login parameter
  const [loggedIn, setLoggedIn] = useState(false);
  const username = 'bugHeads'
	// dummy regions
	const [regions, setRegions] = useState(data)

	// handling responsive navbar
	// handling menu
  const [isMobile, setIsMobile] = useState(false)
  function toggleMenu() {
    setIsMobile(previous => !previous)
  }
  // to get the nav away when click a link
  function removeMobileNav() {
    setIsMobile(false)
  }

  // logout
  function handleLogout() {
    setLoggedIn(false)
  }

  
  return (
    <div className={`${aquire.className} flex justify-between items-center py-4 px-8`}>
      <Link href='/'><Image src={icon} alt="icon" /></Link>
      <div className={`flex gap-4 items-center navbar_links ${isMobile && 'mobile_nav'}`}>
        {!loggedIn ? (
          <div className="flex flex-col md:flex-row gap-4">
            <Link href='/login' className="btn auth" >Login</Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Dropdown className="btn auth">
              <DropdownTrigger>
                <Button className="btn auth text-2xl font-semibold md:text-base">
									<p> AREAS </p>
									<Image height={14} width={14} src={down}></Image>
								</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
								{regions.map(region => {
									return (
										<DropdownItem className={aquire.className} key={region.id} onClick={removeMobileNav}> {region.region} </DropdownItem>
									)
								})}
              </DropdownMenu>
            </Dropdown>
            <button className="btn auth" onClick={removeMobileNav}>SETTINGS</button>
            <p className="text-yellowish" onClick={removeMobileNav}> {username} </p>
            <Image
              className="h-[24px] w-[24px] cursor-pointer"
              src={logout}
              alt="logout"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
			<Image src={menu} className="cursor-pointer flex md:hidden" onClick={toggleMenu}></Image>
    </div>
  );
};
