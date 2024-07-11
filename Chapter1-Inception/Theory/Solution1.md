# Chapter 1 - Inception
## Q1: What is Emmet?
Ans: Emmet is a toolkit for text editors that allow web developers to type shorthand that are then expanded into full piece of code.

## Q2: Difference between a Library and Framework?
Ans: Both Libraries and Frameworks are a collection of reusable code that can simplify software development. The key difference between a Library and Framework is Inversion of Control. When using a Library, the control remains in the hands of the developer. When using a Framework, the control is reversed, the framework tells the developer where the code needs to be provided. Framework provides a structure for software development, on the other hand libraries are used to perform a specific task.

## Q3: What is CDN? Why do we use it?
Ans: CDN or **Content Delivery Network** is a network, or a collection of servers placed in different locations all over the world that allows quick transfer of asset needed for loading web content.

## Q4: Why is React known as React?
Ans: The name “React” was chosen to allow developers to react to the changes in state and data within the application. It reacts only when there is a change in state of the application.

## Q5: What is crossorigin in script tag?
Ans: `crossorigin` attribute in the script tag enable **Cross Origin Resource Sharing (CORS)** for loading external JavaScript files from different origin than the hosting web page. This allow the script to access the resources from server hosting the script.

## Q6: What is difference between React and ReactDOM?
Ans: React is a JavaScript library for building user interfaces. It provides tools and concepts for creating reusable UI components, managing their state, and efficiently updating the UI whenever data changes.

ReactDOM is also a JavaScript library that provide DOM-specific methods for rendering React components into the browser’s actual DOM. It acts as a bridge between React’s virtual DOM and the real DOM.

## Q7: What is difference between `react.development.js` and `react.production.js` files via CDN?
Ans: `react.development.js` is used during development, it includes helpful warning and error messages to help in debugging. It is not optimized for performance and may include larger file size.

`react.production.js` is used for production environments, it is optimized for performance and has a smaller file size. It strips out all the development-specific warnings and error messages, resulting in a faster and more efficient application.

## Q8: What is async and defer?
Ans: The `async` attribute is a boolean attribute. The script is downloaded in parallel to the parsing the html and executes it as soon as it is available.

The `defer` attribute is a boolean attribute. The script is downloaded in parallel to the parsing of the html and executed once parsing is complete.