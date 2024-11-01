import * as en from "./enums.ts";
import { useState, useEffect } from "react";

interface CardProps {
  suit: en.CardSuit;
  value: en.CardValue;
}
interface Position {
  x: number;
  y: number;
}

const Card = (props: CardProps) => {
  const [isTransforming, setIsTransforming] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState<Position>({ x: 0, y: 0 });
  const [click, setClick] = useState<Position>({x:0,y:0});
  // Event handler with type annotation for the MouseEvent
  const handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const newPosition:Position = {
      x:event.clientX + click.x,
      y:event.clientY + click.y,
    }
    setPosition(newPosition);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id={"card"}
      role="button"
      className={`absolute w-36 h-56 bg-gray-300 rounded-lg flex flex-col justify-between items-stretch`}
      style={
        isTransforming
          ? {
            transform: `translate(${position.x}px, ${position.y}px)`,
            // transition: 'transform ', // Optional: smooth movement
            position: "absolute", // Keep the component in an absolute position
          }
          : {
            // transition: 'transform ', // Optional: smooth movement
            position: "absolute", // Keep the component in an absolute position
            transform: `translate(${lastPosition.x}px, ${lastPosition.y}px)`,
          }
      }
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setClick({x: rect.x - e.screenX, y: rect.y - e.screenY});
        console.log("click :", click)
        setLastPosition({x: e.clientX, y: e.clientY});
        console.log(lastPosition);
        setIsTransforming(!isTransforming);
      }}
    >
      <h1
        className={"text-4xl flex justify-start"}
        style={{
          color:
            props.suit === en.CardSuit.Hearts ||
            props.suit === en.CardSuit.Diamonds
              ? "red"
              : "black",
        }}
      >
        {props.suit}
      </h1>
      <h1
        className={"text-7xl flex justify-center items-center"}
        style={{
          color:
            props.suit === en.CardSuit.Hearts ||
            props.suit === en.CardSuit.Diamonds
              ? "red"
              : "black",
        }}
      >
        {props.value}
      </h1>
      <h1
        className={"text-4xl flex justify-start rotate-180"}
        style={{
          color:
            props.suit === en.CardSuit.Hearts ||
            props.suit === en.CardSuit.Diamonds
              ? "red"
              : "black",
        }}
      >
        {props.suit}
      </h1>
    </div>
  );
};
export default Card;
