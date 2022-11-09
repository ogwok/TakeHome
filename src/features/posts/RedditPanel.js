import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Survey from "../../Survey";
import Front from "../../Front";

const RedditPanel = () => {
  return (
    <Container sx={{ px: 5 }} maxWidth="false">
      <Box
        sx={{
          width: "100%",
          bgcolor: "#F0F0F0",
          mt: 7.7,
          height: "auto",
          padding: 2,
        }}
      >
        <Front />
      </Box>
    </Container>
  );
};

export default RedditPanel;
