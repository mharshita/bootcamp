import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Member from "./components/Member";
import SearchMember from "./components/SearchMember";
import Home from "./components/Home";

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
        element: <SearchMember />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<RouterProvider router={appRouter} />);
