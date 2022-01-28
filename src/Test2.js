import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Book from "./Book";

export default function Test2() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Book />
        </Box>
      </Container>
    </div>
  );
}
