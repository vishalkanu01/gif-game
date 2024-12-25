import React, { useState } from "react";
import Confetti from "react-confetti";
//
import GameBoard from "./components/GameBoard";
import Leaderboard from "./components/LeaderBoard";
import { GifResponse, LeaderboardEntry } from "./types";
import "./App.css";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const App: React.FC = () => {
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

  const submitScore = (name: string, username: string, timeTaken: number) => {
    setConfetti(false);

    const newEntry: LeaderboardEntry = {
      name,
      username,
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

  return (
    <div className="app-container">
      {confetti && <Confetti />}
      {!gifs.length ? (
        <div className="start-screen">
          <h1>GIF Matching Game</h1>
          <input
            type="text"
            className="search-input"
            placeholder="Search for GIFs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="start-button" onClick={fetchGifs}>
            Start Game
          </button>
          <div className="suggestions">
            <p>Suggestions:</p>
            <button onClick={() => setSearchTerm("anime")}>Anime</button>
            <button onClick={() => setSearchTerm("flowers")}>Flowers</button>
            <button onClick={() => setSearchTerm("animals")}>Animals</button>
          </div>
        </div>
      ) : (
        <GameBoard gifs={gifs} onWin={handleWin} />
      )}
      {gameWon && (
        <div className="win-screen">
          <h2>Submit Your Score</h2>
          <form
            className="score-form"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get("name") as string;
              const username = formData.get("username") as string;
              submitScore(name, username, time);
            }}>
            <input type="text" name="name" className="name-input" placeholder="Name" required />
            <input
              type="text"
              name="username"
              className="username-input"
              placeholder="Username"
              required
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
};

export default App;
