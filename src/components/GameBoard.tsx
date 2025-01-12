import React, { useState, useEffect, useCallback } from "react";
//
import { Gif } from "../types";
import { ChevronLeft } from "lucide-react";

interface GameBoardProps {
  gifs: Gif[];
  onWin: (timeTaken: number) => void;
  onBack: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ gifs, onWin, onBack }) => {
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
    <>
      <div className="my-6 px-6">
        <button
          className=" text-red-700 hover:bg-gray-100 py-2 pl-2 pr-4 rounded-lg flex items-center gap-1 font-semibold"
          onClick={onBack}
        >
          <ChevronLeft /> Back
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 m-4 md:h-[80%] lg:mx-auto">
        {gifs.map((gif, index) => {
          const cachedImage = new Image();
          cachedImage.src = gif.url;
          const isFlipped = selectedCards.includes(index) || matchedCards.includes(index);

          return (
            <div
              key={index}
              className={`card rounded-lg w-[80px] h-[80px] md:w-[200px] md:h-[200px]  ${
                isFlipped ? "flipped" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              {isFlipped ? (
                <img src={cachedImage.src} alt={gif.title} />
              ) : (
                <div className="back">?</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameBoard;
