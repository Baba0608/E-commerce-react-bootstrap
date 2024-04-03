import { ProductCard } from "./ProductCard";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl:
      "https://tse4.mm.bing.net/th?id=OIP.lick4URoh8ZIUNs0chmxXAHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.WrkCn142jOnihCzRcx1r9QHaFP&pid=Api&P=0&h=180",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIP.h2wTijLuEyXotRBFqwjrvAHaEo&pid=Api&P=0&h=180",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

export const ProductContainer = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-2 mx-md-5">
      {productsArr.map((product) => (
        <ProductCard product={product} key={product.title} />
      ))}
    </div>
  );
};
