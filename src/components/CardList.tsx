import { ConsoleCard } from "./cards/ConsoleCard";
import { NumbersCard } from "./cards/NumbersCard";
import { VariablesCard } from "./cards/VariablesCard";

export function CardList() {
  return (
    <>
      <h1 className="card-list-title">Get Started</h1>
      <div className="content-container">
        <ConsoleCard />
        <NumbersCard />
        <VariablesCard />
      </div>
    </>
  );
}
