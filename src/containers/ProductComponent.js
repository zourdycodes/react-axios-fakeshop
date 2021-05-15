import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/ProductComponent.css";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui stackable four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui grid container">
            <div className="ui link cards response">
              <div className="ui grid container card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
