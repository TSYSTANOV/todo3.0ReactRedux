import { useState } from "react";
import { MyButton } from "../UI/Button/MyButton";
import { MyInput } from "../UI/Input/MyInput";
function PostForm({ addNewPost }) {
  const [post, setPost] = useState({ title: "", body: "" });
  function addPost(e) {
    e.preventDefault();
    addNewPost({ ...post, id: Date.now() });
    setPost({ title: "", body: "" });
  }
  return (
    <form>
      <MyInput
        type="text"
        placeholder="Enter title post"
        value={post.title}
        onChange={(e) => {
          setPost((prev) => {
            return { ...prev, title: e.target.value };
          });
        }}
      />
      <MyInput
        type="text"
        placeholder="Enter description post"
        value={post.body}
        onChange={(e) => {
          setPost((prev) => {
            return { ...prev, body: e.target.value };
          });
        }}
      />
      <MyButton onClick={addPost}>Create post</MyButton>
    </form>
  );
}
export { PostForm };
