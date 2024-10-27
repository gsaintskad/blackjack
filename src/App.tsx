import Card from "./card.tsx";
import * as en from "./enums.ts";

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Card suit={en.CardSuit.Hearts} value={en.CardValue.Ace} />
      <Card suit={en.CardSuit.Spades} value={en.CardValue.Ace} />
      <Card suit={en.CardSuit.Diamonds} value={en.CardValue.Ace} />
      <Card suit={en.CardSuit.Clubs} value={en.CardValue.Ace} />
    </div>
  );
}

export default App;
