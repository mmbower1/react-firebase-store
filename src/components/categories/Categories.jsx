import React from "react";
import "./categories.styles.scss";

// components
import Category from "../category/Category";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl:
      "https://www.shopcapcity.com/cdn/shop/files/IMG_1178_3c2b93fc-6471-4557-bec3-e30ba65769bf.jpg?v=1724520387&width=3840",
  },
  {
    id: 2,
    title: "Rings",
    imageUrl: "https://i.ebayimg.com/images/g/rRAAAeSw6u9ovGAA/s-l400.jpg",
  },
  {
    id: 3,
    title: "Jerseys",
    imageUrl:
      "https://platform.bleedinggreennation.com/wp-content/uploads/sites/36/chorus/uploads/chorus_asset/file/10462211/usa_today_9854614.jpg?quality=90&strip=all&crop=4.4756355932203%2C28.394625176803%2C91.048728813559%2C71.605374823197&w=1200",
  },
  {
    id: 4,
    title: "Jackets &Hoodies",
    imageUrl:
      "https://www.jacketsjunction.com/wp-content/uploads/2025/03/Starter-Eagles-Jacket-Black.webp",
  },
  {
    id: 5,
    title: "Accessories",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-7sdwsvr4nj/images/stencil/1280x1280/products/9059/43559/0454619_WN_Garden_Main__25692.1749808687.jpg?c=1",
  },
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
