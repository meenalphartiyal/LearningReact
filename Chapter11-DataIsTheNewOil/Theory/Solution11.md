# Chapter 11 - Data is the New Oil

## Q1 : What is prop drilling?
Ans: Prop drilling is a term in React that refers to the process of passing data from a parent component to a deeply nested child component through multiple intermediate components. This can make the code messy and harder to maintain because components that don't need the data still have to pass it down.
```
function App() {
  const user = { name: "Meenal" };

  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user.name}!</h1>;
}
```

To avoid it we can use
- ContextAPI
- State Management Libraries such as Redux.

## Q2 : What is lifting the state up?
Ans: Lifting the state up is a React pattern where you move the state from a child component to its closest parent component. This is done to share the state between multiple child components.
```
function Parent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Child count={count} onIncrement={() => setCount(count + 1)} />
      <Child count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
```
## Q3 : What is Context Provider and Context Consumer?
Ans: React Context API is used to share data across components without prop drilling.

Context Provider: The component that holds and provides the state/data to its child components. This is used to fetch the value of the context.
Context Consumer: The component that accesses the data from the provider. This is used to update the value of the context.

## Q4 : If you don’t pass a value to the provider does it take the default value?
Ans: If you do not pass a value to the Provider, React will throw an error:

> The `value` prop is required for the `<Context.Provider>`.

However, if you omit the Provider entirely, React will use the default value set in createContext().
