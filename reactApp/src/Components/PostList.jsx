import { Loader } from "../UI/Loader/Loader";
import { PostItem } from "./PostItem";

function PostList({
  posts,
  title,
  removePost,
  loading,
  observerElem,
  loadMore,
}) {
  if (!posts.length && !loading) {
    return <h2 style={{ textAlign: "center" }}>Posts are not found</h2>;
  }

  if (loading && !loadMore) {
    return <Loader />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((item, i) => {
        return (
          <PostItem
            key={item.title}
            {...item}
            removePost={removePost}
            observerElem={observerElem}
            lastElem={i === posts.length - 1}
          />
        );
      })}
    </div>
  );
}
export { PostList };
