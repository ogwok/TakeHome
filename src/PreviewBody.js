import { Box, Radio, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function PreviewBody() {
  return (
    <>
      <Stack direction="row" spacing={0}>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 5,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        ></Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 22.9,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        >
          item
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 22,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        >
          <Radio
            checked={false}
            value="a"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
          />
        </Box>
      </Stack>
    </>
  );
}
