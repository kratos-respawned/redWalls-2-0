import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUpArrowAlt } from "react-icons/bi";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="bg-[#121212] py-3  px-4 relative text-slate-200 flex justify-between items-center">
      <div className="md:flex-1">
        <Link href="/">
          <img
            src="https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjo2OCwidyI6MTI1MCwiZnMiOjU0LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmVkd2FsbHM/gbshinto-regular.png"
            alt="Anime fonts"
            className="invert w-32 bg-white "
          />
        </Link>
      </div>
      <ul
        className={`flex flex-col font-mono border-0 md:w-max md:flex-row md:opacity-100 md:pointer-events-auto items-center bg-[#131313] w-full md:static text-white absolute bottom-0 left-0 ${
          menu
            ? " translate-y-full opacity-100 z-50 border-t-[0.1px] border-t-[#8a8a8a0e]"
            : "  pointer-events-none opacity-0 z-0 "
        }  transition-all transform-gpu`}
      >
        <li className="pb-2 hover:text-red-500  pt-3 md:p-0 md:px-3">
          <Link href="/">Home</Link>
        </li>
        <li className="pb-2 hover:text-red-500 md:p-0 md:px-3">
          <Link href="/walls">Wallpaper</Link>
        </li>
        <li className="pb-2 hover:text-red-500 md:p-0 md:px-3">
          <Link href="/widescreen">WideScreen</Link>
        </li>
        <li className="pb-2 hover:text-red-500 md:p-0 md:px-3">
          <Link href="/phone">Phone</Link>
        </li>
        <li className="pb-2 hover:text-red-500 md:p-0 md:px-3">
          <Link href="/anime">Anime</Link>
        </li>
        <li className=" pb-2 md:hidden">
          <button
            onClick={() => {
              setMenu(false);
            }}
          >
            <BiUpArrowAlt />
          </button>
        </li>
      </ul>
      <button
        className="md:hidden"
        onClick={() => {
          setMenu((menu) => !menu);
        }}
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}
