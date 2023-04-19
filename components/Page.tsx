import { useEffect, useRef } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import Navbar from "./Navbar";
import WallCard from "./WallCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { BiUpArrowAlt } from "react-icons/bi";

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
export type CardData = {
  title: string;
  author: string;
  subreddit: string;
  img: string;
  url: string;
  width: number;
  height: number;
  blurUrl?: string;
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
  const blurUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QBCRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAAaABAAMAAAAB//8AAAAAAAAAAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAAYACgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AORt9U+EnjHT5NTHh/VbL7aiMcQQuYCHy4UeYN2cEZJ5B6CuQm/aL+FlnK9vF4X8RyRxMY1driJSwHAJG44P4miijD51mDi06r/D/I+3xeV4HC8lSjRinNXeievzvb5H/9k=";
  const [url, setUrl] = useState();

  useEffect(() => {
    let mounted = true;
    let setVisibility = () => {
      if (window.scrollY > 100) {
        document.querySelector("button.enter")?.classList.add("show");
      } else {
        document.querySelector("button.enter")?.classList.remove("show");
      }
    };
    if (mounted) {
      window.addEventListener("scroll", setVisibility);
    }
    return () => {
      mounted = false;
      window.removeEventListener("scroll", setVisibility);
    };
  }, [globalThis?.scrollY]);

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
        setLoader(true);
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
    handleData(rawJSON.data.children);
    setAfter(rawJSON.data.after);
    setLoader(false);
  }
  let fetchMoreData = () => {
    setNewRequest(true);
    setUrl(
      `https://www.reddit.com/r/${subredd}/hot.json?count=1000&after=${after}&raw_json=1`
    );
  };
  let handleData = (arr: any) => {
    let data: CardData[] = [];
    arr
      .filter((item: any) => {
        return (
          typeof item.data.preview !== "undefined" &&
          item.data.is_video !== true &&
          item.data.over_18 !== true
        );
      })
      .map((item: any) => {
        if (item.data.preview.images[0].resolutions[3] === undefined) return;
        data.push({
          title: item.data.title,
          author: item.data.author,
          subreddit: item.data.subreddit,
          width: item.data.preview.images[0].resolutions[2].width,
          height: item.data.preview.images[0].resolutions[2].height,
          img:
            item.data.preview.images[0].resolutions[2].width >
            item.data.preview.images[0].resolutions[2].height
              ? item.data.preview.images[0].resolutions[3].url
              : item.data.preview.images[0].resolutions[2].url,
          url: item.data.url,
        });
      });
    if (data.length === 0) return;

    // if (MainData.length === 0) {
    setData(data);
    // console.log(MainData);
    // return;
    // }
    // setData([...MainData, ...data]);
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
            Loading...
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
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title="Go to top"
            className="z-[999] opacity-0 pointer-events-none fixed bottom-4 right-3 p-2 rounded-xl shadow-md shadow-black enter  duration-150 hover:scale-[1.05] bg-white"
          >
            <BiUpArrowAlt className="text-red-500 text-3xl" />
          </button>
        </main>
      </InfiniteScroll>
    </>
  );
}
