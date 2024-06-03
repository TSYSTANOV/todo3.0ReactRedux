import React, { useRef } from "react";
import { MyButton } from "../UI/Button/MyButton";
import { NavLink } from "react-router-dom";
function PostItem({ id, title, body, removePost, lastElem, observerElem }) {
  return (
    <div className="post" ref={lastElem ? observerElem : null}>
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>
          {title} - {body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton>
          <NavLink to={`${id}`}>Open</NavLink>
        </MyButton>
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
