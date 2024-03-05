import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me!</h1>
      </div>
      <SearchParams />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// render(<App />, document.getElementById("root"));
