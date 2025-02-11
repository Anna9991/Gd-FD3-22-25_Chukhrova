import { AppContainerStyled } from '../styles/AppContainer.styled'
import { Header } from './Header';
import { ContentRouter } from './ContentRouter';
import { Footer } from './Footer';
import { ColorThemeProvider } from '../context/themeContext';


export function AppContainer() {
  return (
    <ColorThemeProvider>
      <AppContainerStyled>
        <Header />
        <ContentRouter />
        <Footer />
      </AppContainerStyled>
    </ColorThemeProvider>
  );
}