import { create } from 'zustand';

// Define the state and actions for your store
type State = {
  showLoader: boolean,
  setShowLoader: (value: boolean) => void,
  showHeader: boolean,
  setShowHeader: (value: boolean) => void
};

export const useGeneralStore = create<State>((set) => ({
  showLoader: true,
  setShowLoader: (value: boolean) => set({showLoader: value}),
  showHeader: false,
  setShowHeader: (value: boolean) => set({showHeader: value})
}));
