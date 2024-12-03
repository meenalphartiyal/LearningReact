# Chapter 03 - Laying the Foundation
## Q1: What is JSX?
Ans: JSX is a syntax extension for JavaScript that is used to create react components. It is not a part of react. We can write react without JSX but JSX makes react easier because it allows developer to write HTML-like code directly in JavaScript making the code more intiutive and easier to understand.


## Q2: Superpowers of JSX
Ans: **Key Features of JSX**
- **HTML-like Syntax:** You can write HTML-like tags within your JavaScript code.
    ```
    const element = <h1>Hello, world!</h1>;
    ```

- **Dynamic Content:** JavaScript expressions can be embedded within curly braces {} to dynamically control content.  
    ```
    const name = "Meenal";
    const greeting = <h1>Hello, {name}!</h1>;
    ```

- **Component Integration:** JSX is used to define components and their structure.
    ```
    function Welcome(props) {
        return <h1>Welcome, {props.name}!</h1>;
    }
    ```

- **React.createElement:** Under the hood, JSX is transpiled into React.createElement() calls, which creates virtual DOM elements.
    ```
    const element = <h1>Hello!</h1>;
    ```
    Transpiles to:
    ```
    const element = React.createElement('h1', null, 'Hello!');
    ```

- **Custom Components:** JSX allows the use of custom components (defined with capitalized names) as elements.
    ```
    const App = () => <MyComponent />;
    ```


## Q3: Role of `type` attribute in script tag? What options can I use there?
Ans: The `type` attribute in a `<script>` tag specifies the MIME type (Media Type) of the script. It informs the browser about the type of code contained within the script so it can be handled appropriately.

A normal browser script i.e. a normal js file can’t have imports but a module can have imports. In order to have import statements in your js you have to define it as a module for parcel to render it to the browser. This can be done by adding the following to the script tag in the html file
```
<script type=”module” src=”index.js”></script>
```

## Q4: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
Ans: Since React Components are just JS functions we can call them inside {} and they will get executed. So these three are same. The only difference could be...

| Syntax | Purpose	| Rendering |
|--------|----------|-----------|
| `{TitleComponent}`	| Passes the component reference (not rendered). | No rendering. |
| `{<TitleComponent />}`	| Renders the component as a self-closing tag. |	Renders immediately. |
| `{<TitleComponent></TitleComponent>}`	| Renders the component with children or explicit open/close tags. |	Renders immediately. |

