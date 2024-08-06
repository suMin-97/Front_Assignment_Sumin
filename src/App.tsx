import styled, { createGlobalStyle } from 'styled-components';
import { Board } from './components';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header>
      <p>MementoAI FrontEnd Developer Assignment</p>
    </Header>
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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    font-size: large;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: x-large;
  }

  @media (min-width: 1024px) {
    font-size: xx-large;
  }
`;

export default App;
