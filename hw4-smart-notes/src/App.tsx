import React from 'react';
import './App.css';
import { AppContainerStyled } from './styles/AppContainer.styled';
import { NotesContainerStyled, TagsContainerStyled } from './styles/NotesTagsContainer.styled';
import { Notes } from './components/Notes/Notes';
import { Tags } from './components/Tags/Tags'
import { Provider } from 'react-redux';
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <AppContainerStyled>
        <NotesContainerStyled>
          <Notes />
        </NotesContainerStyled>
        <TagsContainerStyled>
          <Tags />
        </TagsContainerStyled>
      </AppContainerStyled>
    </Provider>
  );
}

export default App;
