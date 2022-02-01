import React from "react";
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
import axios from "axios";

export default function CardComp({
  title,
  author,
  time,
  comment,
  id,
  ups,
  downs,
  imageurl,
}) {
  let PostLink = `/${id}`;

  const upVoted = () => {
    console.log("clicked voting clicked>>>>>>>>");
    var config = {
      method: "post",
      url: `https://oauth.reddit.com/api/vote?dir=1&id=t3_${id}`,
      headers: {
        Authorization: "Bearer 984688359278-0ZnN8KEWbdrLg1bTrC7EMZCZKjoA0w",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const downVoted = () => {
    console.log("clicked voting clicked>>>>>>>>");
    var config = {
      method: "post",
      url: `https://oauth.reddit.com/api/vote?dir=-1&id=t3_${id}`,
      headers: {
        Authorization: "Bearer 984688359278-0ZnN8KEWbdrLg1bTrC7EMZCZKjoA0w",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Card sx={{ maxWidth: "100%", mt: 7, mb: 7 }}>
        <CardContent>
          <Stack direction="row">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ArrowUpwardOutlinedIcon onClick={upVoted} />
              {ups}
              <ArrowDownwardOutlinedIcon onClick={downVoted} />
            </Box>
            <Link to={PostLink}>
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
                <img src={imageurl} width="100%" height="300x" />
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
    </div>
  );
}
