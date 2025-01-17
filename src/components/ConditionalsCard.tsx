import { IfStatementCard } from "./js/cards/conditionals/IfStatementCard";
import { TernaryOperatorCard } from "./js/cards/conditionals/TernaryOperatorCard";

export function ConditionalsCard() {
  return (
    <>
      <h1 className="card-list-title">JavaScript Conditionals</h1>
      <div className="content-container">
        <IfStatementCard />
        <TernaryOperatorCard />
      </div>
    </>
  );
}
