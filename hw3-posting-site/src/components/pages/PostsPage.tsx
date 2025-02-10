import { PageContainerStyled } from '../../styles/PageContainer.styled'
import { LinkPageStyled } from '../../styles/NavContainer.styled'
import { useState, useEffect } from 'react';
import { getIds } from '../../utils/getIds'


const SESSION_SROTAGE_KEY = "postIDs";


export function PostsPage() {
  const [postId, setPostId] = useState<number[]>([]);

  useEffect(() => {
    try {
      const savedPostId: number[] = JSON.parse(sessionStorage.getItem(SESSION_SROTAGE_KEY) || "[]");
      if (Array.isArray(savedPostId) && savedPostId.length > 19) {
        setPostId(savedPostId);
      }
      else {
        const newId: number[] = getIds();
        setPostId(newId);
        sessionStorage.setItem(SESSION_SROTAGE_KEY, JSON.stringify(newId))
      }
    }
    catch (error) {
      console.log("Error sessionStorage!");
    }
  }, []);


  return (
    <PageContainerStyled>
      <h2>Let's read Posts!</h2>
      <ol>
        {postId.map(id => (
          <li key={id} style={{textAlign: 'left'}}>
            <LinkPageStyled to={`/post/${id}`}>Post {id}</LinkPageStyled>
          </li>
        ))}
      </ol>
    </PageContainerStyled>
  );
}