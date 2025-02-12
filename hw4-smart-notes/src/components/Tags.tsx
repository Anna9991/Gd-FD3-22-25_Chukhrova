import { useDispatch } from "react-redux";
import { ButtonStyled } from "../styles/Button.styled";
import { Header1Styled } from "../styles/Header1.styled";
import { InputStyled } from "../styles/Input.styled";
import { TitleStyled } from "../styles/TitleContainer.styled";
import { useTypedSelector } from "../store/store";


export function Tags() {
  const tags = useTypedSelector((store) => store.tagsState);
  const dispatch = useDispatch();

  return (
    <>
      <TitleStyled>
        <Header1Styled>Tags ({tags.length})</Header1Styled>
        <ButtonStyled onClick={() => (1)}>+</ButtonStyled>
      </TitleStyled>
      <InputStyled 
        type="input"
        placeholder="Search by the keyword"
        />
      <div>

      </div>
    </>
  );
}