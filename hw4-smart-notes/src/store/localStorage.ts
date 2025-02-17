import { StoreState } from "./types";


const LOCAL_STORAGE_KEY = "smartNotes"


export function loadSavedState(): StoreState | undefined {
  try {
    const data = localStorage.getItem("smartNotes");
    if (!data) {
      return undefined;
    }
    return JSON.parse(data);
  }
  catch (error) {
    return undefined;
  }
}


export function saveToLocalStorage(state: StoreState) {
  try {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, data);
  }
  catch (err) {
    console.error('Error localStorage:', err);
  }
}