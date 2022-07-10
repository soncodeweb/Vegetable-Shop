import React from "react";
import "../../style/blog/blog.scss";
function Blog() {
  return (
    <div className="list">
      <img src="https://easyfreshmarket.com/image/cache/catalog/blog/blog1-350x270.jpg" alt="" />
      <div className="item">
        <div className="category">
          <span className="sortDesc">sortDesc</span>
        </div>
        <h2 className="title">
          <span className="name">Celebrity Daughter Opens Up About Having Her Eye Color Changed</span>
        </h2>
      </div>
      <div className="time">18/01/2019 | Plaza Themes </div>
    </div>
  );
}

export default Blog;
