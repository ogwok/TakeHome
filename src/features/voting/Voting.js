import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch} from "react-redux";
import { downVote, upVote } from "./voting.slice";

const Voting = ({ postId, votes }) => {
  const dispatch = useDispatch();
  // const voted = useSelector(({voting}=>voting))
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="text"
    >
      <IconButton onClick={() => dispatch(upVote(postId))}>
        <ExpandLessRounded />
      </IconButton>
      <Button>{votes}</Button>
      <IconButton onClick={() => dispatch(downVote(postId))}>
        <ExpandMoreRounded />
      </IconButton>
    </ButtonGroup>
  );
};

export default Voting;
