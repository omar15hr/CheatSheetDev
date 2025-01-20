import { AnonymousFunctionsCard } from "./js/cards/functions/AnonymousFunctionsCard";
import { ArrowFunctionsCard } from "./js/cards/functions/ArrowFunctionsCard";
import { DefaultFunctionsCard } from "./js/cards/functions/DefaultFunctionsCard";

export function FunctionsCard() {
  return (
    <>
      <h1 className="card-list-title">JavaScript Functions</h1>
      <div className="content-container-operators">
        <div className="left-column-2">
          <ArrowFunctionsCard />
        </div>
        <div className="right-column-2">
          <DefaultFunctionsCard />
          <AnonymousFunctionsCard />
        </div>
      </div>
    </>
  );
}
