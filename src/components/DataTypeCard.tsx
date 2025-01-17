import { ArithmeticCard } from "./js/cards/data/ArithmeticCard";
import { AssignmentCard } from "./js/cards/data/AssignmentCard";
import { CommentsCard } from "./js/cards/data/CommetsCard";
import { ConsoleCard } from "./js/cards/data/ConsoleCard";
import { ConstKeywordCard } from "./js/cards/data/ConstKeywordCard";
import { LetKeywordCard } from "./js/cards/data/LetKeywordCard";
import { NumbersCard } from "./js/cards/data/NumbersCard";
import { StringInterpolationCard } from "./js/cards/data/StringInterpolationCard";
import { StringsCard } from "./js/cards/data/StringsCard";
import { VariablesCard } from "./js/cards/data/VariablesCard";

export function DataTypeCard() {
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
        <AssignmentCard />
        <StringInterpolationCard />
        <LetKeywordCard />
        <ConstKeywordCard />
      </div>
    </>
  );
}
