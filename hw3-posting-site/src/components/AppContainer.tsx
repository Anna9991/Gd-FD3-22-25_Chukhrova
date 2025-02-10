import { AppContainerStyled } from '../styles/AppContainer.styled'
import { Header } from './Header';
import { ContentRouter } from './ContentRouter';
import { Footer } from './Footer';


export function AppContainer() {
  return (
    <AppContainerStyled>
      <Header />
      <ContentRouter />
      <Footer />
    </AppContainerStyled>
  );
}