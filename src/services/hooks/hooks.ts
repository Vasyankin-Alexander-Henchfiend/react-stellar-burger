import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook
  } from 'react-redux';
import { store } from '../store/store';

// import { Action, ActionCreator } from 'redux';
// import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;


// export type AppDispatch = typeof store.dispatch;
// type TApplicationActions = TTodoActions;
// export type AppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, RootState, TApplicationActions>
// >;
// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 
