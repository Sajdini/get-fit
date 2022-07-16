import React, { Suspense, useContext } from "react";
import "./App.css";
import Navigation from "./components/nav/Navigation";
import { Routes, Route } from "react-router-dom";
import HttpContext from "./context/http-context";
import LoadingSpinner from "./components/home-components/loading-spinner/LoadingSpinner";
function App() {
  const isFetched = useContext(HttpContext).isFetched;

  const Home = React.lazy(() => import("./pages/Home"));
  const Excercises = React.lazy(() => import("./pages/Excercises"));
  const Excercise = React.lazy(() => import("./pages/Excercise"));

  return (
    <>
      <Navigation>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner asOverlay />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {isFetched && (
              <Route path="/list/:excerciseList" element={<Excercises />} />
            )}
            {isFetched && (
              <Route path="/excercise/:id" element={<Excercise />} />
            )}
          </Routes>
        </Suspense>
      </Navigation>
    </>
  );
}

export default App;
