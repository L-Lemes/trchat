'use client'

import { NavbarOpenIcon } from "./NavbarOpenIcon"
import { useEffect, useState } from "react"
import { useSectionActive } from "@/hooks/useSectionActive"
import { ChatDots, Newspaper } from "@phosphor-icons/react"

export const Navbar = () => {
  const {sectionActive, handleSectionActive} = useSectionActive()

  const [isOpen, setIsOpen] = useState(false)

  function handleSetIsOpen() {
    setIsOpen(true)
  }

  useEffect(() => {
    isOpen && setTimeout(() => setIsOpen(false), 6900)
  }, [isOpen])
    

  return (
    <div className="fixed top-1/3 -translate-y-1/3 right-0">
      {isOpen ?
        <div className={`flex flex-col gap-8 px-4 py-6 w-fit h-fit bg-white mr-6 backdrop-blur-md bg-opacity-15 rounded-lg shadow-inner-shadow-light-and-dark ${isOpen && 'animate-sumir'}`}>
          <button onClick={() => handleSectionActive('chat')}>
            <ChatDots width={36} height={36} fill={sectionActive === 'chat' ? "#D64000" :"#FFF"} className={`${sectionActive === 'chat' ? "scale-125" : ''}`}/>
          </button>
          <button onClick={() => handleSectionActive('news')}>
            <Newspaper width={36} height={36} fill={sectionActive === 'news' ? "#D64000" :"#FFF"} className={`${sectionActive === 'news' ? "scale-125" : ''}`}/>
          </button>
        </div>
      :  
        <button onClick={handleSetIsOpen}>
          <NavbarOpenIcon />
        </button>
      }
      
    </div>
  )
}