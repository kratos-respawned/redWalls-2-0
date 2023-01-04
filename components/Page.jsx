import { useEffect, useRef } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import Navbar from "./Navbar";
import WallCard from "./WallCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { BiUpArrowAlt } from "react-icons/bi";
//////////////////////////////////////////////////////////////////////////////////////
export default function Page(props) {
  const [Maindata, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const after = useRef("");
  const [url, setUrl] = useState(
    `https://www.reddit.com/r/${props.subredd}/hot.json?count=1000&raw_json=1`
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelector("button.enter").classList.remove("hide");
        document.querySelector("button.enter").classList.add("show");
      } else {
        document.querySelector("button.enter").classList.add("hide");
        document.querySelector("button.enter").classList.remove("show");
      }
    });
  });

  //////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    after.current = "";
    let isMounted = true;
    if (isMounted) {
      setLoader(true);
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [url]);

  async function fetchData() {
    if (Maindata.length === 0) setLoader(true);
    let rawData = await fetch(url);
    let rawJSON = await rawData.json();
    handleData(rawJSON.data.children);
    after.current = rawJSON.data.after;
    setLoader(false);
  }
  let fetchMoreData = () => {
    setUrl(
      `https://www.reddit.com/r/${props.subredd}/hot.json?count=1000&after=${after.current}&raw_json=1`
    );
  };
  let handleData = (arr) => {
    let data = [];
    arr
      .filter((item) => {
        return (
          typeof item.data.preview !== "undefined" &&
          item.data.is_video !== true &&
          item.data.over_18 !== true
        );
      })
      .map((item) => {
        if (item.data.preview.images[0].resolutions[3] === undefined) return;
        data.push({
          title: item.data.title,
          author: item.data.author,
          subreddit: item.data.subreddit,
          img: item.data.preview.images[0].resolutions[3].url,
          url: item.data.url,
        });
      });
    if (data.length === 0) return;

    if (Maindata.length === 0) {
      setData(data);
      return;
    }
    setData([...Maindata, ...data]);
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
        dataLength={Maindata.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          <h4
            className={`text-2xl text-white py-5 text-center ${
              Maindata.length === 0 && " hidden "
            } `}
          >
            Loading...
          </h4>
        }
      >
        <main
          className={` max-w-screen-2xl mx-auto md:px-1 pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-1 md:gap-x-2`}
        >
          {Maindata.map((card, key) => {
            return (
              <WallCard
                wide={props.wide}
                key={key}
                img={card.img}
                name={card.author}
                subreddit={card.subreddit}
                dllink={card.url}
                alt={card.title}
              />
            );
          })}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title="Go to top"
            className="z-[999] fixed bottom-4 right-3 p-2 rounded-xl shadow-md shadow-black enter  duration-150 hover:scale-[1.05] bg-white"
          >
            <BiUpArrowAlt className="text-red-500 text-3xl" />
          </button>
        </main>
      </InfiniteScroll>
    </>
  );
}
