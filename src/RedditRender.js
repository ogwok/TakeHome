import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "./RedditHook";

export default function Book({ type1 }) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { titles, hasMore, loading, error } = useBookSearch(
    query,
    pageNumber,
    type1
  );

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
      {titles.map((title, index) => {
        if (titles.length === index + 1) {
          return (
            <div ref={lastElementRef} key={title}>
              {title}
            </div>
          );
        } else {
          return (
            <div>
              <div key={title}>{title}</div>
            </div>
          );
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
