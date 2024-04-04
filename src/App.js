import ReactDOM from "react-dom/client";

import { Button } from "react-bootstrap";

import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Header } from "./components/layout/Header.js";
import { Main } from "./components/layout/Main.js";
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/CartContextProvider.js";
import { About } from "./components/layout/About.js";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
