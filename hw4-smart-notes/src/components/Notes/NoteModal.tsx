import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { ButtonContainerStyled } from '../../styles/Button.styled';
import { NoteState } from '../../store/types';
import { Header3Styled } from '../../styles/Header.styled';
import { InputAddStyled, InputStyled, SelectStyled } from '../../styles/Input.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useTypedSelector } from '../../store/store';
import { NoteContainerAddStyled } from '../../styles/NotesTagsContainer.styled';
import { decrementCount, incrementCount } from '../../store/Slices/tagsSlice';
import { addNote, editNote } from '../../store/Slices/notesSlice';


type  NoteModalProps = {
  isOpen: boolean,
  onClose: () => void,
  editNote: NoteState | null,
  isModalView: boolean,
}


export function NoteModal(props: NoteModalProps) {
  const tags = useTypedSelector((store) => store.tagsSlice);
  const dispatch = useDispatch();

  const [selectedTagId, setSelectedTagId] = useState(props.editNote?.tagId || ''); 
  const [title, setTitle] = useState(props.editNote?.title || '');
  const [text, setText] = useState(props.editNote?.text || '');


  function submitChanges() {
    if (!props.editNote) {
      dispatch(addNote({tagId: selectedTagId || null, title: title || null, text: text}));
      if (selectedTagId) {
        dispatch(incrementCount(selectedTagId));
      }
    }
    else {
      if (selectedTagId !== props.editNote.tagId) {
        if(props.editNote.tagId) {
          dispatch(decrementCount(props.editNote.tagId));
        }

        if (selectedTagId) {
          dispatch(incrementCount(selectedTagId));
        }
      }
      dispatch(editNote({id: props.editNote.id, title: title, text: text, tagId: selectedTagId || null}));
    }
    props.onClose();
  }


  return (
    <Modal 
      open={props.isOpen} 
      onClose={props.onClose} 
      styles={{
        modal: { width: "500px"},
      }}
      center
    >
      <Header3Styled>
        {props.editNote ? "Edit note" : "Add new note"}
      </Header3Styled>
      <NoteContainerAddStyled>
        <InputAddStyled
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          disabled={props.isModalView}
        />
      </NoteContainerAddStyled>
      <NoteContainerAddStyled>
        <SelectStyled value={selectedTagId} onChange={(e) => setSelectedTagId(e.target.value)} disabled={props.isModalView}>
          <option value="">Select Tag</option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </SelectStyled>
      </NoteContainerAddStyled>
      <textarea
        rows={10}
        value={text}
        onChange={e => setText(e.target.value)}
        style={{width: "100%"}}
        placeholder='Type here text to note'
        disabled={props.isModalView}
      />
      <ButtonContainerStyled>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={submitChanges}>OK</button>
      </ButtonContainerStyled>
    </Modal>
  );
}