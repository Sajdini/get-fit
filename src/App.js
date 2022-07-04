import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Excercises from "./pages/Excercises";

function App() {
  console.log(
    process.env.REACT_APP_API_PATH,
    process.env.REACT_APP_FETCH_API_KEY
  );

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list:excerciseList" element={<Excercises />} />
      </Routes>
    </>
  );
}

export default App;
