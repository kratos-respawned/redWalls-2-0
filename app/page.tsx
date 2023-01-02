import Image from "next/image";
import Anime from "./Images/anime.webp";
export default function page() {
  return (
    <section className="grid grid-col-1  gap-y-1 min-h-full  max-h-full  ">
      <WallCard />
      <WallCard />
      <WallCard />
      <WallCard />
    </section>
  );
}

const WallCard = (): JSX.Element => {
  return (
    <div className=" relative   overflow-hidden bg-red-400  grid place-items-center">
      <h2 className="shinto text-3xl">Anime</h2>
    </div>
  );
};
