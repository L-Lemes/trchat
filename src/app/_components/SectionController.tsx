'use client'

import { NewsSection } from "./NewsSection";
import { ChatSection } from "./ChatSection";

import { useSectionActive } from "@/hooks/useSectionActive"

export const SectionController = () => {
  const {sectionActive} = useSectionActive()

  return sectionActive === 'chat' ? <ChatSection /> : <NewsSection/>
}