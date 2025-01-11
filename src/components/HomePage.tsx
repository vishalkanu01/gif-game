import React, { useState } from "react";
import Confetti from "react-confetti";
//
import MagnifyingGlassIcon from "@/assets/MaginifyingGlassIcon";
import "../App.css";
import GameBoard from "./GameBoard";
import Leaderboard from "./LeaderBoard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GifResponse, LeaderboardEntry } from "@/types";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const suggestionItems = [
  { name: "Anime", value: "anime" },
  { name: "Flowers", value: "flowers" },
  { name: "Animals", value: "animals" },
  { name: "Dogs", value: "dogs" },
  { name: "Cats", value: "cats" },
  { name: "Cars", value: "cars" },
];

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [gifs, setGifs] = useState<{ id: string; url: string; title: string }[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [confetti, setConfetti] = useState(false);

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=8`
      );
      const data: GifResponse = await response.json();
      const formattedGifs = data.data.map((gif) => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
        title: gif.title,
      }));
      setGifs([...formattedGifs, ...formattedGifs].sort(() => Math.random() - 0.5));
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  const handleWin = (timeTaken: number) => {
    setGameWon(true);
    setTime(timeTaken);
    setConfetti(true);
  };

  const submitScore = (name: string, timeTaken: number) => {
    setConfetti(false);

    const newEntry: LeaderboardEntry = {
      name,

      score: timeTaken,
    };
    setLeaderboard(
      [...leaderboard, newEntry]
        .sort((a, b) => a.score - b.score) // Sort by time
        .slice(0, 10)
    );
    setGameWon(false);
    setGifs([]);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between w-full">
      {confetti && <Confetti className="w-full" />}
      {/* Game Won Section */}
      {gameWon && (
        <div className="flex flex-col items-center justify-center m-10">
          <h2 className="mt-4 text-xl font-bold text-center text-gray-400">Submit Your Score</h2>
          <form
            className="flex flex-col items-center justify-center w-full gap-4 mt-4 md:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get("name") as string;
              submitScore(name, time);
            }}>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 text-lg bg-white rounded-full md:w-1/3 focus:outline-none focus:ring focus:ring-red-400"
              style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.14)" }}
              placeholder="Name"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-400"
              onClick={() => setIsOpen(true)}>
              Submit
            </button>
          </form>
        </div>
      )}
      {!gifs.length ? (
        <div className="flex flex-col h-[80%]">
          {/* Search Input */}
          <div className="flex items-center justify-center w-full mt-20">
            <input
              type="text"
              className="w-full px-4 py-3 mx-6 text-lg bg-white rounded-full md:mx-0 md:w-1/3 focus:outline-none focus:ring focus:ring-red-400"
              style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.14)" }}
              placeholder="Search for GIFs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchGifs();
                }
              }}
            />
            <div className="relative">
              <button
                className="absolute -top-3 right-10 md:right-4 hover:text-gray-600"
                onClick={fetchGifs}>
                <MagnifyingGlassIcon className="fill-gray-400" />
              </button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-8 text-center text-gray-400 text-md">
            <p className="mb-2">Suggestions:</p>
            {suggestionItems.map((item) => (
              <button
                key={item.value}
                className="px-4 py-2 m-2 bg-white rounded-full hover:bg-gray-400 hover:text-white"
                style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.14)" }}
                onClick={() => setSearchTerm(item.value)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <GameBoard gifs={gifs} onWin={handleWin} />
      )}

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="p-6 bg-white rounded-lg"
          style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.14)" }}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Leaderboard</DialogTitle>
            <DialogDescription>
              <Leaderboard leaderboard={leaderboard} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
