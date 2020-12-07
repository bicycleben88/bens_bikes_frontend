import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';

const theme = {
  lightYellow:  '#ffffcc',
  lightBlue: '#e5f4fe',
  boldBlue: '#5fa2cf',
  boldYellow: '#f0f046',
  offwhite: '#EDEDED',
  maxWidth: "1000px", 
  black: '#393939', 
  boxS: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
  background-color: ${props => props.theme.offwhite};
  main {
    background-color: lightyellow;
  }
  a {
    text-decoration: none
  }
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage className="App">
        <Header />
        <main>
          
        </main>
      </StyledPage>
    </ThemeProvider>
  );
}

export default App;
