import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import axios from "axios";

const PostCard = () => {
  let { postSlug } = useParams();

  const [data, setData] = useState([]);
  axios({
    method: "GET",
    url: `https://www.reddit.com/r/holdmybeer/${postSlug}.json`,
  }).then((res) => {
    
  });

  return (
    <Card sx={{ minWidth: 275, mt: 7, mb: 7 }}>
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
              Posted by {data.author} created at: {data.created_utc}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {data.title}
            </Typography>

            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.num_comments} Comments
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PostCard;
