import React, { useRef } from "react";
import { MyButton } from "../UI/Button/MyButton";
function PostItem({ id, title, body, number, removePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>
          {title} - {body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            removePost(id);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
}

export { PostItem };
