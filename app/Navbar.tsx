"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  return (
    <header className="max-w-screen-xl mx-auto">
      <nav className="flex justify-between py-5 items-center">
        <Link
          href="/"
          className="shinto hover:text-rwRed text-2xl tracking-wider"
        >
          Redwalls
        </Link>
        <ul className="flex justify-between space-x-4 text-lg ">
          <Navlink text="Home" link="/" />
          <Navlink text="Anime" link="/anime" />
          <Navlink text="Phone" link="/phone" />
          <Navlink text="Wallpapers" link="/walls" />
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
