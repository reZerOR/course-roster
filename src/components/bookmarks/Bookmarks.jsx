import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";
const Bookmarks = ({ bookmarks, time }) => {
  console.log(bookmarks);
  return (
    <div className="w-1/3  ml-2">
      <div className="text-center text-2xl font-bold text-purple-700 border-2 border-purple-700 p-4 bg-purple-700 bg-opacity-20 rounded-lg mb-4">
        <h1>Reading Time: {time} min</h1>
      </div>
      <div className="bg-slate-300 py-4 rounded-lg">
        <h3 className="text-3xl font-bold text-center">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  time: PropTypes.number,
};
export default Bookmarks;
