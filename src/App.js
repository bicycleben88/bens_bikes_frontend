import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Items from './pages/Items'
import Show from './pages/Show';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Thanks from './pages/Thanks';

export const GlobalContext = React.createContext(null);

const theme = {
  lightYellow:  '#ffffcc',
  lightBlue: '#e5f4fe',
  boldBlue: '#5fa2cf',
  boldYellow: '#f0f046',
  offwhite: '#f8f8ff',
  maxWidth: "1100px", 
  black: '#393939', 
  boxS: '0 12px 12px 0 #f0f046'
}

const StyledPage = styled.div`
  main {
    background-color: lightyellow;
    height: 100%;
    margin-top: 2rem;
    padding: .5rem;
    min-height: 400px;
  }
  a {
    text-decoration: none
  }
`;

function App() {
  const [globalState, setGlobalState] = React.useState({
    url: "http://localhost:3000",
    item: null,
    itemsInOrder: false,
    orderId: null,
    userId: null,
    token: null
  });
  
  return (
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
    <ThemeProvider theme={theme}>
      <StyledPage className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" 
              render={rProps => 
              <Items {...rProps} />} />
            <Route exact path="/show" 
              render={rProps => 
              <Show {...rProps}  
                item={globalState.item} />} />
            <Route exact path="/cart" 
              render={rProps => 
              <Cart {...rProps}  
                item={globalState.item} />} />
            <Route exact path="/login"
              render= {rProps => 
              <Login {...rProps} />} />
            <Route exact path="/signup"
              render= {rProps => 
              <Signup {...rProps} />} />
            <Route exact path="/spanx"
              render= {rProps => 
              <Thanks {...rProps} />} />
          </Switch>
        </main>
      </StyledPage>
    </ThemeProvider>
    </GlobalContext.Provider>
  );
}
 
export default App;
