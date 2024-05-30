import { useState } from "react";

function Counter() {
  const [likes, setLikes] = useState(0);

  function handleClick(param) {
    if (param === "up") {
      setLikes((prev) => {
        return prev + 1;
      });
    } else {
      setLikes((prev) => {
        return prev - 1;
      });
    }
  }
  return (
    <div>
      <h1>{likes}</h1>
      <button
        onClick={() => {
          handleClick("up");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleClick("down");
        }}
      >
        Deccrement
      </button>
    </div>
  );
}
export { Counter };
