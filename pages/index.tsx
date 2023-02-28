import type { NextPage } from "next";
import Head from "next/head";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import anime from "../components/images/anime.webp";
import phone from "../components/images/phone.webp";
import wallpapers from "../components/images/wallpapers.webp";
import widescreen from "../components/images/widescreen.webp";
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"]
})
const Home: NextPage = () => {
  return (
    <div className={`${montserrat.variable} font-montserrat h-full bg-black home`}>
      <Head>
        <title>RedWalls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-black max-w-screen-2xl mx-auto  lg:px-2 w-full text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <HomeCard img={anime} text="Anime" route="/Anime" key={1} />
        <HomeCard img={phone} text="Phone" route="/Phone" key={2} />
        <HomeCard img={wallpapers} text="Wallpapers" route="/Walls" key={3} />
        <HomeCard
          img={widescreen}
          text="Widescreen"
          route="/WideScreen"
          key={4}
        />
      </main>
    </div>
  );
};

export default Home;
