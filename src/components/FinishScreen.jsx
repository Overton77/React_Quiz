function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.floor((points / maxPossiblePoints) * 100);

  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "🎃";
  if (percentage === 0) emoji = "👋🏻";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong> {points}</strong> out of{" "}
        {maxPossiblePoints}({percentage}%)
      </p>
      <p className="highscore">(HighScore: {highscore})</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
