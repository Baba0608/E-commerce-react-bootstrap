import { Offcanvas } from "react-bootstrap";
import { CartCard } from "./CartCard";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export const Cart = ({ handlers, show }) => {
  const { closeCart } = handlers;
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
          {cartElements.map((item) => (
            <CartCard cartItem={item} key={item.title} />
          ))}

          <div className="d-flex justify-content-end">
            <div>Total Amount : {220} /-</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
