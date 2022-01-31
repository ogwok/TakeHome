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

export default function CardComp({ title, author, time, comment, id }) {
  let PostLink = `/${id}`;

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
            <Link to={PostLink}>
              <Box>
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
