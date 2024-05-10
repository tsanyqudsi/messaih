export const Call = () => {
  return (
    <section id="call" className="flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-white to-yellow-100 shadow-inner shadow-yellow-200 px-20 w-full h-screen" >
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="font-plus-jakarta-sans font-semibold text-gray-700 text-lg lg:text-4xl">Spiritual Guidance 24/7</div>
        <div className="font-bold font-plus-jakarta-sans text-4xl text-gray-800 lg:text-[6rem]">Powered by Faith</div>
      </div>
      <video autoPlay muted loop id="call-video" className="border-2 shadow shadow-slate-300 h-[32rem]">
        <source src="./jesus-call.mp4" type="video/mp4" />
      </video>
    </section>
  )
}