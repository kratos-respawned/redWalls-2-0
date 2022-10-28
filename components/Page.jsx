import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState } from "react";
import Navbar from "./Navbar";
import WallCard from "./WallCard";
import Button from "./Button";
export default function Page(props) {
  const [Maindata, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loader, setLoader] = useState(true);
  const [url, setUrl] = useState(
    `https://www.reddit.com/r/${props.subredd}/hot.json?count=1000&raw_json=1`
  );
  const [response, setResponse] = useState(null);
  useEffect(() => {
    setLoader(true);
    fetchData();
  }, [url]);
  let next = () => {
    setUrl(
      `https://www.reddit.com/r/${props.subredd}/hot.json?count=1000&after=${response.data.after}&raw_json=1`
    );
    window.scrollTo(0, 0);
    setCounter(counter + 1);
  };
  let before = () => {
    window.scrollTo(0, 0);
    setUrl(
      `https://www.reddit.com/r/${props.subredd}/hot.json?count=1000&before=${response.data.before}&raw_json=1`
    );
    setCounter(counter - 1);
  };
  let fetchData = () => {
    setLoader(true);
    fetch(url).then((result) => {
      result.json().then((resp) => {
        handleData(resp);
        setResponse(resp);
        setLoader(false);
      });
    });
  };
  let handleData = (resp) => {
    let main = resp.data.children;
    let data = [];
    let i = 0;
    main.map((item) => {
      try {
        if (!item.data.is_video && !item.data.over_18) {
          let temp = {
            title: item.data.title,
            author: item.data.author,
            subreddit: item.data.subreddit,
            url: item.data.url,
            img: item.data.preview.images[0].resolutions[3].url,
          };

          data[i] = temp;
          i = i + 1;
        }
      } catch (err) {}
    });
    setData(data);
  };
  return (
    <>
      <Navbar />
      {loader ? (
        <div className="w-screen h-screen pointer-events-none grid place-items-center z-50 bg-[#0000006b] fixed top-0">
          <HashLoader color="#EF4444" size={96} />
        </div>
      ) : null}

      <main
        className={`max-w-screen-2xl mx-auto md:px-1 pt-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-y-1 md:gap-x-2`}
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
      </main>
      <footer className="p-4 flex max-w-screen-lg m-auto items-center justify-center gap-x-6 md:gap-x-20">
        <Button text="Back" func={before} counter={counter} />
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="font-mono text-white hover:text-red-500"
        >
          Go to top
        </button>
        <Button text="Next" func={next} counter={1} />
      </footer>
    </>
  );
}
