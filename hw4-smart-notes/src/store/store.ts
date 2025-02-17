import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from './Slices/tagsSlice';
import notesReducer from "./Slices/notesSlice";
import { loadSavedState, saveToLocalStorage } from "./localStorage";


const savedState = loadSavedState();


export const store = configureStore({
  reducer: {
    tagsSlice: tagsReducer,
    notesSlice: notesReducer,
  },
  preloadedState: savedState,
});


store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});


export type ReduxStore = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;