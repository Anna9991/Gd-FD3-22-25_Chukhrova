import { Routes, Route, Navigate } from "react-router";
import { MainContainerStyled } from '../styles/MainContainer.styled'
import { StartPage } from './pages/StartPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { TermsPage } from './pages/TermsPage'
import { PostsPage } from './pages/PostsPage';
import { NotFoundPage } from './pages/NotFoundPage'
import { PostSinglePage } from './pages/PostSinglePage'


export function ContentRouter() {
  return (
    <MainContainerStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/contact" element={<ContactPage />}>
          <Route path="/contact/about" element={<AboutPage />} />
          <Route path="/contact/terms" element={<TermsPage />} />
        </Route>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostSinglePage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainContainerStyled>
  );
}