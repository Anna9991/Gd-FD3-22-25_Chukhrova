import { useColorThemeContext } from '../context/themeContext';
import { HeaderContainerStyled } from '../styles/HeaderContainer.styled'
import { LogoStyled } from '../styles/LogoContainer.styled'
import { NavStyled, LinkStyled } from '../styles/NavContainer.styled'


export function Header() {
  const { theme, toggle } = useColorThemeContext();

  return (
    <HeaderContainerStyled theme={theme}>
      <LogoStyled />
      <button onClick={toggle} style={ {alignSelf: "center", padding: "20px"} }>{theme}</button>
      <NavStyled>
        <LinkStyled to="/start">Start</LinkStyled>
        <LinkStyled to="/contact">Contact</LinkStyled>
        <LinkStyled to="/posts">Posts</LinkStyled>
      </NavStyled>
    </HeaderContainerStyled>
  );
}