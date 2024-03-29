import Head from "next/head";
import Page from "../components/Page";
import { useWideStore } from "../store/store";
const WideScreen = () => {
  const subredd = `widescreenwallpaper+wqhd_wallpaper`;
  const MainData = useWideStore((state) => state.Data);
  const setMainData = useWideStore((state) => state.addData);
  const After = useWideStore((state) => state.After);
  const setAfter = useWideStore((state) => state.setAfter);
  const newRequest = useWideStore((state) => state.newRequest);
  const setNewRequest = useWideStore((state) => state.setNewRequest);
  return (
    <>
      <Head>
        <title>Redwalls-WideScreen Wallpaper</title>
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
export default WideScreen;
