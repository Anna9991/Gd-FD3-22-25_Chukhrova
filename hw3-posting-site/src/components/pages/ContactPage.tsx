import { PageContainerWithOutletsStyled, FixContainerStyled } from '../../styles/PageContainer.styled'
import { NavPageStyled, LinkPageStyled } from '../../styles/NavContainer.styled'
import { Outlet } from 'react-router';
import { useColorThemeContext } from '../../context/themeContext';


export function ContactPage() {
  const { theme } = useColorThemeContext();
  
  return (
    <PageContainerWithOutletsStyled theme={theme}>
      <img src="https://picsum.photos/id/102/400/300" alt="Placeholder" />

      <FixContainerStyled>
        <h2>Contact us!</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, asperiores quo ab dicta 
          voluptatum accusantium sint. Vel vero reiciendis dolorum veritatis, pariatur, quisquam in adipisci minima fugiat 
          dolore, animi recusandae.
        </p>
        <NavPageStyled>
          <LinkPageStyled to="about">About</LinkPageStyled>
          <LinkPageStyled to="terms">Terms</LinkPageStyled>
        </NavPageStyled>
      </FixContainerStyled>
      
      <Outlet />
    </PageContainerWithOutletsStyled>
  );
}