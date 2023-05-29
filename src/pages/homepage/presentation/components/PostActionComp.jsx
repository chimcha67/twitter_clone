import React from "react";

const PostActionComp = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex text-[rgba(0,0,0,.3)] items-cente gap-2" 
    >
      <props.icon />
      <small>{props.count}</small>
    </button>
  );
};

export default PostActionComp;
