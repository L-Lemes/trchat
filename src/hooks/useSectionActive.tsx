'use client'

import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ISectionActiveContextProps {
  sectionActive: 'chat' | 'news'
  handleSectionActive: (value: 'chat' | 'news') => void
}

interface ISectionActiveProviderProps extends PropsWithChildren {}

const SectionActiveContext = createContext<ISectionActiveContextProps>({} as ISectionActiveContextProps)

export const SectionActiveProvider: React.FC<ISectionActiveProviderProps> = ({children}) => {
  const [sectionActive, setSectionActive] = useState<'news' | 'chat'>('news')
  
  function handleSectionActive(value: 'chat' | 'news') {
    setSectionActive(value)
  }

  useEffect(() => {
    console.log(sectionActive)
  }, [sectionActive])


  return (
    <SectionActiveContext.Provider value={{sectionActive, handleSectionActive}}>
      {children}
    </SectionActiveContext.Provider>
  )
}

export const useSectionActive = () => {
  const context = useContext(SectionActiveContext)
  return context
}