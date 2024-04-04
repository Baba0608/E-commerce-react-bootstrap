import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { cartContext } from "../../context/CartContextProvider";

export const Header = ({ handlers }) => {
  const { openCart } = handlers;
  const { cartCount } = useContext(cartContext);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="justify-content-between px-4 fs-5"
      style={{ position: "sticky" }}
      fixed="top"
    >
      <Nav>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Store</Nav.Link>
        <Nav.Link>About</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className="bg-blue" onClick={openCart}>
          Cart {cartCount}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
