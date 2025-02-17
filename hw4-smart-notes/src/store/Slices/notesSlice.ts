import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCurrentTime } from "../../utils/getCurrentTime";
import { v4 as uuidv4 } from 'uuid';
import { personalTagId } from "./tagsSlice";
import { NoteEditAction, NoteAddAction, NoteDeleteAction, NoteState } from "../types";


const curtime = getCurrentTime();

const initialState: NoteState[] = [
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 1',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: personalTagId,
    title: 'Note title 2',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: getCurrentTime(10),
  },
  {
    id: uuidv4(),
    tagId: null,
    title: null,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: getCurrentTime(20),
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 4',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 5',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 6',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 7',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 8',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 9',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
  {
    id: uuidv4(),
    tagId: null,
    title: 'Note title 10',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Quidem earum magnam asperiores. Dolores blanditiis nesciunt officia, \
      ab magni eos nihil temporibus, ea cupiditate esse eius iure adipisci? \
      Reiciendis, iure est.",
    timeCreate: curtime,
    timeUpdate: curtime,
  },
 ];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: NoteAddAction) {
      const {tagId, title, text } = action.payload;
      const time = getCurrentTime()
      state.push({id: uuidv4(), tagId: tagId, title: title, text: text, timeCreate: time, timeUpdate: time});
    },
    deleteNote(state, action: NoteDeleteAction) {
      const id = action.payload;
      return state.filter(note => note.id !== id);
    },
    editNote(state, action: NoteEditAction) {
      const { id, tagId, title, text } = action.payload;
      const note = state.find(note => note.id === id);
      if (note) {
        note.tagId = tagId;
        note.title = title?.trim() || null;
        note.text = text;
        note.timeUpdate = new Date().toISOString();
      }
    },
  }
});

export const {addNote, deleteNote, editNote} = notesSlice.actions;


const notesReducer = notesSlice.reducer;
export default notesReducer;