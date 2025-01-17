import { IfStatementCard } from "./js/cards/conditionals/IfStatementCard";
import { OperatorsCard } from "./js/cards/conditionals/OperatorsCard";
import { TernaryOperatorCard } from "./js/cards/conditionals/TernaryOperatorCard";

export function ConditionalsCard() {
  return (
    <>
      <h1 className="card-list-title">JavaScript Conditionals</h1>
      <div className="content-container-operators">
        <div className="left-column">
          <IfStatementCard />
          <TernaryOperatorCard />
          <TernaryOperatorCard />
          <TernaryOperatorCard />
          <TernaryOperatorCard />
        </div>
        <div className="right-column">
          <OperatorsCard />
        </div>
      </div>
    </>
  );
}
