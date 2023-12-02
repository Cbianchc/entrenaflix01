import { useCallback, useState, useEffect } from "react";

import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import AccountMenu from "./AccountMenu";

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handlescroll)
  
    return () => {
      window.removeEventListener('scroll', handlescroll)
    }
  }, [])
  



  const toogleMObileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, [])

  const toogleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, [])

    return(
      <nav className=" w-full fixed z-40">
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
          <img src="/images/entrenaflix.png" 
              alt="logo" 
              className="h-7 lg:h-7"
          />
            <div className="
              flex-row
              ml-8
              gap-7
              hidden
              lg:flex
            ">
              <NavbarItem label="Rutinas" />
              <NavbarItem label="Ejercicios" />
              <NavbarItem label="Popular" />
              <NavbarItem label="Mi lista" />
              <NavbarItem label="Buscar" />
              </div>
              <div 
                onClick={toogleMObileMenu}
                className="
                  lg:hidden 
                  flex 
                  flex-row 
                  items-center 
                  gap-2 
                  cursor-pointer 
                  relative
                  ml-8
                ">
                  <p className="text-white text-md">Buscar</p>
                  <BsChevronDown  className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                  <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                  <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div 
                    onClick={toogleAccountMenu}    
                    className="flex flex-row items-center gap-2 cursor-pointer relative">
                      <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                          <img src="/images/default-green.png" alt="image" />
                        </div>
                        <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}   />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
        </div>
        
      </nav>
    )
}
export default Navbar;