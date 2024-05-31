import { Loader } from "../UI/Loader/Loader";
import { PostItem } from "./PostItem";

function PostList({ posts, title, removePost, loading }) {
  if (!posts.length && !loading) {
    return <h2 style={{ textAlign: "center" }}>Posts are not found</h2>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((item) => {
        return <PostItem key={item.id} {...item} removePost={removePost} />;
      })}
    </div>
  );
}
export { PostList };
