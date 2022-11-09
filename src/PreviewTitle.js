import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function PreviewTitle() {
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
            pr: 26.7,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        ></Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 27.3,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        ></Box>
      </Stack>
    </>
  );
}
