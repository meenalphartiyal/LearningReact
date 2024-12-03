import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import './Header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React.create element
// const headerDiv = React.createElement('div', {class: 'title'}, [
//   React.createElement('h1', {id: 'heading1'}, 'This is Heading 1'),
//   React.createElement('h2', {id: 'heading2'}, 'This is Heading 2'),
//   React.createElement('h3', {id: 'heading3'}, 'This is Heading 3'),
// ]);
// root.render(headerDiv);

// jsx element
// const JSXelement = (
//   <div className='title'>
//     <h1>This is JSX heading 1</h1>
//     <h2>This is JSX heading 2</h2>
//     <h3>This is JSX heading 3</h3>
//   </div>
// );
// root.render(JSXelement);

const number = 1000;
const TitleComponent = () => (<h1>Meenal Phartiyal</h1>);

//jsx component
const JSXcomponent = () =>{
  return (
    <div className='title'>
      <Header/>
      <h1>This is JSX heading 1</h1>
      <h2>This is JSX heading 2</h2>
      <h3>This is JSX heading 3</h3>
      <div>{number}</div>
      <TitleComponent/>
    </div>
  );
}
root.render(<JSXcomponent/>);
