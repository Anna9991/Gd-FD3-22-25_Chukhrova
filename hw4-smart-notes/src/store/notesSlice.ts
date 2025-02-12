import { createSlice } from "@reduxjs/toolkit";


type NoteState = {
  id: string;
  title: string;
  text: string;
  timeCreate: string;
  timeUpdate: string;
  tagId?: string;
};

const initialState: NoteState[] = [
  {
    id: 'note1',
    title: 'Note title 1',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: '2024-06-30',
    timeUpdate: '2024-06-30',
  },
  {
    id: '2',
    title: 'Note title 2',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: '2024-06-30',
    timeUpdate: '2024-06-30',
    tagId: 'tag1',
  }
 ];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {}
});

export const {} = notesSlice.actions;


const notesReducer = notesSlice.reducer;
export default notesReducer;