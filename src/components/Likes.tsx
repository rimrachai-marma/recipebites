import { useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState(3);

  const handleClick = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="likes">
      <p>{likes} people have cooked this recipe.</p>
      <button onClick={handleClick}>I made this!</button>
    </div>
  );
};

export default Likes;
