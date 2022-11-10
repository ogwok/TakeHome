import { Button, TextField, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOptions, addOptionsValues } from "./store/slices/surveySlice";
import Title from "./Title";

export default function Options() {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  const addQuestions = () => {
    let questions2 = [...questions];
    let item = { value: "", id: Math.random(0.5), checked: false };
    questions2.push(item);
    setQuestions(questions2);
    dispatch(addOptions(item));
  };

  const handleChange = (event, id) => {
    let index = questions.findIndex((obj) => obj.id === id);
    console.log("Helo", event.target.value);
    dispatch(
      addOptionsValues({
        value: event.target.value,
        optionId: id,
      })
    );
  };

  console.log("Questions ==>", questions);
  return (
    <div>
      <Title />
      {questions.map(({ value, id }) => (
        <div key={id}>
          <Box>
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
                  pr: 1,
                  pl: 1,
                  pt: 1,
                  pb: 1,
                }}
              >
                <TextField
                  onChange={(event) => handleChange(event, id)}
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  border: 1,
                  borderColor: "#DDD",
                  pr: 1,
                  pl: 1,
                  pt: 1,
                  pb: 1,
                }}
              >
                <TextField
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  border: 1,
                  borderColor: "#DDD",
                  pr: 6,
                  pl: 1,
                  pt: 1,
                  pb: 1,
                }}
              ></Box>
            </Stack>
          </Box>
        </div>
      ))}

      <Button variant="contained" sx={{ mt: 2 }} onClick={addQuestions}>
        Add Options
      </Button>
    </div>
  );
}
