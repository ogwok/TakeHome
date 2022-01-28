import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Test() {
  const [books, setBooks] = useState([]);

  axios({
    method: "GET",
    url: "https://www.reddit.com/r/holdmybeer/new.json",
    params: { limit: 10 },
  }).then((res) => {
    setBooks((prevBooks) => {
      //   console.log(res.data.data.children[1].data.title);
      console.log(res.data.data.children.map((b) => b.data.title));

      //   return [
      //     ...new Set([
      //       ...prevBooks,
      //       ...res.data.data.children.map((b) => b.data.title),
      //     ]),
      //   ];
    });
  });

  return <div></div>;
}
