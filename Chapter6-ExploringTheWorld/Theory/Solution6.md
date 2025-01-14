# Chapter 03 - Laying the Foundation
## Q1: What is a Microservice?
Ans: A Microservice is a software architecture style where an application is built as a collection of small, independent services. Each service is responsible for a specific piece of functionality and communicates with other services. Breaking things down into smaller services makes it easy to handle everything efficiently.

## Q2: What is Monolith architecture?
Ans: A Monolithic Architecture is a traditional software design pattern where an entire application is built as a single unit. All the components, such as the user interface, business logic, and database management, are run as a single process.

In this architecture, the application is deployed as a single executable or package, making it simpler to develop and manage initially but harder to scale and maintain as it grows.

## Q3: What is the difference between Monolith and Microservice?
Ans: 
| Aspect |	Monolithic Architecture	| Microservices Architecture |
|--------|--------------------------|----------------------------|
| Structure |	A single, unified codebase where all components are tightly integrated.	| A collection of small, independent services, each focusing on a specific business functionality. |
| Scalability |	Scaled as a whole unit, even if only one part needs scaling. |	Each service can be scaled independently based on its specific demand. |
| Deployment |	Entire application needs to be redeployed for any change. |	Each service can be deployed independently, minimizing downtime. |
| Fault Isolation |	A failure in one part of the system can crash the entire application.	| Failures are isolated to specific services, ensuring the rest of the system remains unaffected. |
| Technology Flexibility	| Built using a single tech stack, limiting flexibility.	| Different services can use different tech stacks or languages, offering flexibility. |
| Development Complexity	| Easier to develop and manage initially, as everything is in one codebase. |	More complex to develop due to inter-service communication |
| Testing	| Easier to test as a single unit. |	Requires testing of each service individually and their integrations. |
| Communication |	Internal communication through direct function calls. |	Services communicate via APIs or messaging systems (e.g., REST, gRPC, Kafka). |
| Database	| Typically uses a single, shared database. |	Each service can have its own database, tailored to its needs. |
| Maintenance |	Becomes harder to maintain as the application grows. |	Easier to maintain as services are smaller and focused. |
| Deployment Time |	Slow, as changes require redeploying the entire application. | 	Faster, as only the affected service needs to be redeployed. |
| Infrastructure Cost	| Requires fewer resources since everything runs as a single unit.	| Higher infrastructure costs due to multiple services and potential redundancy.
| Best Use Cases	| Suitable for small applications with limited functionality and a small team.	| Suitable for large, complex applications with high scalability and frequent updates. |

## Q4: Why do we need a useEffect Hook?
Ans: useEffect Hook allows you to perform actions after the first render or whenever certain dependencies change. useEffect is used to "do something after the first render or after specific changes"

## Q5: What is Optional Chaining?
Ans: Optional Chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties or methods of an object without throwing an error if a property is undefined or null. Instead of throwing an error, it will return undefined when it encounters a null or undefined value.

## Q6: What is Shimmer UI?
Ans: Shimmer UI is a design pattern often used in web and mobile applications to improve the user experience while content is loading. It displays placeholder elements that mimic the shape and size of the actual content, along with a shimmering animation, to indicate that data is being fetched or rendered.

## Q7: What is the difference between JS expression and JS statement
Ans: 
| Aspect	| JavaScript Expression |	JavaScript Statement |
|---------|-----------------------|----------------------|
| Definition |	A piece of code that evaluates to a value.	| A block of code that performs an action. |
| Purpose |	To produce a value.	| To execute logic or control the flow of the program. |
| Return Value |	Always evaluates to a value (e.g., number, string, etc.).	| Does not necessarily return a value. |
| Examples |	`5 + 3`, `"Hello"`, `a * b`, `true`	| `if`, `for`, `while`, `function`, `return` |

## Q8: What is Conditional Rendering, explain with a code example
Ans: Conditional rendering in React is the process of rendering different components or elements based on a condition. It works similarly to how conditions work in JavaScript, such as using `if`, `else`, or ternary operators, to decide what should appear in the UI.

Example
```
{filteredList.length !== 0 ?  (
  filteredList.map((res) => (
    <RestaurantCard resObj={res} key={res.info.id} />
  ))
) : (
  <h1>
    Restaurant does not exist!!
  </h1>
  ) 
}
```

## Q9: What is CORS?
Ans: CORS (or Cross-Origin Resource Sharing) is a security feature implemented by browsers that restricts web pages for making requests to different origin.

By default, web browsers restrict cross-origin HTTP requests for security reasons. This means if your web page tries to fetch data from another domain, the browser will block the request unless the server explicitly allows it.

CORS provides a way for servers to specify who (domains) can access their resources and how they can access them.

## Q10: What is async and await?
Ans: `async` and `await` are used in JavaScript to handle asynchronous operations in a more readable and manageable way, compared to using traditional callbacks or promises.

**`async`**
- It is used to declare a function as asynchronous.
- An async function always returns a Promise.
- Even if you don't explicitly return a Promise, the function will automatically wrap the return value in a Promise.

**`await`**
- It can only be used inside an async function.
- It pauses the execution of the async function until the Promise is resolved or rejected, making the code look and behave like synchronous code, even though it is asynchronous.
- If the Promise resolves successfully, await returns the resolved value.
- If the Promise is rejected, it throws an error.

## Q11: What is the use of `const json = await data.json();` in getRestaurants()
Ans: In the `getRestaurants()` function, the line `const json = await data.json();` is used to parse the response data returned from an HTTP request (made using fetch()) into JSON format.