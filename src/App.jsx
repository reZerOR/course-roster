import Header from "./components/header/Header";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);

  const handleAddTime = (time) => {
    const newTime = readtime + time;
    setReadtime(newTime);
  };

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-6">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmarks time={readtime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
