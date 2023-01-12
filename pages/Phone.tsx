import Head from "next/head";
import Page from "../components/Page";
import { usePhoneStore } from "../store/store";
const Phone = () => {
  const subredd = `phonewallpaper+phonewallpapers`;
  const MainData = usePhoneStore((state) => state.Data);
  const setMainData = usePhoneStore((state) => state.addData);
  const After = usePhoneStore((state) => state.After);
  const setAfter = usePhoneStore((state) => state.setAfter);
  const newRequest = usePhoneStore((state) => state.newRequest);
  const setNewRequest = usePhoneStore((state) => state.setNewRequest);
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
export default Phone;
