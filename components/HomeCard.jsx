import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
export default function HomeCard({ link, text, route }) {
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Link href={route}>
        <div className="overflow-hidden w-full h-full group cursor-pointer ">
          <div className="w-full min-h-[10rem] h-full lg:h-full relative">
            <Image
              alt={text}
              src={link}
              placeholder="blur"
              blurDataURL={link}
              layout="fill"
              priority
              objectFit="cover"
              unoptimized
              className="group-hover:scale-105  transition-transform transform-gpu duration-500 ease-out"
            />
            <div className="bg-[#2e2e2e87] font-mono grid place-items-center text-3xl font-bold w-full h-full  aspect-auto absolute top-0 left-0">
              {text}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
