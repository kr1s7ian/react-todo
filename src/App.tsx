import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { TodoCreator } from "./components/todoCreator";
import { Todo } from "./components/todo";
import { Provider } from "react-redux";
import { store } from "./store";
import { TodoHolder } from "./components/todoHolder";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <TodoHolder />
        </div>
      </Provider>
    </>
  );
}

export default App;
