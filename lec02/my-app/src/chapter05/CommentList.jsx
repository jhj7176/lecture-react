import React from "react";
import Comment from "./Comment";

const comments = [
  { name: "test1", comment: "test2" },
  { name: "test002", comment: "test2340t1324t" },
  { name: "test003", comment: "TEST" },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
