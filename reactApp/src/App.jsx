import { useMemo, useRef, useState } from "react";
import "./App.css";
import { PostList } from "./Components/PostList";
import { PostForm } from "./Components/PostForm";
import { PostFilter } from "./Components/PostFilter";
import { MyModal } from "./Components/MyModal";
import { MyButton } from "./UI/Button/MyButton";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "description" },
    { id: 2, title: "Css", body: "description" },
    { id: 3, title: "HTML", body: "description" },
  ]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  function getSortedPost() {
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        return a[filter.sort].localeCompare(b[filter.sort]);
      });
    } else {
      return posts;
    }
  }

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setVisible(false);
  };
  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };
  const SortedPost = useMemo(() => {
    return getSortedPost();
  }, [filter.sort, posts]);

  const SortedAndSearchPosts = useMemo(() => {
    return SortedPost.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(filter.search.toLocaleLowerCase());
    });
  }, [filter.search, SortedPost]);

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "30px" }}
        onClick={() => {
          setVisible(true);
        }}
      >
        Create Post
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm addNewPost={addNewPost} />
      </MyModal>
      <hr />
      <PostFilter setFilter={setFilter} filter={filter} />
      <PostList
        posts={SortedAndSearchPosts}
        title={"Posts Javascript List"}
        removePost={removePost}
      />
    </div>
  );
}

export default App;
