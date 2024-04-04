import { useState } from "react";

export const CartCard = ({ cartItem }) => {
  const { title, price, quantity } = cartItem;
  const [count, setCount] = useState(quantity);
  return (
    <>
      <div className="d-flex justify-content-between mb-2 border-bottom border-dark pb-2 align-items-center">
        <div className="w-50 text-center">{title}</div>
        <div className="w-50 text-center">{price}</div>
        <div className="d-flex justify-content-around w-50 text-center align-items-center">
          <div>
            <input
              value={count}
              className="w-75"
              onChange={(e) => {
                setCount(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-danger">REMOVE</button>
          </div>
        </div>
      </div>
    </>
  );
};
