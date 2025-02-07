# Chapter 08 - Let's get Classy
## Q1: How do you create Nested Routes react-router-dom cofiguration
Ans: 
We can create nested routes with the help of the `children` key 
Example:  
```
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
```

## Q2: Read abt createHashRouter, createMemoryRouter from React Router docs.
Ans: 

## Q3: What is the order of life cycle method calls in Class Based Components
Ans: A class component mainly has 3 functions
- constructor
- render()
- componentDidMount()

These functions are called in the following order
- Constructor (initialing the class)
- Render (renders the class content)
- React updates the DOM
- componentDidMount is called.

In case of Parent component being a class component and having multiple child components, the order will be
- Parent Constructor (initialization of class)
- Parent Render Method : inside render() it will find the Child class component and it will start initializing it
- First Child Constructor (initialization of class)
- First Child Render Method
- Second Child Constructor (initialization of class)
- Second Child Render Method
- DOM manipulation (in a single batch)
- First Child Component Did Mount
- Second Child Component Did Mount
- Parent Component Did Mount

## Q4: Why do we use `componentDidMount`?
Ans: `componentDidMount` is a lifecycle method in React class components that runs once after the component has been mounted. It is used to perform stuff that is required once the component gets rendered, such as API calls, Setting Up Event Listeners, Initializing Timers or Intervals, Updating State After Mounting (similar to useEffect).

## Q5: Why do we use componentWillUnmount? Show with example
Ans: componentWillUnmount is a lifecycle method in React class components that is called just before a component is removed from the DOM. It is used for functionalities like Cleaning up Event Listeners (e.g., window.addEventListener), Clearing Timers or Intervals (setInterval / setTimeout), Aborting API Calls (e.g., AbortController), etc.
Example:
```
<!--  Defining the state -->
constructor(){  
  this.state = {
    timer: 0,
  };
}

<!-- Interval -->
componentDidMount(){
  this.interval = setInterval(() => {
    console.log("Timer Running..");
    this.setState({
      timer: this.state.timer + 1
    });
  }, 1000);
}

<!-- Clearing Interval -->
componentWillUnmount(){
  clearInterval(this.interval);
}

<!-- Rendering Interval -->
render(){
  return <h2>Timer: {this.state.timer}</h2>;
}
```

## Q6: (Research) Why do we use super(props) in constructor?
Ans: In React class components are created by extending `React.Component`. In order to be able to use all the functions/methods provided to use by React Class Component in our class component we use `super(props)` inside the constructor. This is done to correctly initialize the component and gain access to `this.props` and `this.state` and other functionalities.

## Q7: (Research) Why can't we have the callback function of useEffect async?
Ans: The callback function inside useEffect cannot be async because React expects it to return a cleanup function or undefined, but an async function always returns a Promise.
