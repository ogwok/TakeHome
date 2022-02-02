import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Layout = () => {
  return (
    <Stack>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reddit Challenge
          </Typography>
          <Button size="small" color="inherit">
            version 1
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: 150,
          width: "100%",
          bgcolor: "primary.main",
          marginBottom: "-3.8em",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="white"
            component="div"
            gutterBottom
            sx={{ mt: 0.7, textAlign: "center" }}
          >
            Hold My Bear
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Stack>
  );
};

export default Layout;
