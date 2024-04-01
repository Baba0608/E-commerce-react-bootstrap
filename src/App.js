import ReactDOM from "react-dom/client";

import { Button } from "react-bootstrap";

import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Header } from "./components/layout/Header.js";

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
