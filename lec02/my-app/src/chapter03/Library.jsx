import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="python" numOfPage={300}></Book>
      <Book name="React" numOfPage={400}></Book>
      <Book name="AWS" numOfPage={500}></Book>
    </div>
  );
}

export default Library;
