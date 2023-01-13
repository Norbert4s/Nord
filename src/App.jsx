import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Servers from "./components/ServersList/Servers";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/servers" element={<Servers />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
