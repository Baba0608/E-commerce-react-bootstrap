import { Offcanvas } from "react-bootstrap";

export const Cart = ({ handlers, show }) => {
  const { closeCart } = handlers;
  return (
    <>
      <Offcanvas show={show} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
