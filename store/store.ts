import { create } from "zustand";
import { CardData } from "../components/Page";

const AnimeStore = (set: any) => ({
  Data: [] as CardData[],
  After: "" as string,
  newRequest: true as boolean,
  addData: (anime: CardData[]) =>
    set((state: any) => ({
      Data: [...state.Data, ...anime],
    })),
  setAfter: (after: string) =>
    set(() => ({
      After: after,
    })),
  setNewRequest: (value: boolean) =>
    set(() => ({
      newRequest: value,
    })),
});
const PhoneStore = (set: any) => ({
  Data: [] as CardData[],
  After: "" as string,
  newRequest: true as boolean,
  addData: (data: CardData[]) =>
    set((state: any) => ({
      Data: [...state.Data, ...data],
    })),
  setAfter: (after: string) =>
    set(() => ({
      After: after,
    })),
  setNewRequest: (value: boolean) =>
    set(() => ({
      newRequest: value,
    })),
});
const WideStore = (set: any) => ({
  Data: [] as CardData[],
  After: "" as string,
  newRequest: true as boolean,
  addData: (data: CardData[]) =>
    set((state: any) => ({
      Data: [...state.Data, ...data],
    })),
  setAfter: (after: string) =>
    set(() => ({
      After: after,
    })),
  setNewRequest: (value: boolean) =>
    set(() => ({
      newRequest: value,
    })),
});
const WallStore = (set: any) => ({
  Data: [] as CardData[],
  After: "" as string,
  newRequest: true as boolean,
  addData: (data: CardData[]) =>
    set((state: any) => ({
      Data: [...state.Data, ...data],
    })),
  setAfter: (after: string) =>
    set(() => ({
      After: after,
    })),
  setNewRequest: (value: boolean) =>
    set(() => ({
      newRequest: value,
    })),
});
export const useAnimeStore = create(AnimeStore);
export const usePhoneStore = create(PhoneStore);
export const useWideStore = create(WideStore);
export const useWallStore = create(WallStore);
