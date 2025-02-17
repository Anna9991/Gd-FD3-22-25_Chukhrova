import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { TagAddAction, TagDeleteAction, TagIdAction, TagRenameAction, TagState } from "../types";


export const personalTagId = uuidv4();


const initialState: TagState[] = [
  { id: personalTagId, name: 'Personal', count: 1 },
  { id: uuidv4(), name: 'Ads', count: 0 },
  { id: uuidv4(), name: 'Places to go', count: 0 },
  { id: uuidv4(), name: 'Saved web-pages', count: 0 },
]

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag(state, action: TagAddAction) {
      state.push({id: uuidv4(), name: action.payload, count: 0});
    },
    renameTag(state, action: TagRenameAction) {
      const { id, newName } = action.payload;
      const curTag = state.find(tag => tag.id === id);
      if (curTag) {
        curTag.name = newName;
      }
    },
    deleteTag(state, action: TagDeleteAction) {
      const { id, count } = action.payload;
      if (count === 0) {
        return state.filter(tag => tag.id !== id);
      }
    },
    incrementCount(state, action: TagIdAction) {
      const id = action.payload;
      const curTag = state.find(tag => tag.id === id);
      if (curTag) {
        curTag.count += 1;
      }
    },
    decrementCount(state, action: TagIdAction) {
      const id = action.payload;
      const curTag = state.find(tag => tag.id === id);
      if (curTag && curTag.count > 0) {
        curTag.count -= 1;
      }
    }
  }
}); 

export const {addTag, renameTag, deleteTag, incrementCount, decrementCount} = tagsSlice.actions;

const tagsReducer = tagsSlice.reducer;
export default tagsReducer;