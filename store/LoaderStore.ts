import { create } from 'zustand';

// Define the state and actions for your store
type State = {
  showLoader: boolean,
  setShowLoader: (value: boolean) => void
};

export const useLoaderStore = create<State>((set) => ({
  showLoader: true,
  setShowLoader: (value: boolean) => set({showLoader: value})
}));
