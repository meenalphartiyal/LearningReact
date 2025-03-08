import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "../index.css";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const Header = React.lazy(() => import("./components/Header.js"));
const Body = React.lazy(() => import("./components/Body.js"));
const About = React.lazy(() => import("./components/About.js"));
const Contact = React.lazy(() => import("./components/Contact.js"));
const Error = React.lazy(() => import("./components/Error.js"));
const RestaurantMenu = React.lazy(() =>
  import("./components/RestaurantMenu.js")
);
const Login = React.lazy(() => import("./components/Login.js"));
const Cart = React.lazy(() => import("./components/Cart.js"));

const userInfo = {
  username: "Meenal",
};

const App = () => {
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedinUser: userInfo.username }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </React.Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </React.Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </React.Suspense>
        ),
      },
    ],
    errorElement: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Error />
      </React.Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Login />
      </React.Suspense>
    ),
    errorElement: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Error />
      </React.Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
