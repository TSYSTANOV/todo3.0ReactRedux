import { useRef } from "react";
import { PostItem } from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function PostList({ posts, title, removePost }) {
  const nodeRef = useRef(null);
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Posts are not found</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {posts.map((item, i) => {
        return (
          <PostItem
            key={item.id}
            number={i + 1}
            {...item}
            removePost={removePost}
          />
        );
      })}
    </div>
  );
}
export { PostList };
