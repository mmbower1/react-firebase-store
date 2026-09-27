import React, { useContext, useState } from "react";
import "./ProductCard.styles.scss";

// components
import Button from "../button/Button";

// contexts
import { CartContext } from "../../contexts/Cart";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, size = [] } = product;
  const sizes = size.filter((s) => s !== "");
  const [selectSize, setSelectSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    if (sizes.length > 0 && !selectSize) {
      setSizeError(true);
      return;
    }
    addItemToCart({ ...product, size: sizes.length > 0 ? selectSize : null });
  };

  const handleSizeClick = (sizeValue) => {
    setSelectSize(sizeValue);
    setSizeError(false);
  };

  return (
    <div className="product-card-container">
      <div className="product-card-image">
        <img src={imageUrl} alt={`${name}`} />
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
      <div className="product-card-footer">
        <div className="product-card-info">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        {sizes.length > 0 && (
          <div className="sizes">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`size-btn ${selectSize === s ? "selected" : ""}`}
                onClick={() => handleSizeClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {sizeError && <span className="size-error">Please select a size</span>}
      </div>
    </div>
  );
};

export default ProductCard;
