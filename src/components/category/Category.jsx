import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

const Category = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <Fragment>
      <Link to={route} className="directory-item-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default Category;
