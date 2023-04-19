import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi";
import type { CardData } from "../typings/CardData";

export default function WallCard(props: CardData) {
  return (
    <>
      <a target="_blank" href={props.url} download>
        <div className="flex group  relative w-full h-[300px] overflow-hidden">
          <Image
            alt={props.title}
            src={props.img}
            placeholder="blur"
            blurDataURL={props.blurUrl}
            fill={true}
            sizes={`${props.width}`}
            unoptimized={props.width > props.height ? false : true}
            className=" object-contain  md:group-hover:scale-110 transition-transform transform-gpu duration-500 ease-in-out"
          />
          <div className="absolute flex pr-3 rounded-t-xl pt-2 pb-2 items-center bottom-0 w-full text-[#dadada] z-30  bg-gradient-to-b from-[#1e1e1e30] to-[#000000a4] h-fit">
            <div className="flex-1 pl-2">
              <div className="flex items-center text-xl">
                <HiOutlineUserCircle />
                <span className="text-sm pl-2 pb-px font-mono">
                  {props.author}
                </span>
              </div>
              <div className="text-sm pt-1">{props.subreddit}</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
