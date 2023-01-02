"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  return (
    <header className="max-w-screen-xl mx-auto overflow-x-clip relative">
      <nav className="flex justify-between py-3 items-center">
        <Link
          href="/"
          className="shinto hover:text-rwRed text-2xl tracking-wider logo"
        >
          Redwalls
        </Link>
        <ul className="flex  flex-col md:flex-row absolute md:static top-0 right-0 justify-between md:space-x-4 text-lg z-10">
          <Navlink text="Home" link="/" />
          <Navlink text="Anime" link="/anime" />
          <Navlink text="Phone" link="/phone" />
          <Navlink text="Wallpapers" link="/walls" />
          <Navlink text="Widescreen" link="/widescreen" />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
type Props = {
  text: string;
  link: string;
};

const Navlink = ({ text, link }: Props): JSX.Element => {
  const router = usePathname();
  const active = () => {
    return router === link
      ? "text-rwRed pointer-events-none "
      : " hover:text-rwRed navlink";
  };
  return (
    <li>
      <Link href={link} className={` ${active()} font-mono text-lg `}>
        {text}
      </Link>
    </li>
  );
};
