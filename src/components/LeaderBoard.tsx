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
    <div>
      {leaderboard.map((entry, index) => (
        <div key={index} className="mx-5 text-[#4a5568] text-md m-4">
          {index + 1}. {entry.name} - {entry.score} seconds
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
