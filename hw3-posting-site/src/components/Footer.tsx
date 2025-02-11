import { useColorThemeContext } from '../context/themeContext';
import { FooterContainerStyled } from '../styles/FooterContainer.styled'
import { getYear } from '../utils/getYear'


export function Footer() {
  const { theme } = useColorThemeContext();
  return (
    <FooterContainerStyled theme={theme}>{"© " + String(getYear())}</FooterContainerStyled>
  );
}