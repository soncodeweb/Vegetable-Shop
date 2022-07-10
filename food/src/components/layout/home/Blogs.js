import React from "react";
import "../../style/home/blog.scss";
// import Blog from "../blog/Blog";
import ListBlog from "../blog/ListBlog";
const Blogs = () => {
  return (
    <div className="from-our-blog-wrap">
      <div className="container">
        <div className="title-from-our-blog">
          <h2>From Our Blog</h2>
          <h6>Our recent articles about Organic</h6>
        </div>
        <div className="content-from-our-blog">
          <ListBlog></ListBlog>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
