import React from 'react';
// import Card from "./Card.css"

function Product({ product }) {
  const { title, image, price, category, description, rating } = product;

  return (
    <div className="card">
      <img width={50} className="img" src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="price">${price.toFixed(2)}</p>
      {/* <p className="description">{description}</p> */}
      <p className="category">{category}</p>
      <div className="rating">
        <span>Rating: {rating.rate} ({rating.count} reviews)</span>
      </div>
    </div>
  );
}

export default Product;



