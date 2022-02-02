import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./posts.slice";
import InfiniteScroll from "react-infinite-scroll-component";
import RedditCard from "./RedditCard";

export default function RedditRender({ type }) {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts[type].data);
  console.log(posts);
  useMemo(() => {
    dispatch(getPosts({ postType: type, params: { limit: 50 } }));
  }, [dispatch, type]);

  return (
    <>
      <InfiniteScroll
        dataLength={50}
        next={() =>
          dispatch(
            getPosts({
              postType: type,
              params: { limit: 50, after: posts.after },
            })
          )
        }
        height={"80vh"}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts?.children &&
          posts.children.map((temp, i) => (
            <RedditCard key={i} data={temp.data} />
          ))}
      </InfiniteScroll>
    </>
  );
}
