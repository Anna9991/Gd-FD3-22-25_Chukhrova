import { useState } from "react";
import { ButtonStyled } from "../../styles/Button.styled";
import { InputStyled } from "../../styles/Input.styled";
import { TitleStyled } from "../../styles/TitleContainer.styled";
import { useTypedSelector } from "../../store/store";
import { TagContainerStyled, TagsListContainerStyled } from "../../styles/NotesTagsContainer.styled";
import { TagModal } from "./TagModal";
import { deleteTag } from "../../store/Slices/tagsSlice";
import { useDispatch } from "react-redux";
import { TagState } from "../../store/types";
import { Pencil } from 'lucide-react';


export function Tags() {
  const [keyword, setKeyword] = useState('');
  const [editTag, setEditTag] = useState<TagState | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  
  const tags = useTypedSelector((store) => store.tagsSlice);
  const dispatch = useDispatch();

  const filteredByKeyword = tags.filter(tag =>
    tag.name.toLowerCase().includes(keyword.toLowerCase())
  );

  function editOrAddTag(tag: TagState | null) {
    setEditTag(tag);
    setModalOpen(true); 
  }

  function deleteTags(tag: TagState) {
    dispatch(deleteTag(tag));
  }

  return (
    <>
      <TitleStyled>
        <h1>Tags ({tags.length})</h1>
        <ButtonStyled onClick={() => editOrAddTag(null)}>+</ButtonStyled>
      </TitleStyled>
      <InputStyled 
        type="input"
        placeholder="Search by the keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <TagsListContainerStyled>
        {filteredByKeyword.map((tag, idx) => (
          <TagContainerStyled key={idx}>
            <span>{tag.name} ({tag.count})</span>
            <ButtonStyled onClick={() => editOrAddTag(tag)}><Pencil size={11} /></ButtonStyled>
            <ButtonStyled onClick={() => deleteTags(tag)}>-</ButtonStyled>
          </TagContainerStyled>
        ))}
      </TagsListContainerStyled>
      {isModalOpen && (
        <TagModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          editTag={editTag}
        />
      )}
    </>
  );
}