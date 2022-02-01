import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import timestamp from "unix-timestamp";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./features/posts/posts.slice";

export default function Post() {
  let { postSlug } = useParams();
  const [data, setData] = useState([]);
  const post = useSelector(({ posts }) => posts?.post.data);
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(getPost(postSlug));
  }, []);

  return (
    <div>
      <Card sx={{ minWidth: 275, mt: 7, mb: 7 }}>
        {post ? (
          <CardContent>
            <Stack direction="row">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <ArrowUpwardOutlinedIcon />
                54
                <ArrowDownwardOutlinedIcon />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Posted by {post.author} created at: {post.created_utc}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  {post.title}
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {post.num_comments} Comments
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        ) : (
          <div />
        )}
      </Card>
    </div>
  );
}
