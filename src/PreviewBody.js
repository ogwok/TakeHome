import { Box, Radio, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addRadioValues } from "./store/slices/surveySlice";

export default function PreviewBody({ value, options, questionsId, checked }) {
  const [checked2, setChecked] = useState([]);

  const handleChange = (id) => {
    let arr2 = [...checked2];
    arr2.push({ checked: true, id: id });
    setChecked(arr2);
  };

  const handleChecked = (id) => {
    let index = checked2.findIndex((obj) => obj.id === id);
    let chec = checked2[index];
    if (chec) {
      return chec.checked;
    }
  };

  console.log("review body", checked2);

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
            width: 224,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        >
          {value}
        </Box>
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
              {console.log("handle checked", handleChecked(id))}
              <Radio
                onClick={() => handleChange(id)}
                checked={handleChecked(id) || false}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </Box>
          </div>
        ))}
      </Stack>
    </>
  );
}
