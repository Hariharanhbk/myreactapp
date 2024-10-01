import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Product from "./Product";
// import Card from "./Card.css";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  return (
    <>
      <h1 className="text-center mb-3">List of Products</h1>
      <div className="container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default ProductList;
