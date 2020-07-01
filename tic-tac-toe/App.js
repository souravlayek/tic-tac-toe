import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import GameNavigation from "./navigation/GameNavigation";
import { GameReducer } from "./store/gameReducer";

const store = createStore(GameReducer);

export default function App() {
  return (
    <Provider store={store}>
      <GameNavigation />
    </Provider>
  );
}
