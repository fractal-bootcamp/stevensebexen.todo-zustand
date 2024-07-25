import { create } from 'zustand';
import { AppView } from '../types';

export type AppViewStore = {
  appView: AppView;
  setAppView: (appView0: AppView) => void;
}

const useAppViewStore = create<AppViewStore>(set => ({
  appView: AppView.HOME,
  setAppView: (appView0: AppView) => set(state => ({appView: appView0}))
}));

export default useAppViewStore;
