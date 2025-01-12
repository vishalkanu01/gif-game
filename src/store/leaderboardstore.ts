import { create } from "zustand";
//
import { LeaderboardEntry } from "@/types";

const endPoint = import.meta.env.VITE_LAMBDA_ENDPOINT;

interface LeaderboardStore {
  leaderboard: LeaderboardEntry[];
  isLoading: boolean;
  error: string | null;
  message: string | null;
  fetchLeaderboard: () => Promise<void>;
  addEntry: (entry: LeaderboardEntry) => Promise<void>;
}

const useLeaderboardStore = create<LeaderboardStore>((set) => ({
  leaderboard: [],
  isLoading: false,
  error: null,
  message: null,

  fetchLeaderboard: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await fetch(endPoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch leaderboard");
      }

      const data = await response.json();
      set({
        leaderboard: data.leaderboard,
        message: data.message,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
      set({ error: "Failed to fetch leaderboard data", isLoading: false });
    }
  },

  addEntry: async (entry) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entry }),
      });

      if (!response.ok) {
        throw new Error("Failed to update leaderboard");
      }

      const data = await response.json();

      set({
        leaderboard: data.updatedLeaderboard,
        message: data.message,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
      set({ error: "Failed to update leaderboard", isLoading: false });
    }
  },
}));

export default useLeaderboardStore;
