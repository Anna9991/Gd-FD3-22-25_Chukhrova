import { useState } from "react";
import { Header3Styled } from "../../styles/Header.styled";
import { ButtonContainerStyled } from "../../styles/Button.styled";
import { useDispatch } from "react-redux";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { TagState } from "../../store/types";
import { InputAddStyled } from "../../styles/Input.styled";
import { addTag, renameTag } from "../../store/Slices/tagsSlice";


type  TagModalProps = {
  isOpen: boolean,
  onClose: () => void,
  editTag: TagState | null,
}


export function TagModal(props: TagModalProps) {
  const [tagName, setTagName] = useState(props.editTag?.name || '');
  const dispatch = useDispatch();

  function submitChanges() {
    if (props.editTag && tagName) {
      dispatch(renameTag({id: props.editTag.id, newName: tagName}));
    }
    else if (tagName) {
      dispatch(addTag(tagName));
    }
    props.onClose();
  }

  return (
    <Modal 
      open={props.isOpen} 
      onClose={props.onClose} 
      center
      styles={{
        modal: { width: "200px"},
      }}
    >
      <Header3Styled>
        {props.editTag ? "Edit tag" : "Add new tag"}
      </Header3Styled>
      <InputAddStyled
        type="text"
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Tag"
      />
      <ButtonContainerStyled>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={submitChanges}>OK</button>
      </ButtonContainerStyled>
    </Modal>
  );
}