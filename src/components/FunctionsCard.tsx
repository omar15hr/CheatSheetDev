import { DefaultFunctionsCard } from "./js/cards/functions/DefaultFunctionsCard";

export function FunctionsCard() {
  return (
    <>
      <h1 className="card-list-title">JavaScript Functions</h1>
      <div className="content-container-operators">
        <DefaultFunctionsCard />
      </div>
    </>
  );
}
