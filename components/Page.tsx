import { useEffect, useRef } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import Navbar from "./Navbar";
import WallCard from "./WallCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { blurUrl } from "../utils/blurURL";
import type { CardData } from "../typings/CardData";
import { filterData } from "../utils/filterData";
import GotoTop from "./GoToTop";

//////////////////////////////////////////////////////////////////////////////////////
type Props = {
  subredd: string;
  MainData: CardData[];
  setData: (data: CardData[]) => void;
  after: string;
  setAfter: (after: string) => void;
  newRequest: boolean;
  setNewRequest: (newReq: boolean) => void;
};

//////////////////////////////////////////////////////////////////////////////////////
export default function Page({
  subredd,
  MainData,
  after,
  newRequest,
  setAfter,
  setData,
  setNewRequest,
}: Props) {
  const [loader, setLoader] = useState(true);
  const firstReq = useRef<boolean>(true);

  const [url, setUrl] = useState(
    `https://www.reddit.com/r/${subredd}/hot.json?count=1000&raw_json=1`
  );

  //////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (MainData.length === 0) {
        setLoader(true);
        setNewRequest(false);
        if (firstReq.current) {
          fetchData();
        }
      } else if (MainData.length !== 0 && newRequest) {
        // setLoader(true);
        fetchData();
        setNewRequest(false);
      } else if (MainData.length !== 0 && !newRequest) {
        setLoader(false);
      }
    }
    return () => {
      isMounted = false;
    };
  }, [url]);

  async function fetchData() {
    firstReq.current = false;
    if (MainData.length === 0) setLoader(true);
    let rawData = await fetch(url);
    let rawJSON = await rawData.json();
    setData(filterData(rawJSON.data.children));
    setAfter(rawJSON.data.after);
    setLoader(false);
  }
  let fetchMoreData = () => {
    setNewRequest(true);
    setUrl(
      `https://www.reddit.com/r/${subredd}/hot.json?count=1000&after=${after}&raw_json=1`
    );
  };

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
        dataLength={MainData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          <h4
            className={`text-2xl text-white py-5 text-center ${
              MainData.length === 0 && " hidden "
            } `}
          >
            Loading ...
          </h4>
        }
      >
        <main
          className={` max-w-screen-2xl mx-auto md:px-1 pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-1 md:gap-x-2`}
        >
          {MainData.map((card, key) => {
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
          <GotoTop />
        </main>
      </InfiniteScroll>
    </>
  );
}
