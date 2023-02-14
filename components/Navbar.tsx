import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt2, HiArrowNarrowUp, HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";
import HashLoader from "react-spinners/HashLoader";
export default function Navbar() {
  const [loader, setLoader] = useState(false);
  const route = useRouter();
  const path = route.pathname;
  const [menu, setMenu] = useState(false);
  return (
    <>
      {loader ? (
        <div className="w-screen h-screen pointer-events-none grid place-items-center z-[99999]  bg-[#0000006b] fixed top-0">
          <HashLoader color="#EF4444" size={96} />
        </div>
      ) : null}
      <nav className="bg-[#121212] w-full max-w-screen-2xl mx-auto relative text-slate-200 flex justify-between items-center z-10 isolate ">
        <div className={`bg-[#121212] flex-1 md:flex-1 z-10 p-4`}>
          <Link href="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/VMGx/eyJyIjoiZnMiLCJoIjo2OCwidyI6MTI1MCwiZnMiOjU0LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UmVkd2FsbHM/gbshinto-regular.png"
              alt="Anime fonts"
              className="invert w-32  "
            />
          </Link>
        </div>
        <ul
          className={`flex flex-col font-mono border-0 md:w-max md:flex-row md:opacity-100 md:pointer-events-auto items-center bg-[#131313] w-full md:static text-white absolute bottom-0 left-0 ${menu
            ? " translate-y-full md:translate-y-0 opacity-100 -z-10 md:z-0 border-t-[0.1px] md:border-none border-t-[#8a8a8a0e] "
            : "  pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100  "
            }   duration-300 enter  transform-gpu`}
        >
          <NavLink
            name="Home"
            path={path}
            url="/"
            setLoader={setLoader}
            key={1}
          />
          <NavLink
            name="Anime"
            path={path}
            url="/Anime"
            setLoader={setLoader}
            key={2}
          />
          <NavLink
            name="Phone"
            path={path}
            url="/Phone"
            setLoader={setLoader}
            key={3}
          />
          <NavLink
            name="Wallpapers"
            path={path}
            url="/Walls"
            setLoader={setLoader}
            key={4}
          />

          <NavLink
            name="Widescreen"
            path={path}
            url="/WideScreen"
            setLoader={setLoader}
            key={5}
          />
          <li className={` pb-2 md:hidden`}>
            <button
              onClick={() => {
                setMenu(false);
              }}
            >
              <HiArrowNarrowUp />
            </button>
          </li>
        </ul>
        <button
          className="pr-4 md:hidden"
          onClick={() => {
            setMenu((menu) => !menu);
          }}
        >
          {menu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiMenuAlt2 className="text-2xl" />
          )}
        </button>
      </nav>
    </>
  );
}

type NavProps = {
  path: string;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  url: string;
};
const NavLink = ({ path, setLoader, name, url }: NavProps) => {
  let active =
    path === url ? "text-red-500 pointer pointer-events-none" : " text-white ";

  return (
    <li className={`pb-2 hover:text-red-500   pt-3 md:p-0 md:px-3 ${active}`}>
      <Link href={url}>
        <button
          onClick={() => {
            path !== url ? setLoader(true) : null;
          }}
        >
          {name}
        </button>
      </Link>
    </li>
  );
};
