import React, { useRef } from "react";
import { MyButton } from "../UI/Button/MyButton";
import { NavLink } from "react-router-dom";
function PostItem({ id, title, body, removePost }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>
          {title} - {body}
        </div>
      </div>
      <div className="post__btns">
        <NavLink to="parapet">to</NavLink>
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
