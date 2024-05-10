export const Hero = () => {
  return (
    <section id="hero" className="flex lg:flex-row flex-col-reverse justify-center items-center gap-20 px-5 lg:px-20 w-full h-screen" style={{ backgroundImage: `url(./hero-background.jpg)` }}>
      <div className="z-10 flex flex-col gap-5 text-sky-900">
        <h1 className="font-bold font-sora text-5xl lg:text-6xl">Jesus is Calling</h1>
        <p className="font-plus-jakarta-sans font-semibold text-lg lg:text-2xl">Embark on a Digital Faith Journey Deepen Understanding with AI Guidance Find Comfort and Guidance, Anytime.</p>
      </div>
      <video autoPlay muted loop id="hero-video" className="border-2 shadow shadow-slate-300">
        <source src="./hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  )
}