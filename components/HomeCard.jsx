import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
export default function HomeCard({ link, text, route }) {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {loader ? (
        <div className="w-screen h-screen pointer-events-none grid place-items-center z-50 bg-[#0000006b] fixed top-0">
          <HashLoader color="#EF4444" size={96} />
        </div>
      ) : null}
      <Link href={route}>
        <div
          onClick={() => {
            setLoader(true);
          }}
          className="mb-1 lg:m-0 "
        >
          <div className="overflow-hidden w-full h-full group cursor-pointer ">
            <div className="w-full min-h-[10rem] lg:h-full relative transition-transform duration-700 ">
              <Image
                alt={text}
                priority
                src={link}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110  transition-transform transform-gpu"
              />
              <div className="bg-[#2e2e2e87] grid place-items-center text-3xl font-bold w-full h-full  aspect-auto absolute top-0 left-0">
                {text}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
