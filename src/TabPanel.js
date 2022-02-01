import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RedditRender from "./RedditRender";
import Container from "@mui/material/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Typography variant="h4" component="div" gutterBottom sx={{ mt: 0.7 }}>
          Reddit
        </Typography>
        <Box
          sx={{ width: "100%", bgcolor: "#DAE0E6", mt: 1.7, height: "auto" }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Hot" {...a11yProps(0)} />
              <Tab label="New" {...a11yProps(1)} />
              <Tab label="Top" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <RedditRender type1="new" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RedditRender type1="new" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <RedditRender type1="new" />
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
