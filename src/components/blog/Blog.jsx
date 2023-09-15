import PropTypes from "prop-types";
import { FcBookmark } from "react-icons/fc";
const Blog = ({ blog, handleAddToBookmarks, handleAddTime }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 mt">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between mt-8 mb-4 items-center">
        <div className="flex gap-6">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p>{posted_date} </p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl ml-2"
          >
            <FcBookmark></FcBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-4xl leading-[64px] font-bold">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <a key={idx} href="">
            #{hash}
          </a>
        ))}
      </p>
      <button
        onClick={() => handleAddTime(reading_time)}
        className="text-purple-700 underline font-bold"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleAddTime: PropTypes.func,
};

export default Blog;
