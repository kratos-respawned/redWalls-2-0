import create from "zustand"
import { CardData } from "../components/Page"

const AnimeStore = (set: any) => ({
    Data: [] as CardData[],
    After: "" as string,
    addData: (anime: CardData[]) => set(
        (state: any) => ({

            Data: [...state.Data, ...anime]
        })
    ),
    setAfter: (after: string) => set(
        (state: any) => ({
            After: after
        })),
})
const PhoneStore = (set: any) => ({
    Data: [] as CardData[],
    After: "" as string,

    addData: (data: CardData[]) => set(
        (state: any) => ({

            Data: [...state.Data, ...data]
        })
    ),
    setAfter: (after: string) => set(
        (state: any) => ({
            After: after
        })),

})
const WideStore = (set: any) => ({
    Data: [] as CardData[],
    After: "" as string,

    addData: (data: CardData[]) => set(
        (state: any) => ({

            Data: [...state.Data, ...data]
        })
    ),
    setAfter: (after: string) => set(
        (state: any) => ({
            After: after
        })),

})
const WallStore = (set: any) => ({
    Data: [] as CardData[],
    After: "" as string,

    addData: (data: CardData[]) => set(
        (state: any) => ({

            Data: [...state.Data, ...data]
        })
    ),
    setAfter: (after: string) => set(
        (state: any) => ({
            After: after
        })),

})
export const useAnimeStore = create(AnimeStore);
export const usePhoneStore = create(PhoneStore);
export const useWideStore = create(WideStore);
export const useWallStore = create(WallStore);