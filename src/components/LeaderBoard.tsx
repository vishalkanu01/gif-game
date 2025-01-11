import { LeaderboardEntry } from "@/types";

const Leaderboard = ({ leaderboard }: { leaderboard: LeaderboardEntry[] }) => {
  return (
    <div className="max-w-2xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-md">
      {leaderboard
        .sort((a, b) => a.score - b.score) // Sort leaderboard by score (lower is better)
        .map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b last:border-none hover:bg-gray-100">
            <div className="flex items-center">
              <div className="text-lg font-bold text-gray-700">{index + 1}.</div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{entry.name}</h3>
              </div>
            </div>
            <div className="text-sm text-gray-600">{entry.score} seconds</div>
          </div>
        ))}
    </div>
  );
};

export default Leaderboard;
