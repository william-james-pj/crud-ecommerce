import GlobalStyle from "./styles/global";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import { Router } from "react-router-dom";
import { history } from "./services/history";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Router history={history}>
          <Layout />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
