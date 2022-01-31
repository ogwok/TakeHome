import React, { useState, useRef, useCallback } from "react";
// import useBookSearch from "./RedditHook";
import useBookSearch from "./TestEnv";
import CardComp from "./CardComp";

export default function Book({ type1 }) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { titles, hasMore, loading, error, author } = useBookSearch(
    query,
    pageNumber,
    type1
  );

  let tempholder = titles.map((b) => b.data);
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      {tempholder.map((title, index) => {
        if (title.title.length === index + 1) {
          return (
            <div ref={lastElementRef} key={title.title}>
              {title.title}
            </div>
          );
        } else {
          return (
            <div>
              <CardComp
                title={title.title}
                author={title.author}
                time={title.created_utc}
                comment={title.num_comments}
                id={title.id}
              />
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
