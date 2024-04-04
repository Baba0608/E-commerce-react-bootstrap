import { Card, Button } from "react-bootstrap";
import { cartContext } from "../../context/CartContextProvider";
import { useContext } from "react";

export const ProductCard = ({ product }) => {
  const { title, imageUrl, price } = product;
  const { cartItems, setCartItems, cartCount, setCartCount } =
    useContext(cartContext);

  const inCart = () => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].title === title) return true;
    }
    return false;
  };

  return (
    <Card style={{ width: "18rem" }} className="mx-5 my-3">
      <Card.Img variant="top" src={imageUrl} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          This is the example image with color to demonstrate how the color
          looks like.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text style={{ fontSize: "20px" }}>{price} /-</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              if (inCart()) return;
              setCartItems([
                ...cartItems,
                { title: title, price: price, quantity: 1 },
              ]);
              setCartCount(+cartCount + 1);
            }}
          >
            Add To Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
