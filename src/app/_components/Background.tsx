export const Background = () => {
  return (
    <>
      <div className="absolute -z-10 w-full h-full bg-[#0D0D0D] bg-opacity-70 backdrop-blur-3xl"></div>
      <div className="absolute -z-20 top-0 left-0 w-52 h-52 bg-gradient-radial from-[#F4A119] to-[rgba(244, 161, 25, 0)] to-70% rounded-full opacity-30"></div>
      <div className="absolute -z-20 bottom-1/3 right-0 w-52 h-52 bg-gradient-radial from-[#ED6712] to-[rgba(237, 103, 18, 0)] to-70% rounded-full opacity-30"></div>
      <div className="absolute -z-20 -bottom-16 -left-16 w-52 h-52 bg-gradient-radial from-[#B7530C] to-[rgba(183, 83, 12, 0)] to-70%  rounded-full opacity-30"></div>
    </>
  )
}