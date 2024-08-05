import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Board } from './components';

const App = () => (
  <Container>
    <GlobalStyle />
    <header>
      <h1>MementoAI FrontEnd Developer Assignment</h1>
    </header>
    <Board />
  </Container>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: beige;
  }
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
