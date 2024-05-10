import { FaInstagram, FaYoutube } from "react-icons/fa6"

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-5 bg-sky-50 shadow-inner shadow-sky-100 px-5 lg:px-20 w-full h-20">
      <div className="font-plus-jakarta-sans font-semibold text-gray-700 text-xs lg:text-sm">Copyright © 2022. All Rights Reserved.</div>
      <div className="flex gap-3">
        <a href="https://www.instagram.com/messaihapp/"><FaInstagram className="size-6" /></a>
        <a href="https://www.youtube.com/@Messaihapp/featured"><FaYoutube className="size-6" /></a>
      </div>
    </footer>
  )
}