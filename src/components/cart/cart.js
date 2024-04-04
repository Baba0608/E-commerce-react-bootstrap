import { Offcanvas } from "react-bootstrap";
import { CartCard } from "./CartCard";
import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const Cart = ({ handlers, show }) => {
  const { closeCart } = handlers;
  const { cartItems, totalAmount } = useContext(cartContext);
  return (
    <>
      <Offcanvas show={show} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between border-bottom border-dark mb-2">
            <div className="p-1 w-50 text-center">ITEM</div>
            <div className="p-1 w-50 text-center">PRICE</div>
            <div className="p-1 w-50 text-center">QUANTITY</div>
          </div>
          {cartItems.map((item) => (
            <CartCard cartItem={item} key={item.title} />
          ))}

          <div className="d-flex justify-content-end">
            <div>Total Amount : {totalAmount} /-</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
