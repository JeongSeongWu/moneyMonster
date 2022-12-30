import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import Main from './pages/Main';
import Gathering from './pages/Gathering'

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99.9%;
    height: 999px;
`;




function App() {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/gathering' element={<Gathering/>}/>
        </Routes>
    </Container>
  );
}

export default App;
