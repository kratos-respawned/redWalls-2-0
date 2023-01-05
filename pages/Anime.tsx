import Head from "next/head";
import Page from "../components/Page";

const Anime = () => {
  const subredd = `Animewallpaper`;

  return (
    <>
      <Head>
        <title>Redwalls-Anime Wallpaper</title>
      </Head>
      <Page subredd={subredd} />
    </>
  );
};
export default Anime;
// phonewallpaper+phonewallpapers
