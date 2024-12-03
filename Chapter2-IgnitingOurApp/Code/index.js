import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "Heading 1 from React"),
      React.createElement("h2", { id: "sub-heading" }, "Heading 2 from React"),
    ])
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(Parent);