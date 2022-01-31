import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

export default function Post() {
  let { postSlug } = useParams();

  const [titles, setTitles] = useState([]);
  axios({
    method: "GET",
    url: `https://www.reddit.com/r/holdmybeer/${postSlug}.json`,
  }).then((res) => {
    console.log(res.data[0].data.children[0].data.title);
    let resOne = res.data;

    // let resTwo = resOne.data.children.map((b) => b.data);
    let a = resOne.map((a) => a.data.children);
    let b = [...a.map((b) => b)];
    let c = [...new Set(...b)];
    setTitles(...c.map((c) => c.data));
    //  console.log(...resOne);
  });

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);
  console.log(titles.title);
  // console.log(titles.map((b) => b.data.children).map((c) => c.data.title));
  return (
    <div>
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
                Posted by {titles.author} created at: {titles.created_utc}
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                {titles.title}
              </Typography>

              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {titles.num_comments} Comments
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
