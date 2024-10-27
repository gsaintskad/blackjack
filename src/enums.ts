export enum CardSuit {
  Hearts = "♥",
  Diamonds = "♦",
  Clubs = "♣",
  Spades = "♠",
}
export enum CardValue {
  Ace = "A",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
  Jack = "J",
  Queen = "Q",
  King = "K",
}
export function getCardValue(cardValue: CardValue): number {
  switch (cardValue) {
    case CardValue.Ace:
      return 14; // Start with 11; adjust based on hand total if necessary
    case CardValue.Two:
      return 2;
    case CardValue.Three:
      return 3;
    case CardValue.Four:
      return 4;
    case CardValue.Five:
      return 5;
    case CardValue.Six:
      return 6;
    case CardValue.Seven:
      return 7;
    case CardValue.Eight:
      return 8;
    case CardValue.Nine:
      return 9;
    case CardValue.Ten:
      return 10;
    case CardValue.Jack:
      return 11;
    case CardValue.Queen:
      return 12;
    case CardValue.King:
      return 13;
    default:
      throw new Error("Unknown card value");
  }
}
