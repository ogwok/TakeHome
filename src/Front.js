import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextField, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import PreviewTitle from "./PreviewTitle";
import PreviewBody from "./PreviewBody";
import Survey from "./Survey";
import Review from "./Review";
import Options from "./Options";

export default function Front() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", flexGrow: 1 }}>
      <Typography variant="h6" component="h2">
        Survey Component
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={8} md={6}>
          {" "}
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Display" value="1" />
                <Tab label="Data" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ bgcolor: "#fff" }}>
              <TextField
                required
                id="outlined-required"
                label="Label"
                defaultValue="Survey"
              />
            </TabPanel>
            <TabPanel value="2" sx={{ bgcolor: "#fff" }}>
              Questions
              <Survey />
              Options
              <Options />
            </TabPanel>
          </TabContext>
        </Grid>

        {/* Preview Component */}
        <Grid item xs={8} md={6}>
          <Review />
        </Grid>
      </Grid>
    </Box>
  );
}
