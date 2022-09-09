import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoCloudDownloadOutline } from "react-icons/io5";
export default function WallCard(props) {
  return (
    <div className="flex group relative w-full h-[300px] overflow-hidden">
      <Image
        alt={props.alt}
        src={props.img}
        layout="fill"
        objectFit={`${props.wide ? " contain " : " cover "}`}
        className=" md:group-hover:scale-110 transition-transform transform-gpu duration-500 ease-in-out"
      />
      <div className="absolute flex pr-3 rounded-t-xl pt-2 pb-2 items-center bottom-0 w-full text-[#dadada] z-30 bg-[#2b2b2b89] h-fit">
        <div className="flex-1 pl-2">
          <div className="flex items-center text-xl">
            <HiOutlineUserCircle />
            <span className="text-sm pl-2 pb-px">{props.name}</span>
          </div>
          <div className="text-sm pt-1">{props.subreddit}</div>
        </div>
        <div className="text-[#e5e5e5] hover:text-red-500">
          <a target="_blank" href={props.dllink}>
            <IoCloudDownloadOutline />
          </a>
        </div>
      </div>
    </div>
  );
}
