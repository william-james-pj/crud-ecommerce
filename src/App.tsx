import GlobalStyle from "./styles/global";

import { ProductsProvider } from "./contexts/ProductsContexts";
import { ClientsProvider } from "./contexts/ClientsContexts";

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
        <ProductsProvider>
          <ClientsProvider>
            <Router history={history}>
              <Layout />
            </Router>
          </ClientsProvider>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
