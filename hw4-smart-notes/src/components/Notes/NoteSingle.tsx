import { useDispatch } from "react-redux";
import { NoteState, TagState } from "../../store/types";
import { ButtonContainerStyled, ButtonStyled } from "../../styles/Button.styled";
import { Header2Styled } from "../../styles/Header.styled";
import { NoteContainerStyled } from "../../styles/NotesTagsContainer.styled";
import { deleteNote } from "../../store/Slices/notesSlice";
import { decrementCount } from "../../store/Slices/tagsSlice";


type NoteSingleContainerProps = {
  note: NoteState,
  tags: TagState[],
  editOrAddNote: (note: NoteState | null) => void,
  viewNote: (note: NoteState) => void,
}


const MAX_LENGTH_TEXT = 250;
const MAX_LENGTH_TITLE = 10;


export function NoteSingleContainer(props: NoteSingleContainerProps) {
  const dispatch = useDispatch();

  function getShortText(text: string, maxLength: number = 50) {
    if (!text) {
      return '';
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }

  function deleteNotes(note: NoteState) {
    dispatch(deleteNote(note.id));
    if (note.tagId) {
      dispatch(decrementCount(note.tagId));
    }
  }
  

  return (
    <NoteContainerStyled>
      <Header2Styled>{props.note.title ?? 
        (props.note.text.length > 10 ? 
          props.note.text.slice(0, MAX_LENGTH_TITLE) + "..." : 
          props.note.text)}
      </Header2Styled>
      <span>{props.note?.tagId && props.tags.find((t) => t.id === props.note.tagId)?.name}</span>
      <p>{getShortText(props.note.text, MAX_LENGTH_TEXT)}</p>
      <p>{props.note.timeCreate === props.note.timeUpdate ? 
          props.note.timeCreate.slice(0, -1) : 
          props.note.timeUpdate.slice(0, -1) + " (edited)"}
      </p>
      <ButtonContainerStyled>
        <ButtonStyled onClick={() => props.viewNote(props.note)}>view</ButtonStyled>
        <ButtonStyled onClick={() => props.editOrAddNote(props.note)}>edit</ButtonStyled>
        <ButtonStyled onClick={() => deleteNotes(props.note)}>delete</ButtonStyled>
      </ButtonContainerStyled>
    </NoteContainerStyled>
  );
}