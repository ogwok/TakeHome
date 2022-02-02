import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./posts.slice";
import RedditCard from "./RedditCard";

const PostCard = () => {
  let { postSlug } = useParams();
  const post = useSelector(({ posts }) => posts?.post.data);
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(getPost(postSlug));
  }, [dispatch, postSlug]);

  return <div>{post && <RedditCard data={post} />}</div>;
};

export default PostCard;
