import { create } from 'zustand';

interface NavbarState {
  isSticky: boolean;
  setSticky: (value: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isSticky: false,
  setSticky: (value) => set({ isSticky: value }),
}));
