import SingleCard from "./SingleCard";
import type { SingleCardProps } from "./SingleCard";

type ThreeCardsProps = {
  cards: SingleCardProps[];
};

const ThreeCards = ({ cards }: ThreeCardsProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <SingleCard key={card.href} {...card} />
      ))}
    </div>
  );
};

export default ThreeCards;
