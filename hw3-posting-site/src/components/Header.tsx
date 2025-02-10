import { HeaderContainerStyled } from '../styles/HeaderContainer.styled'
import { LogoStyled } from '../styles/LogoContainer.styled'
import { NavStyled, LinkStyled } from '../styles/NavContainer.styled'


export function Header() {
  return (
    <HeaderContainerStyled>
      <LogoStyled />
      <NavStyled>
        <LinkStyled to="/start">Start</LinkStyled>
        <LinkStyled to="/contact">Contact</LinkStyled>
        <LinkStyled to="/posts">Posts</LinkStyled>
      </NavStyled>
    </HeaderContainerStyled>
  );
}