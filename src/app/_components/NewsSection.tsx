import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

export const NewsSection = () => {
  const [data] = useState(Array.from(Array(3)))

  return (
    <div className="flex flex-col gap-12 justify-center items-center w-full p-[3rem_1rem_1rem_1rem]">
      <header className="text-center">
        <h1 className="w-4/5 font-bold text-3xl mx-auto mb-6">Como podemos ajudar ?</h1>
        <p className="max-w-md">Atente-se ao mercado e descubra soluções rápidas em nosso acervo</p>
      </header>
      <div className="flex justify-center items-center gap-4 w-4/5 max-w-sm py-2 border border-[#777] text-[#777]">
        <MagnifyingGlass  fill="#777" width={24} height={24}/>
        <p>Pesquisar...</p>
      </div>
      <div className="flex flex-col items-center gap-6 w-full">
        {
          data.map((_, i) => ( 
            <div key={i} className="w-full max-w-lg h-56 bg-[#1E1C1A] rounded-lg sm:h-64 md:h-72 xl:h-80 xl:max-w-xl"></div>
          ))
        }
      </div>
    </div>
  )
}