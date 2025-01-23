# Chapter 07 - Finding the Path
## Q1: What are various ways to add images into our App? Explain with code examples
Ans: 
1. **Importing Locally**
  ```
  import logo from './images/logo.png';

  <img src={logo} alt="Logo" />
  ```
2. **Using Images in the `public` Folder**
  ```
  <img src="/assets/banner.jpg" alt="Banner" />
  ```
3. **Using URLs (CDN or External Sources)**
  ```
  <img src="https://via.placeholder.com/300" alt="Placeholder" />
  ```
4. **CSS Background Images**
  ```
  background-image: url('./images/logo.png');
  ```

## Q2: What would happen if we do console.log(useState())?
Ans:  The useState hook is used in React to declare a state variable. It takes an initial state value as its argument and returns an array with two elements:
- The current state value.
- A state updater function to modify the state.

If we log the output of useState() directly, the console will display:
```
[undefined, ƒ]
```
- The first element (undefined) is the initial state.
- The second element is the state updater function, which can be called to update the state.

## Q3: How will useEffect behave if we don't add a dependency array ?
Ans: The function passed to useEffect will be called with every render of the page. That means it will run after every render of the component. This includes both the initial render and every subsequent update.

| Dependency Array |	Behavior |
|------------------|-----------|
| No dependency array |	Runs after every render (initial render + all updates). |
| Empty dependency array [ ] |	Runs only once after the initial render (component mount). |
| Specific dependencies |	Runs only when one or more specified dependencies change. |

## Q4: What is SPA?
Ans: A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content on the page based on user interactions without requiring a full page reload. React facilitates this by using its powerful virtual DOM and component-based architecture.

**How React Enables SPAs:**
- **Virtual DOM:** React updates only the parts of the DOM that change, ensuring fast and efficient rendering.

- **Component-Based Architecture:** React applications are built using reusable components, which makes it easy to manage and scale SPAs.

- **State Management:** State is used to manage data within components, and libraries like Redux or Context API can be used to manage global state.

- **Routing with react-router:** react-router allows you to define routes and render components based on the URL without reloading the page.

## Q5: What is difference between Client Side Routing and Server Side Routing?
Ans: 
**Server-Side Routing:** Server-side routing is the traditional way of navigating between pages. When the user clicks on a link, a request is sent to the server, which processes the request and sends a new HTML page as a response.

**Client-Side Routing:** Client-side routing is commonly used in modern Single Page Applications (SPAs). Navigation between "pages" is handled in the browser without making a full-page request to the server.
