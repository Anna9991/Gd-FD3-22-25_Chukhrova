import { createSlice } from "@reduxjs/toolkit";


type TagState = {
  id: string;
  name: string;
  count: number;
};

const initialState: TagState[] = [
  { id: 'tag1', name: 'Personal', count: 1 },
  { id: 'tag2', name: 'Ads',      count: 0 },
  { id: 'tag3', name: 'Places to go', count: 0 },
  { id: 'tag3', name: 'Saved web-pages', count: 0 }
]

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {}
}); 

export const {} = tagsSlice.actions;

const tagsReducer = tagsSlice.reducer;
export default tagsReducer;