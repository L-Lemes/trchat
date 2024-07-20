'use client'
import { SectionActiveProvider } from "@/hooks/useSectionActive";
import { Navbar } from "./_components/Navbar";
import { SectionController } from "./_components/SectionController";
import { Background } from "./_components/Background";


export default function Home() {
  return (
    <SectionActiveProvider>
      <div className="relative w-full h-full overflow-hidden">
        <Background/>
        <Navbar/>
        <SectionController/>
      </div>
    </SectionActiveProvider>
  );
}
