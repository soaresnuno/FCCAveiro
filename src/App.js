import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import GlobalStyle from "./styles/Global";
import MainPage from "./pages/MainPage";

import rootReducer from "./store/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => (
  <>
    <Provider store={store}>
      <MainPage />
    </Provider>
    <GlobalStyle />
  </>
);

export default App;
