import React from "react";

const CommentDetail = ({ author, timeAgo, text, authorImg }) => {
  return (
    <>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={authorImg} alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{timeAgo}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </>
  );
};

export default CommentDetail;
