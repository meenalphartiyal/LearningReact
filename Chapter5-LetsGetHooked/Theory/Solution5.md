# Chapter 03 - Laying the Foundation
## Q1: What is the difference between Named Export, Default export and * as export?
Ans: **Named Export**: Allows you to export multiple named variables, functions, or classes from a module.
```
export const Component = … ;
import  { Component } from ‘./path’;
```
**Default Export**: Allows you to export a single value from a module.
```
export default Component;
import Component from ‘./path’;
```
**\* as export**: Imports all named exports from a module into a single object. Often used when you want to group all exports under a namespace.
``` 
import * as MathUtils from './math.js'; 
```

## Q1: What is the importance of `config.js` file
Ans: The `config.js` file plays a crucial role in many JavaScript and Node.js projects by centralizing configuration settings. It helps maintain flexibility, scalability, and ease of management for applications.

## Q2: What are React Hooks?
Ans: React Hooks are javascript functions introduced in React 16.8 that allow you to use React state and lifecycle features in functional components. They allow functional components to manage state and side effects.

## Q3: Why do we need a useState Hook?
Ans: The useState hook is fundamental in React because it enables functional components to manage state. This hook is vital because it:
- Enables stateful logic in functional components.
- Simplifies code structure compared to class components.
- Triggers re-renders to keep the UI in sync with state changes.
- Makes React components more readable, maintainable, and reusable.
