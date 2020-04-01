import React from 'react';
import Header from './components/Header/Header';
import TemporaryDrawer from './components/TemporaryDrawer/TemporaryDrawer';
import Main from './components/Main/Main';
import Router from "./components/Router/Router";
import './App.css';

function App() {
  return (
    <>
      <Header>
        
      </Header>
      <Main>
        <Router />
      </Main>
    </>
  );
}

export default App;
