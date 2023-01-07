import create from "zustand"
import { CardData } from "../components/Page"

const RedditStore = (set: any) => ({
    Anime: [] as CardData[],
    After: "" as string,
    FirstLoad: true as boolean,
    addAnime: (anime: CardData[]) => set(
        (state: any) => ({

            Anime: [...state.Anime, ...anime]
        })
    ),
    setAfter: (after: string) => set(
        (state: any) => ({
            After: after
        })),
    setFirstLoad: (firstLoad: boolean) => set(
        (state: any) => ({
            FirstLoad: firstLoad
        }))
})
const useAnimeStore = create(RedditStore);
export default useAnimeStore;