import Head from "next/head";
import Page from "../components/Page";
import { useAnimeStore } from "../store/store";
const Anime = () => {
  const subredd = `Animewallpaper`;
  const MainData = useAnimeStore((state) => state.Data);
  const setMainData = useAnimeStore((state) => state.addData);
  const After = useAnimeStore((state) => state.After);
  const setAfter = useAnimeStore((state) => state.setAfter);
  const newRequest = useAnimeStore((state) => state.newRequest);
  const setNewRequest = useAnimeStore((state) => state.setNewRequest);
  return (
    <>
      <Head>
        <title>Redwalls-Anime Wallpaper</title>
      </Head>
      <Page
        subredd={subredd}
        MainData={MainData}
        setAfter={setAfter}
        setData={setMainData}
        after={After}
        newRequest={newRequest}
        setNewRequest={setNewRequest}
      />
    </>
  );
};
export default Anime;
// phonewallpaper+phonewallpapers
