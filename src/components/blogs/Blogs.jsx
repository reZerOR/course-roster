import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmarks, handleAddTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="w-2/3">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmarks={handleAddToBookmarks}
            handleAddTime={handleAddTime}
          ></Blog>
        ))}
      </div>
    </>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleAddTime: PropTypes.func,
};

export default Blogs;
