import { useEffect, useMemo, useRef, useState } from "react";
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
import { MySelect } from "../UI/Select/MySelect";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const [getFetchPosts, isLoading, postError] = useFetching(fetchPosts);
  const [loadMore, setLoadMore] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const observerElem = useRef();

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
  }, [page, limit]);
  async function fetchPosts() {
    const posts = await PostService.getAllPosts(limit, page);
    if (loadMore) {
      setPosts((prev) => {
        return [...prev, ...posts.data];
      });
      setLoadMore(false);
    } else {
      setPosts(posts.data);
    }
    const totalCount = posts.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  }
  const removePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };
  const SortedAndSearchPosts = usePosts(posts, filter.sort, filter.search);
  useEffect(() => {
    if (isLoading) return;

    if (observerElem.current) {
      let observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            console.log("loadMore");
            setLoadMore(true);
            setPage(page + 1);
            observer.unobserve(observerElem.current);
          }
        },
        { rootMargin: "0px" }
      );

      observer.observe(observerElem.current);
    }
  }, [isLoading]);
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
      <MySelect
        value={limit}
        onChange={(param) => {
          setLimit(param);
        }}
        defaultValue={"set Limit"}
        option={[
          { name: "5", value: 5 },
          { name: "10", value: 10 },
          { name: "15", value: 15 },
          { name: "Show all", value: -1 },
        ]}
      />
      {postError ? (
        <h2>Some error...</h2>
      ) : (
        <PostList
          loadMore={loadMore}
          observerElem={observerElem}
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
