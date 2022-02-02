import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import PostCard from "./features/posts/Post.card";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./features/posts/RedditPanel";
import Layout from "./layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a3744",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/posts/:postSlug" element={<PostCard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
