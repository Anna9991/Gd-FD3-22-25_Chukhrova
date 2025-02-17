import { PayloadAction } from "@reduxjs/toolkit";


// tags
export interface TagState {
  id: string;
  name: string;
  count: number;
};

export type TagAddAction = PayloadAction<string>;
export type TagRenameAction = PayloadAction<{id: string, newName: string}>;
export type TagDeleteAction = PayloadAction<Omit<TagState, "name">>;
export type TagIdAction = PayloadAction<string>;


// notes 
export interface NoteState {
  id: string;
  tagId: string | null;
  title: string | null;
  text: string;
  timeCreate: string;
  timeUpdate: string;
};

export type NoteEditAction = PayloadAction<Omit<NoteState, "timeCreate" | "timeUpdate">>;
export type NoteAddAction = PayloadAction<Pick<NoteState, "tagId" | "title" | "text">>;
export type NoteDeleteAction = PayloadAction<string>;


// store
export interface StoreState {
  notesSlice: NoteState[];
  tagsSlice: TagState[];
}