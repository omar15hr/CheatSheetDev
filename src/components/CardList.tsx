import { ArithmeticCard } from "./js/cards/ArithmeticCard";
import { CommentsCard } from "./js/cards/CommetsCard";
import { ConsoleCard } from "./js/cards/ConsoleCard";
import { NumbersCard } from "./js/cards/NumbersCard";
import { StringsCard } from "./js/cards/StringsCard";
import { VariablesCard } from "./js/cards/VariablesCard";

export function CardList() {
  return (
    <>
      <h1 className="card-list-title">Get Started</h1>
      <div className="content-container">
        <ConsoleCard />
        <NumbersCard />
        <VariablesCard />
        <StringsCard />
        <ArithmeticCard />
        <CommentsCard />
      </div>
    </>
  );
}
