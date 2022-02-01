import React, { useMemo } from "react";
import CardComp from "./redditCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./features/posts/posts.slice";

export default function RedditRender({ type1 }) {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.posts.data);

  useMemo(() => {
    dispatch(getPosts({ postType: "new", params: { limit: 50 } }));
  }, [dispatch]);

  return (
    <>
      <div>
        {posts?.children &&
          posts.children.map((temp) => (
            <CardComp
              title={temp.data.title}
              author={temp.data.author}
              time={temp.data.created_utc}
              comment={temp.data.num_comments}
              id={temp.data.id}
              ups={temp.data.ups}
              downs={temp.data.downs}
              imageurl={temp.data.thumbnail}
            />
          ))}
      </div>
    </>
  );
}
