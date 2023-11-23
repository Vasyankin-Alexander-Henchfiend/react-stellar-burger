import {
    TypedUseSelectorHook,
    useSelector as selectorHook
  } from 'react-redux';
import { store } from '../store/store';

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;