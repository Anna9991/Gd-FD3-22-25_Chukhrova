import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from './tagsSlice';
import notesReducer from "./notesSlice";


export const store = configureStore({
  reducer: {
    tagsState: tagsReducer,
    notesState: notesReducer
  }
});

export type ReduxStore = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;