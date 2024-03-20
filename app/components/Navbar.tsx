import Link from 'next/link'
import { FaLaptop } from "react-icons/fa"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white/60 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-lg z-10">
      <div className="prose prose-sm mx-auto flex justify-between flex-col sm:flex-row items-center">
        <Link href="/" className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Image src="/images/blog-logo.svg" alt="logo" width={180} height={28} />
        </Link> 
        <div className="flex flex-row items-center justify-center sm:justify-evenly gap-4 px-4 text-lg font-medium text-white lg:text-4xl">
          <Link
            className="p-4 social-icon hover:text-blue-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://portfolio-website-ruddy-beta.vercel.app"
            target="_blank"
          >
            <FaLaptop className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-8 lg:h-8" />
          </Link>
          <Link
            className="p-4 social-icon hover:text-blue-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/sergioestebantorres/"
            target="_blank"
          >
            <BsLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-8 lg:h-8" />
          </Link>
          <Link
            className="p-4 social-icon hover:text-blue-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/myplancash"
            target="_blank"
          >
            <BsGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-8 lg:h-8" />
          </Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
