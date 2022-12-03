import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import Main from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99.9%;
    height: 999px;
    border: 1px solid red;
`;




function App() {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </Container>
  );
}

export default App;
