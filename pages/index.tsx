import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import axios from "axios";
const Home: NextPage = () => {
  return (
    <div className="h-full bg-black ">
      <Head>
        <title>RedWalls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-black min-h-full lg:px-2 h-full lg:h-[calc(100vh-48px)] text-white grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <HomeCard
          text="Wallpapers"
          link="https://i.redd.it/kfugnxvjqbm91.jpg"
          route="/"
        />
        <HomeCard
          text="Widescreen"
          link="https://i.redd.it/lhl57l81hol91.jpg"
          route="/"
        />
        <HomeCard
          text="Phone"
          link="https://i.redd.it/teephpkwi0m91.jpg"
          route="/"
        />
        <HomeCard
          text="Anime"
          // link="https://i.redd.it/hq2mq0398km91.png"
          // link="https://i.redd.it/mpt7lf0m0am91.png"
          link="https://i.redd.it/qqfigwm4aik91.png"
          route="/"
        />
      </main>
    </div>
  );
};

export default Home;
