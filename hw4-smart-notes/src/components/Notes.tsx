import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store/store";
import { ButtonStyled } from "../styles/Button.styled";
import { Header1Styled } from "../styles/Header1.styled";
import { InputStyled } from "../styles/Input.styled";
import { TitleStyled } from "../styles/TitleContainer.styled";


export function Notes() {
  const notes = useTypedSelector((store) => store.notesState);
  const dispatch = useDispatch();
  
  return (
    <>
      <TitleStyled>
        <Header1Styled>Notes ({notes.length})</Header1Styled>
        <ButtonStyled onClick={() => (1)}>+</ButtonStyled>
      </TitleStyled>
      <TitleStyled>
        <InputStyled 
          type="input"
          placeholder="Search by the keyword"
        />
      </TitleStyled>
    </>
  );
}