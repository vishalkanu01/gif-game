import { useState } from "react";
//
import { LeaderboardEntry } from "@/types";
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
      <h2 className="text-2xl font-extrabold text-center text-gray-800">Leaderboard</h2>
      <div>
        <Leaderboard leaderboard={leaderboard} />
      </div>
    </div>
  );
};

export default LeaderBoardPage;
