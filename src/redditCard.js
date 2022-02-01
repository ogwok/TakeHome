import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Voting from "./features/voting/Voting";

export default function RedditCard({
  title,
  author,
  time,
  comment,
  id,
  ups,
  imageurl,
}) {
  return (
    <Card sx={{ maxWidth: "100%", mt: 7, mb: 7 }}>
      <CardContent>
        <Stack direction="row">
          <Voting postId={id} votes={ups} />
          <Link to={`posts/${id}`}>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Posted by {author} created at: {time}
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                {title}
              </Typography>
              <img src={imageurl} width="100%" height="300x" alt="" />
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {comment} Comments
              </Typography>
            </Box>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
