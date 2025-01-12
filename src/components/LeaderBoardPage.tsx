import { useEffect } from "react";
//
import Leaderboard from "./LeaderBoard";
import useLeaderboardStore from "@/store/leaderboardstore";

const LeaderBoardPage = () => {
  const { leaderboard, fetchLeaderboard, isLoading, error } = useLeaderboardStore();
  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
