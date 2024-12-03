# Chapter 03 - Laying the Foundation
## Q1: Is JSX mandatory for React?
Ans: No JSX is not mandatory for React. JSX is a JavaScript syntax which makes writing react easier to create react elements. It is not a part of react. We can write react without JSX also but it makes react easier. JSX is HTML-like syntax. However, React can work perfectly fine without JSX.

React uses React.createElement under the hood to create elements, and you can directly use this API to define components and elements without JSX.

### Using JSX
```
function App() {
  return <h1>Hello, World!</h1>;
}

export default App;
```
### Without JSX
```
import React from 'react';

function App() {
  return React.createElement('h1', null, 'Hello, World!');
}

export default App;
```

## Q2: `{TitleComponent}` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>` in JSX
Ans: Since React Components are just JS functions we can call them inside {} and they will get executed. So these three are same. The only difference could be...

| Syntax | Purpose	| Rendering |
|--------|----------|-----------|
| `{TitleComponent}`	| Passes the component reference (not rendered). | No rendering. |
| `{<TitleComponent />}`	| Renders the component as a self-closing tag. |	Renders immediately. |
| `{<TitleComponent></TitleComponent>}`	| Renders the component with children or explicit open/close tags. |	Renders immediately. |


## Q3: How can I write comments in JSX?
Ans: 
- Using `{/* ... */}` for JSX comments.
- Use `//` or `/* ... */` for comments outside JSX.

## Q4: What is `<React.Fragment></React.Fragment>` and `<></>` ?
Ans: `<React.Fragment>` and its shorthand `<></>` are used in React to group multiple child elements without adding an extra DOM node. They are especially useful when you need to return multiple elements from a component without wrapping them in an unnecessary container like a `<div>`.

`<React.Fragment>` is a special component provided by React that lets you group a list of children elements without creating additional DOM nodes.

`<></>` is the shorthand for <React.Fragment> and behaves in the same way. It is shorter and more concise but does not support key or other attributes

## Q5: What is Virtual DOM?
Ans: The Virtual DOM is a concept used in React to optimize updates to the UI. It ensures efficient updates and renders of the UI by minimizing direct manipulations of the real DOM. 

Instead of making every change directly on the real DOM, react make changes to the Virtual DOM. After finalizing the changes, only the differences between the old and new are implemented on the original DOM.

- **Initial Rendering**: When a React component renders for the first time, a Virtual DOM tree is created, representing the initial UI.
- **State/Props Change**: When state or props change, React creates a new Virtual DOM tree to reflect the updated UI.
- **Diffing Algorithm**: React compares the previous Virtual DOM tree with the new one using a process called "*reconciliation*." It identifies the minimum set of changes (or "diffs") between the two trees.
- **Batch Updates**: React updates only the parts of the real DOM that have changed, rather than re-rendering the entire tree. This minimizes expensive DOM operations.
- **Efficient UI Updates**: The updated UI is rendered efficiently with minimal changes to the real DOM.

## Q6: What is Reconciliation in React?
Ans: Reconciliation in React is the process of updating the DOM efficiently when the state or props of a component change. It involves React comparing the new Virtual DOM tree with the previous one to determine the minimum set of changes required to update the actual DOM.

### Best Practices for Reconciliation
- **Use Unique Keys**: Always provide unique key props for dynamic lists.
```
items.map(item => <li key={item.id}>{item.name}</li>);
```
- **Avoid Inline Functions**: Inline functions and objects can trigger unnecessary re-renders.
```
// Avoid
<button onClick={() => handleClick()}>Click Me</button>;

// Better
const handleClick = useCallback(() => { /*...*/ }, []);
<button onClick={handleClick}>Click Me</button>;
```

## Q7: What is React Fiber?
Ans: React Fiber is the reconciliation engine introduced in React 16, designed to improve rendering performance and make React more flexible.

Before React Fiber, React used a synchronous rendering model (React Stack), which meant:
- Large updates could block the main thread, causing the application to become unresponsive.
- There was no way to interrupt or prioritize rendering tasks.

React Fiber addresses these limitations by introducing an incremental rendering mechanism, enabling React to:
1. Split rendering work into smaller units.
2. Prioritize rendering tasks based on urgency.
3. Pause and resume rendering as needed.

### How React Fiber Works
1. **Phases of Fiber's Reconciliation**: React Fiber breaks the rendering process into two phases:
    - **Render Phase (Reconciliation)**:
        - React determines what changes need to be made to the UI.
        - This phase is interruptible and can be paused/resumed.
    - **Commit Phase**:
        - The changes are applied to the real DOM.
        - This phase is synchronous and cannot be interrupted.
2. **Fiber Nodes**:
    - React Fiber uses a data structure called a "fiber" to represent each element in the React tree.
    - Each fiber node contains information about:
        - The component it represents.
        - Its parent, child, and sibling nodes.
        - The work that needs to be performed on it.
3. **Unit of Work**:
    - Rendering tasks are broken into smaller units of work.
    - React processes one unit at a time, checking if higher-priority tasks need to be handled before continuing.


## Q8: Why we need keys in React? When do we need keys in React?
Ans: We need keys whenever we loop over data (e.g., using .map() or a loop) to render a list of elements. Keys must be provided to uniquely identify each element in the list.

Key help react to uniquely identify which elements have changed, been added, or removed. In case any changes are made to an element, react will be able to uniquely identify that element using this key attribute so that changes are done to only that element instead of re-rendering the whole component. This increases the optimization by only modifying a specific part of the DOM tree instead of the whole tree (which is actually a very expensive operation).

## Q9: Can we use index as keys in React?
Ans: Yes, we can use the index as keys in React, but it's generally not recommended. Using the index as a key can lead to unexpected behavior in certain scenarios, especially when the list is dynamic
#### Why Using Index as Keys Can Be Problematic
- If the order of the list changes, React may confuse elements, leading to incorrect updates or animations.
Example: Drag-and-drop lists.
- React may unnecessarily re-render components because it sees them as "new" if the order of elements changes.
Data Mismatch:

## Q10: What is props in React?
Ans: In React, props are a way to pass data from a parent component to a child component. They are immutable and enable components to be dynamic and reusable by receiving different inputs.
```
const GreetingComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

cosnt App = () => {
  return <Greeting name="John" />;
}
```

## Q11: What is a Config Driven UI ?
Ans: Config Driven UI refers to a user interface that is dynamically generated based on predefined configuration files or metadata, rather than hard coded layouts and components. This approach makes UIs highly flexible and adaptable, enabling changes to the design, structure, or functionality without modifying the underlying code.

