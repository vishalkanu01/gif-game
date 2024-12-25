import React from "react";

interface LeaderboardEntry {
  name: string;
  score: number;
}

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      {leaderboard.map((entry, index) => (
        <p key={index} className="leaderboard-entry">
          {index + 1}. {entry.name} - {entry.score} seconds
        </p>
      ))}
    </div>
  );
};

export default Leaderboard;
