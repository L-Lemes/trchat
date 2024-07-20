import { ArrowCircleUp } from "@phosphor-icons/react"
import { TRChatIcon } from "./TRChatIcon"

export const ChatSection = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full text-[#CCC] text-center p-4">
      <TRChatIcon className="mb-auto translate-y-full"/>
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center border border-[#CCC] px-6 py-1.5 mb-3">
          <p className="text-sm">Digite sua mensagem ao TRChat</p>
          <ArrowCircleUp  weight="fill" color="#CCC" width={36} height={36}/>
        </div>
        <p className="text-xs">Não compartilhe informações confidenciais de sua empresa</p>
      </div>
    </div>
  )
}