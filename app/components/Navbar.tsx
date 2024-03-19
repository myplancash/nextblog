import Link from 'next/link'
import { FaLaptop } from "react-icons/fa"
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link href="/" className="text-white/90 no-underline hover:text-white">Sergio Esteban Torres</Link>
          </h1>
        <div className="flex flex-row items-center justify-center sm:justify-evenly align-middle gap-2 px-4 text-lg font-medium text-white lg:text-4xl">
          <Link
            className="text-white/90  p-4  hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://portfolio-website-ruddy-beta.vercel.app"
            target="_blank"
          >
            <FaLaptop />
          </Link>
          <Link
            className="text-white/90  p-4 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/sergioestebantorres/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>

          <Link
            className=" text-white/90 p-4 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/myplancash"
            target="_blank"
          >
            <BsGithub />
          </Link>
      </div>
      </div>
    </nav>
  )
}

export default Navbar