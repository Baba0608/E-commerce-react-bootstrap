import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { cartContext } from "../../context/CartContextProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const { cartCount, openCart } = useContext(cartContext);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="justify-content-between px-4 fs-5"
      style={{ position: "sticky" }}
      fixed="top"
    >
      <Nav>
        <Nav.Link>
          <Link to={"/"}>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/store"}>Store</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/about"}>About</Link>
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className="bg-blue" onClick={openCart}>
          Cart {cartCount}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
