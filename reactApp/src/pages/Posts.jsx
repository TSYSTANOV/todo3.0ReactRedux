import { useEffect, useMemo, useState } from "react";
import "../App.css";
import { PostList } from "../Components/PostList";
import { PostForm } from "../Components/PostForm";
import { PostFilter } from "../Components/PostFilter";
import { MyModal } from "../Components/MyModal";
import { MyButton } from "../UI/Button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/getPagesCount";
import { Pagination } from "../UI/Pagination/Pagination";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [getFetchPosts, isLoading, postError] = useFetching(fetchPosts);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const pagesArray = useMemo(() => {
    function getPagesArray() {
      let pagesArray = [];
      for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
      }
      return pagesArray;
    }
    return getPagesArray();
  }, [totalPages]);

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setVisible(false);
  };
  useEffect(() => {
    getFetchPosts();
  }, [page]);
  async function fetchPosts() {
    const posts = await PostService.getAllPosts(limit, page);
    setPosts(posts.data);
    const totalCount = posts.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  }
  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };
  const SortedAndSearchPosts = usePosts(posts, filter.sort, filter.search);

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
      {postError ? (
        <h2>Some error...</h2>
      ) : (
        <PostList
          posts={SortedAndSearchPosts}
          title={"Posts Javascript List"}
          removePost={removePost}
          loading={isLoading}
        />
      )}
      {!isLoading && !postError && (
        <Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export { Posts };
