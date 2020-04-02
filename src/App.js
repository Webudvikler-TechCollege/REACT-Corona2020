import React from 'react';
import Header from './components/Header/Header';
import PersistentDrawerLeft from './components/PersistentDrawerLeft/PersistentDrawerLeft';
import Main from './components/Main/Main';
import Router from "./components/Router/Router";
import './App.css';

function App() {
  return (
    <>
      <Header>
        <PersistentDrawerLeft></PersistentDrawerLeft>
      </Header>
      <Main>
        <Router />
      </Main>
    </>
  );
}

export default App;
