import { useColorThemeContext } from '../../context/themeContext';
import { PageContainerStyled } from '../../styles/PageContainer.styled'


export function NotFoundPage() {
  const { theme } = useColorThemeContext();
  
  return (
    <PageContainerStyled theme={theme}>
      <h1>Страница не найдена!</h1>
    </PageContainerStyled>
  );
}