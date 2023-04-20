import Head from "next/head";
import Page from "../components/Page";

const WideScreen = () => {
  const subredd = `widescreenwallpaper+wqhd_wallpaper`;

  return (
    <>
      <Head>
        <title>Redwalls-WideScreen Wallpaper</title>
      </Head>
      <Page subredd={subredd} />
    </>
  );
};
export default WideScreen;
