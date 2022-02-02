import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Voting from "../voting/Voting";
import { Avatar } from "@mui/material";
import { format } from "timeago.js";
import timestamp from "unix-timestamp";

export default function RedditCard({ data }) {
  return (
    <Card sx={{ maxWidth: "100%", my: 2, boxShadow: "none" }}>
      <CardContent>
        <Stack direction="row">
          <Voting postId={data.id} votes={data.ups} />
          <Link
            style={{ textDecoration: "none", color: "primary.main" }}
            to={`posts/${data.id}`}
          >
            <Stack direction="row">
              <Box sx={{ width: 210, height: 120, px: 3 }}>
                <img src={data.thumbnail} width="100%" height="100%" alt="" />
              </Box>
              <Box sx={{ px: 1 }}>
                <Stack sx={{ justifyContent: "space-between" }} direction="row">
                  <Stack sx={{ alignItems: "center", gap: 1 }} direction="row">
                    <Avatar sx={{ width: 24, height: 24 }} src="/" />
                    <Typography color="text.secondary" gutterBottom>
                      {data.author}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{ ml: "auto" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    created:
                    {format(timestamp.toDate(data.created_utc).toString())}
                  </Typography>
                </Stack>
                <Typography
                  variant="h5"
                  component="div"
                  color="text.secondary"
                  gutterBottom
                >
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
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}
