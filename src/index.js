//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
//Create a react component

const App = function () {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Steven"
          timeAgo="Today at 4:45PM"
          text="I did not like this :("
          authorImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          text="This was lit"
          authorImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Michael"
          timeAgo="Yesterday at 1:00PM"
          text="Nice post dude!"
          authorImg={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
