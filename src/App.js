import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Items from './pages/Items'

export const GlobalContext = React.createContext(null)

const theme = {
  lightYellow:  '#ffffcc',
  lightBlue: '#e5f4fe',
  boldBlue: '#5fa2cf',
  boldYellow: '#f0f046',
  offwhite: '#EDEDED',
  maxWidth: "1100px", 
  black: '#393939', 
  boxS: '0 12px 24px 0 #f0f046'
}

const StyledPage = styled.div`
  main {
    background-color: lightyellow;
    height: 100%;
    margin-top: 2rem;
  }
  a {
    text-decoration: none
  }
`;

function App() {
  const [globalState, setGlobalState] = React.useState({
    url: "http://localhost:3000"
  });
  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <ThemeProvider theme={theme}>
      <StyledPage className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={rProps => <Items {...rProps} />} />
          </Switch>
        </main>
      </StyledPage>
    </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
