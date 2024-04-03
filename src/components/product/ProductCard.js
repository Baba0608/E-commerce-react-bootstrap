import { Card, Button } from "react-bootstrap";

export const ProductCard = ({ product }) => {
  const { title, imageUrl, price } = product;
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
          <Button variant="primary">Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
