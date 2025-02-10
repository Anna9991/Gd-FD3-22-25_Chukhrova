import { PageContainerStyled } from '../../styles/PageContainer.styled'
import { LinkPageStyled } from '../../styles/NavContainer.styled'
import { useState, useEffect } from 'react';


const SESSION_STORAGE_KEY = "postIDs";


export function StartPage() {
  const [post, setPost] = useState(1);

  useEffect(() => {
    try {
      const savedIds: number[] = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY) || "[]");
      if (Array.isArray(savedIds) && savedIds.length > 19) {
        const randomId = savedIds[Math.floor(Math.random() * savedIds.length)];
        setPost(randomId);
      }
      else {
        setPost(1);
      }
    } catch (error) {
      console.log("Error accessing sessionStorage!");
    }
  }, []);

  return (
    <PageContainerStyled>
      <h1>Welcome!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, asperiores quo ab dicta 
        voluptatum accusantium sint. Vel vero reiciendis dolorum veritatis, pariatur, quisquam in adipisci minima fugiat 
        dolore, animi recusandae.
      </p>
      <LinkPageStyled to={`/post/${post}`}>Read a post {post}</LinkPageStyled>
    </PageContainerStyled>
  );
}