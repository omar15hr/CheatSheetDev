import { ConditionalsCard } from "./ConditionalsCard";
import { DataTypeCard } from "./DataTypeCard";
import { FunctionsCard } from "./FunctionsCard";

export function CardList() {
  return (
    <>
      <DataTypeCard />
      <ConditionalsCard />
      <FunctionsCard />
    </>
  );
}
