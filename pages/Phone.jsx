import Head from "next/head";
import Page from "../components/Page";

const Phone = () => {
  const subredd = `phonewallpaper+phonewallpapers`;

  return (
    <>
      <Head>
        <title>Redwalls-Anime Wallpaper</title>
      </Head>
      <Page subredd={subredd} wide={true} />
    </>
  );
};
export default Phone;
