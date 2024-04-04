import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { Cart } from "../cart/cart";
import { ProductContainer } from "../product/ProductContainer";

export const Main = () => {
  return (
    <>
      <div className="fs-1 bg-secondary p-4 text-center">The Generics</div>
      <ProductContainer />
      <Cart />
    </>
  );
};
