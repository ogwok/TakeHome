import React, { useState, useRef, useCallback } from "react";
import usePostSearch from "./RedditHook";
import CardComp from "./CardComp";

export default function RedditRender({ type1 }) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { data, hasMore, loading, error } = usePostSearch(
    query,
    pageNumber,
    type1
  );

  let tempholder = data.map((b) => b.data);
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

  return (
    <>
      {tempholder.map((data, index) => {
        if (data.title.length === index + 1) {
          return (
            <div ref={lastElementRef} key={data.title}>
              {data.title}
            </div>
          );
        } else {
          return (
            <div>
              <CardComp
                title={data.title}
                author={data.author}
                time={data.created_utc}
                comment={data.num_comments}
                id={data.id}
                ups={data.ups}
                downs={data.downs}
                imageurl={data.thumbnail}
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
