import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="bg-white p-4 m-4 rounded-xl">
      <h1 className="text-xl font-bold">{title} </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
