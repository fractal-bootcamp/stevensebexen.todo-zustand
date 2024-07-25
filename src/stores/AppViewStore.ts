import { create } from 'zustand';
import { AppView } from '../types';

export type AppViewStore = {
  appView: AppView;
  setAppView: (appView0: AppView) => void;
}

export const useAppViewStore = create<AppViewStore>(set => ({
  appView: AppView.HOME,
  setAppView: (appView: AppView) => set(() => ({appView}))
}));