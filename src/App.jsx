import { useState } from "react";
import Card from "./components/Card";
import { cardsData } from "./data/cardsData";

export default function App() {
  const [search, setSearch] = useState("");

  const filteredCards = cardsData.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bento Grid</h1>

      {/* Barre de recherche */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-2 w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple500"
        />
      </div>

      {/* Grille */}
      <div
        className="
          grid gap-4
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          auto-rows-[150px]
        "
      >
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            bgColor={card.bgColor}
            icon={card.icon}
            image={card.image}
            imagePosition={card.imagePosition}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
