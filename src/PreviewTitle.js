import { Box, Radio } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

export default function PreviewTitle() {
  const options = useSelector((state) => state.survey.options);
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
        {options.map(({ value, id }) => (
          <div key={id}>
            <Box
              sx={{
                border: 1,
                borderColor: "#DDD",
                width: 100,
                pl: 1,
                pt: 1,
                pb: 1,
              }}
            >
              {value}
            </Box>
          </div>
        ))}
      </Stack>
    </>
  );
}
