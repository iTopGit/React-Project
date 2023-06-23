import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;
  console.log(points)
  return (
    <ul className="GameStats GameStats__right">
      <li className="stat">Level</li>
      <li className="value stat">{level}</li>
      <li className="stat">Lines to level</li>
      <li className="value stat">{linesToLevel}</li>
      <li className="stat">Points</li>
      <li className="value stat">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);