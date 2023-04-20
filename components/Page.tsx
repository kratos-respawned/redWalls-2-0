import { useRef } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import WallCard from "./WallCard";
import InfiniteScroll from "react-infinite-scroll-component";
import type { CardData } from "../typings/CardData";
import useWallpaper from "../hooks/useWallapers";
import GotoTop from "./GotoTop";
import Navbar from "./Navbar";
import { blurUrl } from "../utils/utils";

//////////////////////////////////////////////////////////////////////////////////////
export default function Page({ subredd }: { subredd: string }) {
  const [cacheKey, setCacheKey] = useState(
    `/${subredd}/hot.json?count=1000&raw_json=1`
  );
  let After = useRef<string>("");
  let Data = useRef<CardData[]>([]);
  const {
    data,
    error,
    after,
    isLoading: loader,
  } = useWallpaper(cacheKey, Data.current, After.current);
  Data.current = data;
  After.current = after;
  if (error)
    return <div className="text-2xl text-center text-red-500">Error</div>;
  return (
    <>
      {loader ? (
        <div className="w-screen h-screen pointer-events-none grid place-items-center z-[9999] bg-[#0000006b] fixed top-0">
          <HashLoader color="#EF4444" size={96} />
        </div>
      ) : null}
      <Navbar />

      {/* /////////////////////////////////////////// */}
      <InfiniteScroll
        dataLength={Data.current.length}
        next={() => {
          setCacheKey(
            `/${subredd}/hot.json?count=1000&after=${After.current}&raw_json=1`
          );
        }}
        hasMore={true}
        loader={
          <h3 className="text-center text-white text-xl mb-3">Loading...</h3>
        }
      >
        <main
          className={` max-w-screen-2xl mx-auto md:px-1 pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-1 md:gap-x-2`}
        >
          {Data.current.map((card, key) => {
            return (
              <WallCard
                width={card.width}
                height={card.height}
                key={key}
                img={card.img}
                author={card.author}
                subreddit={card.subreddit}
                url={card.url}
                title={card.title}
                blurUrl={blurUrl}
              />
            );
          })}
        </main>
        <GotoTop />
      </InfiniteScroll>
    </>
  );
}
