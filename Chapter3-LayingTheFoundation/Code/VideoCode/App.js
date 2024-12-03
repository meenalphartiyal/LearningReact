import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const reactElement = React.createElement(
  "h1",
  { id: "heading" },
  "This is a react element"
);

// JSX Element
const jsxElement = <h1>This is a jsx element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(reactElement);
// root.render(jsxElement);

// React Component
const HeadingComponent = () => {
  return (
    <div id='container'>
      <h1>This is a React Component</h1>
    </div>
  );
};

root.render(<HeadingComponent />);