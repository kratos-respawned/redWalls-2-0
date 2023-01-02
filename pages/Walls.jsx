import Head from "next/head";
import Page from "../components/Page";

const Walls = () => {
  const subredd = `wallpaper+wallpapers+wallpaperengine`;

  return (
    <>
      <Head>
        <title>Redwalls-Wallpaper</title>
      </Head>
      <Page subredd={subredd} />
    </>
  );
};
export default Walls;
