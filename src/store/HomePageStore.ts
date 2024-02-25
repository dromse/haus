import { create } from "zustand";

type HomePageState = {
  isHomePage: boolean;
  setIsHomePage: (is: boolean) => void;
};

export const useIsHomePage = create<HomePageState>((set) => ({
  isHomePage: false,
  setIsHomePage: (is) => set(() => ({ isHomePage: is })),
}));