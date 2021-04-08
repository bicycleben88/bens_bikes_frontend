import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Show from "./pages/Show";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Order from "./pages/Order";
import { CartStateProvider } from "./lib/cartState";
import ItemsPage from "./pages/ItemsPage";

export const GlobalContext = React.createContext(null);

const theme = {
  lightYellow: "#ffffcc",
  lightBlue: "#e5f4fe",
  boldBlue: "#5fa2cf",
  boldYellow: "#f0f046",
  offwhite: "#f8f8ff",
  maxWidth: "1100px",
  black: "#393939",
  boxS: "0 12px 12px 0 #f0f046",
};

const StyledPage = styled.div`
  main {
    background-color: lightyellow;
    height: 100%;
    margin-top: 2rem;
    padding: 0.5rem;
    min-height: 400px;
  }
  a {
    text-decoration: none;
  }
`;

function App() {
  const [globalState, setGlobalState] = React.useState({
    url: "https://bens-bikes-backend.herokuapp.com",
    // url: "http://localhost:3000",
    // userId: null,
    token: null,
  });

  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGlobalState({ ...globalState, token: token });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <ThemeProvider theme={theme}>
        <CartStateProvider>
          <StyledPage className="App">
            <Header />
            <main>
              <Switch>
                <Route path="/show/:id" component={Show} />
                <Route
                  exact
                  path="/error"
                  render={(rProps) => <Error {...rProps} />}
                />
                <Route
                  exact
                  path="/login"
                  render={(rProps) => <Login {...rProps} />}
                />
                <Route
                  exact
                  path="/signup"
                  render={(rProps) => <Signup {...rProps} />}
                />
                <Route path="/orders/:id" component={Order} />
                <Route
                  path={["/items/:id", "/", "/items"]}
                  component={ItemsPage}
                />
              </Switch>
            </main>
          </StyledPage>
        </CartStateProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
