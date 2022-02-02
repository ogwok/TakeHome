import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RedditRender from "./RedditRender";
import Container from "@mui/material/Container";
import { a11yProps, TabPanel } from "./TabParts";

const RedditPanel = () => {
  const [value, setValue] = React.useState(0);
  const types = ["hot", "new", "top"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ px: 5 }} maxWidth="lg">
      <Box sx={{ width: "100%", bgcolor: "#DAE0E6", mt: 1.7, height: "auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            {types.map((type, i) => (
              <Tab key={type} label={type} {...a11yProps(i)} />
            ))}
          </Tabs>
        </Box>
        {types.map((type, i) => (
          <TabPanel key={i} value={value} index={i}>
            <RedditRender type={type} />
          </TabPanel>
        ))}
      </Box>
    </Container>
  );
};

export default RedditPanel;
