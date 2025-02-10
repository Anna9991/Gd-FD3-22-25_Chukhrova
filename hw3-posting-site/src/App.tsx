import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router";
import { AppContainer } from './components/AppContainer';


function App() {
  return (
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  );
}

export default App;
