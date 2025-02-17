import { useState } from "react"
import { useTypedSelector } from "../../store/store";
import { ButtonStyled } from "../../styles/Button.styled";
import { InputStyled, SelectStyled } from "../../styles/Input.styled";
import { TitleStyled } from "../../styles/TitleContainer.styled";
import { NotesListContainerStyled } from "../../styles/NotesTagsContainer.styled";
import { NoteModal } from "./NoteModal";
import { NoteState } from "../../store/types";
import { NoteSingleContainer } from "./NoteSingle";
import { Header4Styled } from "../../styles/Header.styled";


export function Notes() {
  const [selectedTagId, setSelectedTagId] = useState(''); 
  const [keyword, setKeyword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalView, setModalView] = useState(false);
  const [editNote, setEditNote] = useState<NoteState | null>(null);

  const notes = useTypedSelector((store) => store.notesSlice);
  const tags = useTypedSelector((store) => store.tagsSlice);

  const filteredByKeyword = notes.filter(note =>
    note.title?.toLowerCase().includes(keyword.toLowerCase()) ||
    note.text?.toLowerCase().includes(keyword.toLowerCase())
  );

  const filteredNotes = filteredByKeyword.filter(note => {
    if (selectedTagId === '') {
      return true;
    } 
    else {
      return note.tagId === selectedTagId;
    }
  });


  function viewNote(note: NoteState) {
    setEditNote(note);
    setModalView(true);
    setModalOpen(true); 
  }

  function editOrAddNote(note: NoteState | null) {
    setEditNote(note);
    setModalOpen(true); 
  }

  function onClose() {
    setModalOpen(false);
    setModalView(false);
  }

  
  return (
    <>
      <TitleStyled>
        <h1>Notes ({notes.length})</h1>
        <ButtonStyled onClick={() => editOrAddNote(null)}>+</ButtonStyled>
      </TitleStyled>
      <TitleStyled>
        <InputStyled 
          type="input"
          placeholder="Search by the keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SelectStyled value={selectedTagId} onChange={(e) => setSelectedTagId(e.target.value)}>
          <option value="">Select Tag</option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.name} ({tag.count})
            </option>
          ))}
        </SelectStyled>
        <Header4Styled>{notes.length !== filteredNotes.length ? "Found notes: " + filteredNotes.length.toString() : ""}</Header4Styled>
      </TitleStyled>

      <NotesListContainerStyled>
          {filteredNotes.map((note, index) => (
            <NoteSingleContainer 
              key={index}
              note={note}
              tags={tags}
              editOrAddNote={editOrAddNote}
              viewNote={viewNote}
            />
          ))}
      </NotesListContainerStyled>

      {isModalOpen && (
        <NoteModal
          isOpen={isModalOpen}
          onClose={onClose}
          editNote={editNote}
          isModalView={isModalView}
        />
      )}
    </>
  );
}