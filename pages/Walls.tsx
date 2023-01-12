import Head from "next/head";
import Page from "../components/Page";
import { useWallStore } from "../store/store";
const Walls = () => {
  const subredd = `wallpaper+wallpapers+wallpaperengine`;
  const MainData = useWallStore((state) => state.Data);
  const setMainData = useWallStore((state) => state.addData);
  const After = useWallStore((state) => state.After);
  const setAfter = useWallStore((state) => state.setAfter);
  const newRequest = useWallStore((state) => state.newRequest);
  const setNewRequest = useWallStore((state) => state.setNewRequest);
  return (
    <>
      <Head>
        <title>Redwalls-Wallpaper</title>
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
export default Walls;
