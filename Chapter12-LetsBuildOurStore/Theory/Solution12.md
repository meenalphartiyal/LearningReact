# Chapter 12 - Let's Build Our Store
## Q1: useContext vs Redux.
Ans: Both useContext and Redux are used for state management in React, but they serve different purposes and have different use cases.
| Feature	| useContext |	Redux |
|---------|------------|--------|
| Type |	Built-in React feature | External state management library |
| Best for |	Small to medium apps, local state |	Large-scale apps, global state |
| Performance |	May cause unnecessary re-renders |	Optimized with useSelector and Redux Toolkit |
| Ease of Use	| Simple, minimal boilerplate |	Requires setup & boilerplate |
| Middleware Support	| No middleware	| Supports Redux Thunk, Saga, etc. |
| DevTools |	No built-in dev tools	| Powerful Redux DevTools |
| Asynchronous Handling |	 No built-in support | Supports async  actions |
| Reactivity	| May re-render unnecessary components |	Selective re-rendering with useSelector() |
| Data Flow |	Props drilling avoidance	| Centralized store with actions/reducers |

## Q2: Advantage of using Redux Toolkit over Redux.
Ans: Redux Toolkit (RTK) is the recommended way to use Redux because it simplifies code, reduces boilerplate, and improves performance.

| Feature	| Traditional Redux |	Redux Toolkit (RTK) |
|---------|-------------------|---------------------|
| Boilerplate Code	| Requires manual reducers, action types, action creators |	Auto-generates reducers & actions with `createSlice()` |
| Setup Complexity |	Requires multiple files (reducers, actions, store) |	Simplified store setup with configureStore() |
| Performance |	Manual optimizations needed |	Uses Immer.js for efficient immutable updates |
| Async Handling |	Requires redux-thunk setup |	Built-in createAsyncThunk() for async logic |
| DevTools Support |	Needs manual integration |	Built-in Redux DevTools support |
| Mutation Handling	| Manual immutable state updates	| Auto-immutable updates with Immer |
| State Management |	Verbose switch-case reducers |	Simple object-based reducers |
| Best Practices	| Developers implement patterns manually | 	Follows Redux best practices automatically |

## Q3: Explain Dispatcher.
Ans: A dispatcher is responsible for sending actions to the Redux store to update the state. It acts as a middleman between components and the Redux store.
- The dispatcher is not an entity in Redux but rather a concept.
- It triggers state changes by dispatching actions.
- In Redux, we use the dispatch() method to send an action.
- The reducer listens for these dispatched actions and updates the state accordingly.

## Q4: Explain Reducer.
Ans: Reducers are pure functions that are invoked when an action is dispatched. They take the current state and an action as arguments and return a new state. Reducers are functions that are invoked when an action is dispatched to update data in the store.

## Q5: Explain slice.
Ans: A slice in Redux Toolkit (createSlice) is a collection of state, reducers, and actions bundled together for a specific feature in your app. It simplifies Redux code by removing boilerplate and managing state efficiently. A section of a store is known as a slice. A store can have multiple slices.

## Q6: Explain selector.
Ans: A selector is a function used to extract specific pieces of data from the Redux store. A selector is a function that takes the Redux state as input and returns a specific part of the state. It helps components read data efficiently from the store.

## Q7: Explain createSlice and the configuration it takes.
Ans: `createSlice()` is a function in Redux Toolkit that simplifies state management by combining reducers, actions, and initial state into a single object. Instead of writing separate action types, action creators, and reducers, `createSlice()` auto-generates actions and manages state updates efficiently.

`createSlice()` takes an object as an argument with the following properties:

| Option |	Description |	Required? |
|--------|--------------|-----------|
| **name** |	A unique name for the slice (used in actions) | Yes |
| **initialState** |	The default state for the slice	| Yes | 
| **reducers** |	Functions to update the state (auto-generates actions)	| Yes |
| **extraReducers** |	Handles actions from other slices or async actions	| No |
