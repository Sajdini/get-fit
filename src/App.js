import React, { useContext } from "react";
import "./App.css";
import Navigation from "./components/nav/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Excercises from "./pages/Excercises";
import Excercise from "./pages/Excercise";

import HttpContext from "./context/http-context";
function App() {
  const isFetched = useContext(HttpContext).isFetched;
  console.log(isFetched);
  return (
    <>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          {isFetched && (
            <Route path="/list/:excerciseList" element={<Excercises />} />
          )}
          {isFetched && <Route path="/excercise/:id" element={<Excercise />} />}
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
