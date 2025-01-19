import { ElseIfCard } from "./js/cards/conditionals/ElseIfCard";
import { EqualConditionCard } from "./js/cards/conditionals/EqualConditionCard";
import { IfStatementCard } from "./js/cards/conditionals/IfStatementCard";
import { OperatorsCard } from "./js/cards/conditionals/OperatorsCard";
import { SwitchStatementCard } from "./js/cards/conditionals/SwitchStatementCard";
import { TernaryOperatorCard } from "./js/cards/conditionals/TernaryOperatorCard";

export function ConditionalsCard() {
  return (
    <>
      <h1 className="card-list-title">JavaScript Conditionals</h1>
      <div className="content-container-operators">
        <div className="left-column">
          <IfStatementCard />
          <TernaryOperatorCard />
          <ElseIfCard />
          <SwitchStatementCard />
          <EqualConditionCard />
        </div>
        <div className="right-column">
          <OperatorsCard />
        </div>
      </div>
    </>
  );
}
