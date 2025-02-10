import { FooterContainerStyled } from '../styles/FooterContainer.styled'
import { getYear } from '../utils/getYear'


export function Footer() {
  return (
    <FooterContainerStyled>{"© " + String(getYear())}</FooterContainerStyled>
  );
}