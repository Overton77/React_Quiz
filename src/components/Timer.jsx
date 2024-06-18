import React, { useEffect, useState } from "react";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export default function Timer({ dispatch, secondsRemaining }) {
  const [formattedTime, setFormattedTime] = useState(
    formatTime(secondsRemaining)
  );
  useEffect(() => {
    if (secondsRemaining <= 0) {
      dispatch({ type: "finish" });
    }

    setFormattedTime(formatTime(secondsRemaining));

    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, dispatch]);

  return <div className="timer">{formattedTime}</div>;
}
