import { PageContainerStyled } from '../../styles/PageContainer.styled'
import { useParams } from 'react-router';
import { Navigate } from "react-router";
import { useColorThemeContext } from '../../context/themeContext';


export function PostSinglePage() {
  const { theme } = useColorThemeContext();
  const params = useParams();
  const pattern = /^[0-9]+$/;
  if (!pattern.test(params.id ?? "")){
    return <Navigate to="/notfound" />;
  }

  return (
    <PageContainerStyled theme={theme}>
      <h1>Post {params.id}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, asperiores quo ab dicta 
        voluptatum accusantium sint. Vel vero reiciendis dolorum veritatis, pariatur, quisquam in adipisci minima fugiat 
        dolore, animi recusandae.
      </p>
    </PageContainerStyled>
  );
}