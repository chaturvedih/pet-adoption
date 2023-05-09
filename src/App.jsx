import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UseParams from "./UseParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to={"/"}> Adopt Me </Link>
        </header>
        <Routes>
          <Route path="/" element={<UseParams />} />
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
