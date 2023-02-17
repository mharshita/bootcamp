import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Member from "./components/Member";
// import SearchMember from "./components/SearchMember";
import Home from "./components/Home";
import Profile from "./components/Profile";

const AboutUs = lazy(() => import("./components/AboutUs"));
const SearchMember = lazy(() => import("./components/SearchMember"));

const App = () => {
  return (
    <div id="heading" className="title">
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/member/:id",
        element: <Member />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <SearchMember />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile name={"Harshita"} />,
          },
        ],
      },
    ],
  },
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<RouterProvider router={appRouter} />);
