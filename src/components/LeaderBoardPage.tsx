import { LeaderboardEntry } from "@/types";
import { useState } from "react";
import Leaderboard from "./LeaderBoard";

const LeaderBoardPage = () => {
  const [leaderboard] = useState<LeaderboardEntry[]>([
    { name: "John Doe", score: 30 },
    { name: "Jane Doe", score: 40 },
    { name: "Alice", score: 20 },
    { name: "Bob", score: 25 },
  ]);

  return (
    <div className="mt-4">
      <h2 className="text-gray-400 font-bold text-lg text-center">Leaderboard</h2>
      <div className="h-screen">
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default LeaderBoardPage;
