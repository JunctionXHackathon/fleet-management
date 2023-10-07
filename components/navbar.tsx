"use client";
import { useState } from "react";
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
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";


interface INavbar{
        setIsAdd: (add: boolean) => void
}

export const Navbar = ({setIsAdd}: INavbar) => {
  // dummy login parameter
  const [loggedIn, setLoggedIn] = useState(false);

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
    <div className="flex justify-between items-center py-4 px-8">
      <Image src={icon} alt="icon" />
      <div className={`flex gap-4 items-center navbar_links ${isMobile && 'mobile_nav'}`}>
        {/* {!loggedIn ? (
          <div className="flex flex-col md:flex-row gap-4">
            <Link href='/login' className="btn auth" >Login</Link>
            <Link href='/signup' className="btn auth" >Sign up</Link>
          </div>
        ) : ( */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Dropdown className="btn auth">
              <DropdownTrigger>
                <Button className="btn auth text-2xl font-semibold md:text-base">
                        <p> AREAS </p>
                        <Image height={14} width={14} src={down} alt={""}></Image>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="add" onClick={removeMobileNav}> <button onClick={()=> {setIsAdd(true)}} >Add</button>  </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link href='/settings' className="btn auth" onClick={removeMobileNav}>SETTINGS</Link>
            {/*<button className="btn auth" onClick={removeMobileNav}>USERNAME</button>*/}
            <Image
              className="h-[24px] w-[24px] cursor-pointer"
              src={logout}
              alt="logout"
              onClick={handleLogout}
            />
          </div>
        {/* )} */}
      </div>
	<Image alt="" src={menu} className="cursor-pointer flex md:hidden" onClick={toggleMenu}></Image>
    </div>
  );
};
