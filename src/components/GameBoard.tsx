import React, { useState, useEffect, useCallback } from "react";
//
import { Gif } from "../types";

interface GameBoardProps {
  gifs: Gif[];
  onWin: (timeTaken: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ gifs, onWin }) => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [startTime] = useState<number>(Date.now());

  const FLIP_DELAY = 1000; // Time in milliseconds to reset flipped cards

  const handleCardClick = useCallback(
    (index: number) => {
      if (selectedCards.length < 2 && !selectedCards.includes(index)) {
        setSelectedCards((prev) => [...prev, index]);
      }
    },
    [selectedCards]
  );

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;

      // Check if the selected cards match
      if (gifs[firstIndex].id === gifs[secondIndex].id) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      // Reset selected cards after delay
      const timer = setTimeout(() => {
        setSelectedCards([]);
      }, FLIP_DELAY);

      return () => clearTimeout(timer);
    }
  }, [selectedCards, gifs]);

  useEffect(() => {
    if (matchedCards.length === gifs.length) {
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // Calculate in seconds
      onWin(timeTaken);
    }
  }, [matchedCards, gifs.length, onWin, startTime]);

  return (
    <div className="game-board">
      {gifs.map((gif, index) => {
        const isFlipped = selectedCards.includes(index) || matchedCards.includes(index);

        return (
          <div
            key={index}
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}>
            {isFlipped ? <img src={gif.url} alt={gif.title} /> : <div className="back">?</div>}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
