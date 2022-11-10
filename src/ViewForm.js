import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ViewForm() {
  const questions = useSelector((state) => state.survey.survey);
  const options = useSelector((state) => state.survey.options);

  return (
    <div>
      ViewForm
      <div>
        {/* {questions.map((item) => (
          <div key={item.id}>{item.value}</div>
        ))} */}
      </div>
    </div>
  );
}
